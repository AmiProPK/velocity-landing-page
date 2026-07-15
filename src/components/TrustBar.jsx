const BADGES = [
  'Best Estimated ROI',
  'Hosting Leader — 50 G2 Awards',
  'Best Results, Small Business',
  'High Performer, Mid-Market',
  'Ease of Doing Business',
];

export default function TrustBar() {
  return (
    <section style={{ padding: '56px 0' }}>
      <div className="wrap">
        <div className="trust-bar">
          <span className="trust-label">The Managed Cloud Hosting Leader on G2</span>
          <div className="trust-badges">
            {BADGES.map((b) => (
              <span className="trust-badge" key={b}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
