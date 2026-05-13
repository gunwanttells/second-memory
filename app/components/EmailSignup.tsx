"use client";
import { useState, type FormEvent } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email) setSubmitted(true);
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
          We&apos;ll reach out when your founding spot is ready.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto"
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
        style={{ backgroundColor: "#2A9D8F" }}
        className="px-6 py-3.5 rounded-full text-white font-semibold text-sm hover:brightness-110 transition-all whitespace-nowrap"
      >
        Request Access
      </button>
    </form>
  );
}
