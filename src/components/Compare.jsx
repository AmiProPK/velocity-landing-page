const ITEMS = [
  {
    tag: 'vs. Vercel / Netlify',
    title: 'Predictable over unpredictable',
    desc: 'No cold starts, no usage-based billing surprises — persistent servers at flat monthly pricing.',
  },
  {
    tag: 'vs. Render / Railway',
    title: 'Managed, plus enterprise-grade',
    desc: "A similar managed experience, plus enterprise security, CDN, and Cloudways' proven infrastructure reliability.",
  },
  {
    tag: 'vs. Raw VPS / DIY',
    title: 'Control without the burden',
    desc: 'Full control over your environment, without the server config, patching, or maintenance overhead.',
  },
];

export default function Compare() {
  return (
    <section className="why">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Comparison</div>
          <h2>Why Teams Choose Velocity Over the Alternatives</h2>
        </div>
        <div className="vs-grid">
          {ITEMS.map((item) => (
            <div className="vs-card" key={item.tag}>
              <div className="vs-tag">{item.tag}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
