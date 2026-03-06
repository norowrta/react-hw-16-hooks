export default function Section({ title, children }) {
  return (
    <section className="Section">
      <h2 className="SectionTitle">{title}</h2>
      {children}
    </section>
  );
}
