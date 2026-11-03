"use client";
import { useState, type FormEvent } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || sending) return;
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-2">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{
            backgroundColor: "rgba(42,157,143,0.12)",
            border: "1px solid rgba(42,157,143,0.35)",
          }}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#2A9D8F" strokeWidth="2.2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-white font-semibold text-xl mb-1">You&apos;re on the list.</p>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
          We&apos;ll email you when your spot is ready.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 px-5 py-3.5 rounded-full text-sm text-white placeholder:text-white/25 border focus:outline-none transition-colors"
        style={{
          backgroundColor: "rgba(255,255,255,0.07)",
          borderColor: "rgba(255,255,255,0.12)",
        }}
        suppressHydrationWarning
      />
      <button
        type="submit"
        disabled={sending}
        style={{ backgroundColor: "#2A9D8F" }}
        className="px-6 py-3.5 rounded-full text-white font-semibold text-sm hover:brightness-110 transition-all whitespace-nowrap disabled:opacity-60"
      >
        {sending ? "Joining…" : "Join the waitlist"}
      </button>
    </form>
    {error && (
      <p role="alert" className="mt-3 text-sm text-center" style={{ color: "#f4a4a4" }}>
        {error}
      </p>
    )}
    </div>
  );
}
