const FAQS = [
  {
    q: 'How is this different from serverless hosting?',
    a: 'Serverless platforms spin up on demand and wind down when idle, introducing cold start latency and usage-based billing. Velocity runs on persistent, always-on servers with consistent response times, flat monthly pricing, and no spin-up delays.',
  },
  {
    q: 'Which frameworks and runtimes are supported?',
    a: 'Velocity supports 12 frameworks out of the box: NextJS, Remix, TanStack, React, Astro, Nuxt, Svelte, Vite, Express, Fastify, Angular, and n8n. Node.js LTS versions 22.x and 24.x are available, selectable per application.',
  },
  {
    q: 'Is it really free during Public Preview?',
    a: 'Yes. There is no charge during Public Preview. Pricing applies from General Availability (Aug 31) onwards.',
  },
  {
    q: 'What databases are available?',
    a: "PostgreSQL, MySQL, and MongoDB can all be provisioned directly from the dashboard alongside your application. If your app uses an external database or doesn't need one, you can skip provisioning entirely.",
  },
  {
    q: 'Can I use my own Git repository?',
    a: 'Yes. Connect your GitHub, GitLab, or Bitbucket repository, select your deployment branch, and Velocity handles the rest. You can deploy from any branch at any time.',
  },
  {
    q: 'What security features are included on every plan?',
    a: 'Every plan includes a Web Application Firewall, DDoS protection, Malware Protection, and Enterprise CDN.',
  },
  {
    q: 'Can I host multiple apps on one server?',
    a: 'Multi-app hosting on a single server is not available at General Availability. Each application runs on its own isolated server.',
  },
  {
    q: 'Can I change my plan later?',
    a: "Yes. You can upgrade or downgrade your plan at any time as your workload changes — there's no lock-in.",
  },
  {
    q: 'Is there a free trial?',
    a: 'Starting at General Availability, Starter and Professional plans include a 3-day free trial, so you can test Velocity on a real workload before committing. During Public Preview, access is free for all plans regardless of tier.',
  },
  {
    q: 'What happens when Public Preview ends?',
    a: 'Your app stays live and your data remains intact when Public Preview transitions to General Availability. There is no migration required and no downtime. Pricing will apply from GA onward and you will be notified in advance.',
  },
  {
    q: 'What support is available?',
    a: '24/7 expert support from the Cloudways team is available on all plans, covering infrastructure and platform issues.',
  },
  {
    q: 'How do I get started?',
    a: 'Public Preview is open. Click Get Started, connect your Git repository, and deploy — no invite required.',
  },
];

export default function FAQ() {
  return (
    <section id="faq">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">FAQ</div>
          <h2>Questions, Answered</h2>
        </div>

        <div className="faq-list">
          {FAQS.map((item, i) => (
            <details key={item.q} open={i === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
