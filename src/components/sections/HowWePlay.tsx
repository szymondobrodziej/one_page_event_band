import Image from "next/image";
import { howWePlay, photos } from "@/content/site";

type Seat = { label: string; count: number };

// Schematic of the eleven positions, from the client's own line-up list. The exact plan lives in the rider.
const ROWS: Seat[][] = [
  [
    { label: "Perkusja", count: 1 },
    { label: "Perkusjonalia", count: 1 },
    { label: "Klawisze", count: 1 },
  ],
  [
    { label: "Bas", count: 1 },
    { label: "Gitara", count: 1 },
    { label: "Sekcja dęta", count: 3 },
  ],
  [{ label: "Wokale", count: 3 }],
];

function StagePlot() {
  return (
    <figure className="m-0 mt-12">
      <div className="border border-rule-ink px-4 pt-8" role="img" aria-label="Schemat składu na scenie: z tyłu perkusja, perkusjonalia i klawisze; w środku bas, gitara i trzyosobowa sekcja dęta; z przodu trzy wokale.">
        <div className="flex flex-col gap-7">
          {ROWS.map((row, r) => (
            <div key={r} className="flex justify-center gap-[clamp(18px,4vw,52px)]">
              {row.map((seat) => (
                <div key={seat.label} className="flex min-w-16 flex-col items-center gap-2.5">
                  <span className={`flex ${seat.label === "Wokale" ? "gap-9" : "gap-3.5"}`}>
                    {Array.from({ length: seat.count }, (_, i) => (
                      <span key={i} className="size-3.5 rounded-full bg-ivory" />
                    ))}
                  </span>
                  <span className="text-center text-[13px] text-ash">{seat.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-7 border-t border-rule-strong py-3 text-center text-[13px] text-stone">Przód sceny</div>
      </div>
      <figcaption className="mt-3.5 text-[14px] text-stone">Schemat składu. Dokładny plan sceny jest w riderze.</figcaption>
    </figure>
  );
}

export function HowWePlay() {
  return (
    <section id="jak-gramy" aria-label="Jak gramy" className="bg-ink">
      <div className="relative h-[clamp(420px,52vw,780px)]">
        <Image src={photos.horns.src} alt={photos.horns.alt} fill sizes="100vw" quality={80} className="object-cover object-[38%_30%] doc-photo" />
      </div>
      <div className="shell section flex flex-wrap gap-x-[clamp(48px,7vw,120px)] gap-y-18">
        {howWePlay.map((block, i) => (
          <article key={block.title} className="min-w-0 flex-[1_1_400px]">
            <h2 className="display-3">{block.title}</h2>
            <p className="mt-7 max-w-[30em] text-[18px] leading-[1.7] text-ash">{block.body}</p>
            {i === 1 && <StagePlot />}
          </article>
        ))}
      </div>
    </section>
  );
}
