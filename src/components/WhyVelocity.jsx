export default function WhyVelocity() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">The problem</div>
          <h2>The Old Way of Hosting Node.js Was Always a Compromise</h2>
          <p>Serverless punishes growth. Managed PaaS skips security. Raw VPS hands you the ops burden. Velocity was built to remove the trade-off.</p>
        </div>

        <div className="compare-grid">
          <div className="compare-col">
            <div className="label">Serverless</div>
            <svg viewBox="0 0 220 52">
              <path
                d="M0,26 L30,26 M30,26 L30,10 L60,10 L60,26 M90,26 L90,42 L120,42 L120,26 M150,26 L150,8 L180,8 L180,26 M210,26 L220,26"
                stroke="#9490B0" strokeWidth="2" strokeDasharray="2 4" fill="none"
              />
            </svg>
            <p>Cold starts on every idle request, and a bill that moves with traffic you don't control.</p>
          </div>

          <div className="compare-col">
            <div className="label">Managed PaaS</div>
            <svg viewBox="0 0 220 52">
              <path d="M0,26 L220,26" stroke="#9490B0" strokeWidth="2" fill="none" />
              <circle cx="70" cy="26" r="3" fill="#9490B0" />
              <circle cx="150" cy="26" r="3" fill="#9490B0" />
            </svg>
            <p>Friendly onboarding, but WAF, DDoS protection, and CDN are left as an afterthought.</p>
          </div>

          <div className="compare-col">
            <div className="label">Raw VPS / DIY</div>
            <svg viewBox="0 0 220 52">
              <path
                d="M0,30 L20,12 L40,38 L60,8 L80,34 L100,16 L120,40 L140,10 L160,32 L180,14 L200,36 L220,20"
                stroke="#9490B0" strokeWidth="2" fill="none"
              />
            </svg>
            <p>Full control over the server — and now you're the one patching, monitoring, and restarting it.</p>
          </div>

          <div className="compare-col is-velocity">
            <div className="label">Velocity</div>
            <svg viewBox="0 0 220 52">
              <path
                d="M0,26 C15,14 30,38 45,26 C60,14 75,38 90,26 C105,14 120,38 135,26 C150,14 165,38 180,26 C195,14 210,38 220,30"
                stroke="#A688F7" strokeWidth="3" strokeLinecap="round" fill="none"
              />
            </svg>
            <p><strong>Persistent servers, flat pricing, production security</strong> — from day one, with nothing bolted on.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
