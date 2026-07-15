const FRAMEWORKS = [
  'NextJS', 'React', 'Remix', 'TanStack', 'Astro', 'Nuxt',
  'Svelte', 'Vite', 'Express', 'Fastify', 'Angular', 'n8n',
];

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="product-tag">
          <span className="name">Cloudways Velocity</span>
          <span className="divider-dot"></span>
          <span>Managed Node.js Hosting</span>
        </div>

        <div className="pill-row">
          <span className="pill"><span className="dot"></span>Now in Public Preview</span>
          <span className="pill outline">No charges during Preview</span>
        </div>

        <h1>Managed Node.js Hosting, <span className="accent-word">Always Warm.</span></h1>
        <p className="sub">
          Deploy production-ready Node.js apps in minutes. Managed infrastructure,
          enterprise-grade security, and flat, predictable pricing — no sysadmin,
          no cold starts, no surprises.
        </p>

        <div className="hero-ctas">
          <a href="#" className="btn">Get Started Free</a>
          <a href="#why" className="btn ghost">See how it works ↓</a>
        </div>

        <div className="fw-label">Supports 12 frameworks, out of the box</div>
        <div className="fw-strip">
          {FRAMEWORKS.map((fw) => (
            <span className="fw-chip" key={fw}>{fw}</span>
          ))}
        </div>

        {/* signature element: persistent pulse vs cold-start gaps */}
        <div className="pulse-wrap">
          <svg viewBox="0 0 760 70" fill="none">
            <path
              d="M0,35 C20,15 40,55 60,35 C80,15 100,55 120,35 C140,15 160,55 180,35 C200,15 220,55 240,35 C260,15 280,55 300,35 C320,15 340,55 360,35 C380,15 400,55 420,35 C440,15 460,55 480,35 C500,15 520,55 540,35 C560,15 580,55 600,35 C620,15 640,55 660,35 C680,15 700,55 720,35 C730,25 745,45 760,35"
              stroke="#A688F7" strokeWidth="2.5" strokeLinecap="round"
            />
          </svg>
          <div className="pulse-caption">// one continuous connection — no spin-up, no idle teardown</div>
        </div>
      </div>
    </header>
  );
}
