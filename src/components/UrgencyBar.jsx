import { scrollTo } from "../utils/scroll";
import { SLOTS_LEFT, TOTAL_SLOTS } from "../data/content";

export default function UrgencyBar() {
  return (
    <div className="relative bg-tw-bg-dark py-10 px-[5%] overflow-hidden" role="status" aria-label="Availability status">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(230,57,70,0.12)] via-transparent to-[rgba(230,57,70,0.12)] pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tw-primary/40 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tw-primary/40 to-transparent" aria-hidden="true" />

      <div className="relative max-w-[1280px] mx-auto flex items-center justify-center gap-9 flex-wrap">
        <div className="text-center">
          <div className="font-heading text-[2rem] font-extrabold text-tw-primary drop-shadow-[0_0_12px_rgba(230,57,70,0.4)]">{SLOTS_LEFT}</div>
          <div className="text-[0.8rem] text-tw-muted-light font-medium tracking-wide uppercase">slots left this week</div>
        </div>
        <div className="flex gap-[6px]" aria-label={`${TOTAL_SLOTS - SLOTS_LEFT} of ${TOTAL_SLOTS} slots filled`} role="img">
          {Array.from({ length: TOTAL_SLOTS }).map((_, i) => (
            <div
              key={i}
              className={`w-5 h-5 rounded transition-transform ${i < TOTAL_SLOTS - SLOTS_LEFT ? "bg-tw-primary shadow-[0_0_8px_rgba(230,57,70,0.4)]" : "bg-white/[0.06] border border-white/10"}`}
            />
          ))}
        </div>
        <div className="text-[0.95rem] text-tw-muted-light font-normal max-w-[400px] leading-relaxed">
          We limit slots to ensure every project gets <strong className="text-white font-semibold">dedicated focus.</strong>
        </div>
        <button
          className="bg-tw-primary text-white border-none rounded-lg px-7 py-3.5 font-body text-[0.92rem] font-bold cursor-pointer transition-all inline-flex items-center gap-2 shadow-[0_0_20px_rgba(230,57,70,0.3)] hover:bg-tw-primary-hover hover:-translate-y-0.5 hover:shadow-[0_4px_25px_rgba(230,57,70,0.5)]"
          onClick={scrollTo("challenge-form")}
        >
          Reserve My Slot <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
