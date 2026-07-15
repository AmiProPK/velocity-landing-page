const GROUPS = [
  { name: 'Full-stack React apps', desc: 'SSR, SSG & client-side apps', tags: ['NextJS', 'Remix', 'TanStack', 'React'] },
  { name: 'Backend APIs & services', desc: 'REST APIs & microservices', tags: ['Express', 'Fastify'] },
  { name: 'Content & performance sites', desc: 'Fast, SEO-friendly frontends', tags: ['Astro', 'Nuxt', 'Svelte', 'Vite'] },
  { name: 'Enterprise frontends', desc: 'Structured, TypeScript-first', tags: ['Angular'] },
  { name: 'Automation & AI workflows', desc: 'Self-hosted, always-on', tags: ['n8n'] },
];

export default function Frameworks() {
  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Frameworks</div>
          <h2>One Platform, Every Way You Build with Node.js</h2>
          <p>Whatever you're shipping — a full-stack app, a backend API, a content site, an internal tool, or an automation workflow — Velocity has a preset ready for it.</p>
        </div>

        <div className="fw-groups">
          {GROUPS.map((g) => (
            <div className="fw-row" key={g.name}>
              <div>
                <div className="group-name">{g.name}</div>
                <div className="group-desc">{g.desc}</div>
              </div>
              <div className="fw-tags">
                {g.tags.map((t) => (
                  <span className="fw-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="fw-more"><a href="#">Don't see your framework? Talk to us →</a></div>
      </div>
    </section>
  );
}
