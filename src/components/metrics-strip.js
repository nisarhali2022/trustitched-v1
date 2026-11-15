// Shared by the home, embroidery digitizing, and vector art pages.
// Only publish figures here that the studio can back up.
const metrics = [
  ["12+ years", "Hands-on experience"],
  ["25,000+", "Files delivered"],
  ["12–24 hr", "Standard turnaround"],
  ["99.8%", "Approval rate"],
];

export function MetricsStrip() {
  return (
    <section className="border-b border-line bg-white" aria-label="Trustitched studio metrics">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4 lg:px-8">
        {metrics.map(([value, label]) => (
          <div className="border-line px-3 py-8 text-center even:border-l lg:border-l lg:first:border-l-0" key={label}>
            <strong className="block font-display text-3xl text-ink sm:text-4xl">{value}</strong>
            <span className="mt-2 block text-sm text-slate">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
