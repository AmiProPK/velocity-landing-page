const PLANS = [
  { name: 'Starter', price: 20, vcpus: 2, ram: '2GB', cdn: '100GB', trial: true },
  { name: 'Professional', price: 30, vcpus: 2, ram: '4GB', cdn: '200GB', trial: true },
  { name: 'Growth', price: 50, vcpus: 4, ram: '8GB', cdn: '300GB', trial: false },
  { name: 'Scale', price: 100, vcpus: 8, ram: '16GB', cdn: '400GB', trial: false },
  { name: 'Plus', price: 150, vcpus: 8, ram: '32GB', cdn: '500GB', trial: false },
];

const INCLUDED = ['Enterprise CDN', 'DDoS Protection', 'Malware Protection'];

function Check({ size = 13 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" width={size} height={size}>
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Pricing</div>
          <h2>Predictable Hosting Costs From Day One</h2>
          <p>Pick the server that fits your workload today, and scale vertically as your product grows.</p>
        </div>

        <div className="price-banner">
          Free during Public Preview. Pricing below applies starting General Availability (Aug 31) — you'll be notified before any charge applies.
        </div>
        <div className="price-note">// Starter and Professional include a 3-day free trial at GA — same as Cloudways Flexible</div>

        <div className="price-grid">
          {PLANS.map((plan) => (
            <div className={`price-card${plan.trial ? ' is-featured' : ''}`} key={plan.name}>
              {plan.trial && (
                <>
                  <span className="price-check"><Check size={11} /></span>
                  <span className="trial-ribbon">3-Day Free Trial</span>
                </>
              )}
              <h3>{plan.name}</h3>
              <div className="amount">${plan.price}<span>/month</span></div>
              <ul className="price-specs">
                <li><span>vCPUs</span><span>{plan.vcpus}</span></li>
                <li><span>RAM</span><span>{plan.ram}</span></li>
                <li><span>CDN Bandwidth</span><span>{plan.cdn}</span></li>
                <li><span>Network</span><span>Up to 10 Gbps</span></li>
              </ul>
              <ul className="price-incl">
                {INCLUDED.map((item) => (
                  <li key={item}><Check /> {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="price-foot">Upgrade or downgrade anytime — no lock-in.</div>
        <div className="price-extra">
          A charge of $0.033/GB applies to offsite backup storage beyond plan allocation.<br />
          A charge of $0.02/GB applies to CDN bandwidth used beyond plan allocation.
        </div>
      </div>
    </section>
  );
}
