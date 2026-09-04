/**
 * Credibility strip — four structured proof points shown immediately below the
 * hero. Uses the shared `.pf-container` so its edges match the hero copy and the
 * Selected Builds section exactly. Semantic <dl>/<dt>/<dd>; not interactive.
 */
const CRED_ITEMS: { value: string; label: string }[] = [
  { value: "8+ Years", label: "Shipping Software" },
  { value: "Web · iOS · Android", label: "Multi-Platform Delivery" },
  { value: "Dev Lead", label: "Engineering Leadership" },
  { value: "Live Products", label: "Released and maintained" },
];

export default function CredibilityStrip() {
  return (
    <section className="pf-credstrip" aria-label="Credentials at a glance">
      <div className="pf-container">
        <dl className="pf-credstrip__grid">
          {CRED_ITEMS.map((item) => (
            <div className="pf-cred" key={item.label}>
              <dt className="pf-cred__value">{item.value}</dt>
              <dd className="pf-cred__label">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
