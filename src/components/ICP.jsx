const PERSONAS = [
  {
    tag: 'Developers',
    title: 'Developers & Engineers',
    desc: 'Full control over your Node.js version, environment variables, build process, and deployment pipeline — without managing a single server.',
  },
  {
    tag: 'Agencies',
    title: 'Agencies',
    desc: "Manage every client's Node.js app from one dashboard with consistent infrastructure, predictable monthly costs, and zero server surprises.",
  },
  {
    tag: 'Startups',
    title: 'SaaS & Startups',
    desc: 'Ship to production from day one without worrying about DevOps processes or configuring a server. Security and CDN included on every plan.',
  },
  {
    tag: 'AI builders',
    title: 'AI Builders',
    desc: 'Run agentic AI workflows and orchestration layers on persistent servers that are always warm and always connected. No cold starts, no dropped connections.',
  },
  {
    tag: 'Founders',
    title: 'Non-Technical Founders',
    desc: 'Deploy a production-ready Node.js app without touching SSH, writing server configs, or understanding what a reverse proxy does.',
  },
];

export default function ICP() {
  return (
    <section className="icp">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Who it's for</div>
          <h2>Built for All Teams That Ship Node.js</h2>
          <p>From solo developers to growing agencies, Velocity is built around how real teams take products from idea to production.</p>
        </div>

        <div className="icp-grid">
          {PERSONAS.map((p) => (
            <div className="icp-card" key={p.title}>
              <div className="tag">{p.tag}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
