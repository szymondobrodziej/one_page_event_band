import { workflow } from "@/content/site";

export function Process() {
  const last = workflow.steps.length - 1;
  return (
    <section id="wspolpraca" aria-labelledby="process-title" className="section bg-ink">
      <div className="shell">
        <h2 id="process-title" className="display-2 mb-[clamp(56px,6vw,96px)] max-w-[12em]">
          {workflow.headline}
        </h2>
        <div className="relative">
          <div className="absolute inset-x-0 top-[88px] hidden h-px bg-rule-strong md:block" aria-hidden="true" />
          <ol className="relative grid list-none gap-x-8 gap-y-14 p-0 md:grid-cols-5">
            {workflow.steps.map((step, i) => (
              <li key={step.title} className="flex flex-col">
                <span
                  className={`font-display text-[64px] font-light leading-none tracking-[-0.04em] tabular-nums ${i === last ? "text-gold" : "text-ivory"}`}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-[19px] hidden size-[9px] rounded-full bg-gold shadow-[0_0_0_6px_#111111] md:block"
                />
                <h3 className="mt-7 font-display text-[22px] font-medium tracking-[-0.01em]">
                  <span className="sr-only">Krok {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-1 text-[14px] text-stone">{step.who}</p>
                <p className="mt-3 max-w-[26em] text-[15px] leading-[1.6] text-ash">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
