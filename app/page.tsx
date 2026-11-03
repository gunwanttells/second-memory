import type { ReactNode } from "react";
import EmailSignup from "./components/EmailSignup";

// ─── Browser mockup helpers ──────────────────────────────────────────────────

function NavDot({ color }: { color: string }) {
  return <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />;
}

function Chip({ label, accent }: { label: string; accent?: boolean }) {
  return (
    <span
      className="px-2 py-0.5 rounded-full text-[9px] font-medium"
      style={{
        backgroundColor: accent ? "rgba(42,157,143,0.15)" : "rgba(255,255,255,0.06)",
        color: accent ? "#2A9D8F" : "rgba(255,255,255,0.4)",
        border: accent
          ? "1px solid rgba(42,157,143,0.3)"
          : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {label}
    </span>
  );
}

function SidebarIcon({
  active,
  children,
}: {
  active?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className="w-7 h-7 flex items-center justify-center rounded-lg"
      style={{ backgroundColor: active ? "rgba(42,157,143,0.2)" : "transparent" }}
    >
      <svg
        width="14"
        height="14"
        fill="none"
        viewBox="0 0 24 24"
        stroke={active ? "#2A9D8F" : "rgba(255,255,255,0.25)"}
        strokeWidth="2"
      >
        {children}
      </svg>
    </div>
  );
}

function BrowserMockup() {
  return (
    <div
      className="w-full max-w-[500px] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Chrome bar */}
      <div
        className="flex items-center gap-3 px-4 py-2.5"
        style={{ backgroundColor: "#12192a" }}
      >
        <div className="flex gap-1.5">
          <NavDot color="#FF6059" />
          <NavDot color="#FFBE2E" />
          <NavDot color="#28C840" />
        </div>
        <div
          className="flex-1 rounded-md px-3 py-1 text-[11px]"
          style={{ backgroundColor: "rgba(0,0,0,0.3)", color: "rgba(255,255,255,0.2)" }}
        >
          app.secondmemory.com
        </div>
      </div>

      {/* App layout */}
      <div className="flex" style={{ backgroundColor: "#0a1929", height: "360px" }}>
        {/* Sidebar */}
        <div
          className="flex flex-col items-center py-4 gap-3 px-2"
          style={{
            width: "52px",
            backgroundColor: "#071420",
            borderRight: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center font-bold"
            style={{ backgroundColor: "#2A9D8F", fontSize: "10px", color: "#fff" }}
          >
            SM
          </div>
          <div className="flex flex-col gap-2 mt-3">
            {/* People – active */}
            <SidebarIcon active>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </SidebarIcon>
            {/* Today */}
            <SidebarIcon>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
            </SidebarIcon>
            {/* Calendar */}
            <SidebarIcon>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </SidebarIcon>
            {/* Insights */}
            <SidebarIcon>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </SidebarIcon>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-hidden p-5 flex flex-col">
          {/* Breadcrumb */}
          <p className="text-[10px] mb-4" style={{ color: "rgba(255,255,255,0.22)" }}>
            People ›{" "}
            <span style={{ color: "rgba(255,255,255,0.5)" }}>Priya Sharma</span>
          </p>

          {/* Person header */}
          <div className="flex items-start gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0"
              style={{ backgroundColor: "#2A9D8F", fontSize: "13px", color: "#fff" }}
            >
              PS
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-white font-semibold text-sm leading-tight">
                Priya Sharma
              </p>
              <p className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                Best friend · Since college
              </p>
              <div className="flex gap-1.5 mt-2">
                <Chip label="Inner circle" accent />
                <Chip label="Far away" />
              </div>
            </div>
            <span
              className="text-[10px] px-2.5 py-1 rounded-full font-medium flex-shrink-0"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              3w ago
            </span>
          </div>

          {/* Stats */}
          <div
            className="flex gap-5 pb-4 mb-4"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div>
              <p className="text-white text-sm font-semibold leading-tight">11 yrs</p>
              <p className="text-[9px] mt-0.5" style={{ color: "rgba(255,255,255,0.25)" }}>
                friends
              </p>
            </div>
            <div
              style={{
                borderLeft: "1px solid rgba(255,255,255,0.07)",
                paddingLeft: "20px",
              }}
            >
              <p className="text-white text-sm font-semibold leading-tight">Call</p>
              <p className="text-[9px] mt-0.5" style={{ color: "rgba(255,255,255,0.25)" }}>
                last interaction
              </p>
            </div>
            <div
              style={{
                borderLeft: "1px solid rgba(255,255,255,0.07)",
                paddingLeft: "20px",
              }}
            >
              <p className="text-white text-sm font-semibold leading-tight">Toronto</p>
              <p className="text-[9px] mt-0.5" style={{ color: "rgba(255,255,255,0.25)" }}>
                lives in
              </p>
            </div>
          </div>

          {/* Recommended Opener */}
          <div
            className="rounded-xl p-3.5 mb-3.5"
            style={{
              backgroundColor: "rgba(42,157,143,0.07)",
              border: "1px solid rgba(42,157,143,0.22)",
            }}
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <span style={{ color: "#2A9D8F", fontSize: "10px" }}>✦</span>
              <p
                className="text-[9px] font-semibold tracking-widest"
                style={{ color: "#2A9D8F" }}
              >
                A GOOD MOMENT TO REACH OUT
              </p>
            </div>
            <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Her mum had surgery last Thursday. Priya would be genuinely glad to hear from you — ask how Mum is recovering.
            </p>
          </div>

          {/* Memory chips */}
          <div className="mt-auto">
            <p
              className="text-[9px] mb-2 tracking-widest"
              style={{ color: "rgba(255,255,255,0.18)" }}
            >
              MEMORIES
            </p>
            <div className="flex flex-wrap gap-1.5">
              <Chip label="Mum's surgery" />
              <Chip label="Loves pottery" />
              <Chip label="New flat" />
              <Chip label="Birthday 14 Mar" />
              <Chip label="+ 6 more" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const features = [
  {
    title: "Just say it out loud",
    description:
      "After a call or a dinner, talk for 30 seconds. Second Memory pulls out what mattered — her mum's surgery, his new job, the trip they're planning — and files it under the right person. No typing, no forms.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "Know what to say",
    description:
      "Before you call someone, see a short card: what's been going on in their life, what you talked about last, and a warm way to start. You never have to wonder how to pick the conversation back up.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "The right moment, not a reminder",
    description:
      "A friend is going through something hard. A birthday is close. It's been a while and they'd love to hear from you. We tell you when reaching out would land best, and always as a reason to connect, never as guilt.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
      </svg>
    ),
  },
  {
    title: "Built for your inner circle",
    description:
      "Not a contact list of hundreds. Second Memory looks after the handful of people who matter most — family and close friends — so you can be the one who always remembers, and they feel it.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "Is my data private?",
    a: "Yes. Your notes about the people you love are yours. We will never sell your data or show you ads, and you'll be able to export or delete everything at any time. You pay us, so we work for you.",
  },
  {
    q: "Will it make me feel guilty?",
    a: "No, and that's on purpose. Most people don't drift from friends because they don't care, but because they assume a message would be an interruption. Second Memory gives you the reason and the permission to reach out, never a count of days since you last did.",
  },
  {
    q: "How is this different from a CRM?",
    a: "CRMs manage deals and pipelines. Second Memory is for the handful of people who matter most to you. It remembers the details of their lives so you can show up for them, and it works best when you close it and go call someone.",
  },
  {
    q: "Is it free?",
    a: "Joining the waitlist is free and needs no card. Second Memory will be a paid app, because we answer to you and not to advertisers. Waitlist members will hear the price before they pay anything.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Nav */}
      <nav
        style={{ backgroundColor: "#1B3A5C" }}
        className="px-8 py-5 flex items-center justify-between"
      >
        <span className="text-white font-bold text-xl tracking-tight">
          Second<span style={{ color: "#2A9D8F" }}>Memory</span>
        </span>
        <a
          href="#signup"
          className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200"
        >
          Join the waitlist
        </a>
      </nav>

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(145deg, #1B3A5C 0%, #0d2540 60%, #091929 100%)",
        }}
        className="relative overflow-hidden py-24 lg:py-32"
      >
        {/* Decorative glows */}
        <div
          style={{ background: "#2A9D8F", opacity: 0.12 }}
          className="absolute w-[600px] h-[600px] rounded-full -top-40 -right-40 blur-3xl pointer-events-none"
        />
        <div
          style={{ background: "#2A9D8F", opacity: 0.06 }}
          className="absolute w-80 h-80 rounded-full bottom-0 -left-20 blur-3xl pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div
              style={{
                color: "#2A9D8F",
                borderColor: "rgba(42,157,143,0.3)",
                backgroundColor: "rgba(42,157,143,0.08)",
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase border rounded-full px-4 py-1.5 mb-8"
            >
              <span style={{ backgroundColor: "#2A9D8F" }} className="w-1.5 h-1.5 rounded-full" />
              For family &amp; close friends
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              They&apos;d love
              <br />
              to <span style={{ color: "#2A9D8F" }}>hear from you.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/50 font-light mb-10 max-w-lg leading-relaxed">
              Second Memory remembers what&apos;s going on in the lives of the people you love, and tells you when it&apos;s a good moment to reach out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <a
                href="#signup"
                style={{ backgroundColor: "#2A9D8F" }}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-semibold text-base hover:brightness-110 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Join the waitlist
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#features"
                className="text-white/50 hover:text-white/80 text-sm font-medium transition-colors duration-200 underline underline-offset-4"
              >
                See how it works
              </a>
            </div>

            <p className="mt-8 text-white/25 text-xs tracking-wide">
              No credit card required &nbsp;·&nbsp; Your notes stay yours
            </p>
          </div>

          {/* Mockup */}
          <div className="hidden lg:flex items-center justify-center">
            <BrowserMockup />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2
              style={{ color: "#1B3A5C" }}
              className="text-4xl font-bold mb-4 tracking-tight"
            >
              Stay close to the people who matter
            </h2>
            <p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed">
              Friendships rarely end. They fade, one busy week at a time.
              Second Memory helps you keep them warm.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  style={{ backgroundColor: "#2A9D8F" }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  {f.icon}
                </div>
                <h3 style={{ color: "#1B3A5C" }} className="font-semibold text-lg mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            style={{ color: "#1B3A5C" }}
            className="text-4xl font-bold text-center mb-14 tracking-tight"
          >
            Common questions
          </h2>
          <div style={{ borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
            {faqs.map((faq, i) => (
              <details
                key={faq.q}
                className="group"
                style={i > 0 ? { borderTop: "1px solid #e5e7eb" } : undefined}
                suppressHydrationWarning
              >
                <summary className="flex items-center justify-between cursor-pointer py-5 gap-4">
                  <span className="font-medium text-base" style={{ color: "#1B3A5C" }}>
                    {faq.q}
                  </span>
                  <span
                    className="text-2xl font-light flex-shrink-0 transition-transform duration-200 group-open:rotate-45"
                    style={{ color: "#2A9D8F", lineHeight: 1 }}
                  >
                    +
                  </span>
                </summary>
                <p
                  className="text-sm leading-relaxed pb-5 pr-8"
                  style={{ color: "#6b7280" }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section
        id="signup"
        style={{ background: "linear-gradient(145deg, #1B3A5C 0%, #0d2540 100%)" }}
        className="py-24 px-6 text-center"
      >
        <div className="max-w-lg mx-auto">
          <div
            style={{
              color: "#2A9D8F",
              borderColor: "rgba(42,157,143,0.3)",
              backgroundColor: "rgba(42,157,143,0.08)",
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase border rounded-full px-4 py-1.5 mb-7"
          >
            <span style={{ backgroundColor: "#2A9D8F" }} className="w-1.5 h-1.5 rounded-full" />
            Early access
          </div>
          <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">
            Be one of the first
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>
            Join the waitlist and we&apos;ll email you when Second Memory is ready
          </p>
          <EmailSignup />
          <p className="mt-7 text-xs" style={{ color: "rgba(255,255,255,0.18)" }}>
            No spam, no ads, no selling your data &nbsp;·&nbsp; No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{ backgroundColor: "#071420" }}
        className="py-8 px-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <span className="text-white font-bold text-sm tracking-tight">
          Second<span style={{ color: "#2A9D8F" }}>Memory</span>
        </span>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
          © 2026 Second Memory. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
          <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
}
