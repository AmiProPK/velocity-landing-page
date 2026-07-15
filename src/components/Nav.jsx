export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap">
        <div className="brand">
          <span className="mark">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4">
              <path d="M13 2 L3 14h8l-1 8 10-12h-8z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="brand-text">
            <span className="name">Cloudways Velocity</span>
            <span className="sub">Managed Node.js Hosting</span>
          </div>
        </div>
        <div className="nav-links">
          <a href="#why">Why Velocity</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="nav-ctas">
          <a href="#" className="nav-login">Login</a>
          <a href="#" className="btn small invert">Get Started Free</a>
        </div>
      </div>
    </nav>
  );
}
