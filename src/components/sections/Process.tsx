import { workflow } from "@/content/site";
import { ProcessSteps } from "../ProcessSteps";

export function Process() {
  return (
    <section id="wspolpraca" aria-labelledby="process-title" className="section bg-ink">
      <div className="shell">
        {/* "Współpraca" opens the heading on an ivory plate (client, 2026-11-26). */}
        <h2 id="process-title" className="mb-[clamp(56px,6vw,96px)]">
          <span className="plate-line plate-ivory mb-[clamp(16px,1.8vw,26px)]">
            <span>{workflow.lead}</span>
          </span>
          <span className="display-2 block max-w-[12em]">{workflow.headline}</span>
        </h2>
        <ProcessSteps />
      </div>
    </section>
  );
}
