import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";

function createFaqStructuredData(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function FaqSection({ faqs, title, description, className = "bg-white" }) {
  return (
    <section className={`${className} py-20 sm:py-24`}>
      <StructuredData data={createFaqStructuredData(faqs)} />
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading eyebrow="Frequently asked questions" title={title} description={description} align="center" />
        <div className="mt-12 divide-y divide-line border-y border-line">
          {faqs.map(([question, answer]) => (
            <details className="group" key={question}>
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 font-bold text-ink">
                {question}<span className="text-xl font-normal text-teal-dark transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-3xl pb-6 pr-12 leading-7 text-slate">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
