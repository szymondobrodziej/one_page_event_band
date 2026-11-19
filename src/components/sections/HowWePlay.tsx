import { howWePlay } from "@/content/site";

// The answer to the problem section's last line. Text only (corrections, points 4, 5 and 11): the horn photo moved
// to "Co dostajesz", the stage-plan schematic is gone, and the "Jak gramy?" link lands on these words.
export function HowWePlay() {
  return (
    <section id="jak-gramy" aria-label="Jak gramy" className="section bg-ink">
      <div className="shell flex flex-wrap gap-x-[clamp(48px,7vw,120px)] gap-y-18">
        {howWePlay.map((block) => (
          <article key={block.title} className="min-w-0 flex-[1_1_400px]">
            <h2 className="display-3">{block.title}</h2>
            <p className="mt-7 max-w-[30em] text-[18px] leading-[1.7] text-ash">{block.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
