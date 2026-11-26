import { howWePlay, howWePlayTitle } from "@/content/site";

// The answer to the problem section's last line. Text only (corrections, points 4, 5 and 11): the horn photo moved
// to "Co dostajesz" and the stage-plan schematic is gone. The client's "Jak pracujemy?" heads it on an ivory plate
// (2026-11-26), and the nav link of the same name lands here.
export function HowWePlay() {
  return (
    <section id="jak-pracujemy" aria-labelledby="how-title" className="section bg-ink">
      <div className="shell">
        <h2 id="how-title" className="plate-line plate-ivory mb-[clamp(48px,6vw,88px)]">
          <span>{howWePlayTitle}</span>
        </h2>
        <div className="flex flex-wrap gap-x-[clamp(48px,7vw,120px)] gap-y-18">
          {howWePlay.map((block) => (
            <article key={block.title} className="min-w-0 flex-[1_1_400px]">
              <h3 className="display-3">{block.title}</h3>
              <p className="mt-7 max-w-[30em] text-[18px] leading-[1.7] text-ash">{block.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
