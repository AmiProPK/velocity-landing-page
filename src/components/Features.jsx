const FEATURES = [
  {
    title: 'Deploy in Seconds',
    desc: 'Connect your GitHub, GitLab, or Bitbucket repo, push, and go live instantly. Every commit triggers a zero-downtime deployment with a traceable preview URL.',
    icon: <path d="M12 2v20M2 12h20" strokeLinecap="round" />,
  },
  {
    title: 'Fully Managed',
    desc: 'OS patching, SSL certificates, custom domain mapping, and backups handled automatically — secure and recoverable without lifting a finger.',
    icon: (
      <>
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </>
    ),
  },
  {
    title: 'Optimized by Default',
    desc: 'Pre-configured NGINX and PM2 stack with caching built in. 2M+ NPM packages, plus PostgreSQL, MySQL, or MongoDB provisioning on every plan.',
    icon: <path d="M13 2 L3 14h8l-1 8 10-12h-8z" />,
  },
  {
    title: 'Stay in Control',
    desc: 'Monitor your entire Node.js service in real time from the dashboard. Start, stop, and scale with one click — CPU, memory, and load always visible.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
  },
  {
    title: 'Enterprise-Grade Security',
    desc: 'WAF, Malware Protection, DDoS mitigation, and a Cloudflare Enterprise CDN add-on included at no extra cost. Security is on by default.',
    icon: <path d="M12 3l7 4v5c0 5-3 8-7 9-4-1-7-4-7-9V7z" />,
  },
  {
    title: 'Predictable Pricing, Zero Surprises',
    desc: 'Flat monthly plans with no usage-based billing spikes and no hidden fees. Know exactly what you pay, every month.',
    icon: <path d="M4 19h16M4 15l4-4 4 3 6-8" />,
  },
];

export default function Features() {
  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Platform</div>
          <h2>Everything You Need to Ship Node.js Apps with Confidence</h2>
          <p>Stop worrying about servers, security patches, and scaling thresholds. Velocity manages all of it, so your team spends more time writing code that matters.</p>
        </div>

        <div className="feat-grid">
          {FEATURES.map((f) => (
            <div className="feat-card" key={f.title}>
              <div className="feat-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">{f.icon}</svg>
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
