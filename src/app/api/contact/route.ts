import { NextRequest, NextResponse } from "next/server";

// In-memory rate limiting by IP — resets on server restart / new deployment
const submissions = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT = 3; // max submissions per window
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = submissions.get(ip);

  if (!entry || now > entry.resetAt) {
    submissions.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) {
    return true;
  }

  entry.count++;
  return false;
}

export async function POST(request: NextRequest) {
  // Get client IP
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  // Rate limit check
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  const body = await request.json();
  const { name, email, company, message } = body;

  // Basic validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  // Honeypot check — if filled, silently succeed (it's a bot)
  if (body._honey) {
    return NextResponse.json({ success: true });
  }

  // Forward to FormSubmit
  try {
    const res = await fetch("https://formsubmit.co/ajax/rick.huang@starup01.jp", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name,
        email,
        company: company || "N/A",
        message,
        _subject: "New inquiry from Spin UX website",
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
