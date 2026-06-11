import { CTA_HIGHLIGHTS } from "@/lib/site";
import { StoreButtons } from "@/components/store-buttons";

export function CtaSection() {
  return (
    <section
      id="download"
      aria-labelledby="cta-heading"
      className="scroll-mt-24 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="cta-card overflow-hidden rounded-3xl border border-mint/15 px-6 py-8 text-center sm:px-12 sm:py-11">
          <h2
            id="cta-heading"
            className="mb-[-4px] text-balance text-2xl font-bold text-ink sm:text-3xl"
          >
            오늘 뭐 먹을지 고민될 때, 3초 만에 메뉴를 추천받아 보세요.
          </h2>
          <p className="mx-auto mt-4 max-w-[420px] text-base leading-relaxed text-ink-muted sm:text-lg">
            혼밥, 데이트, 회식, 해장까지
            <br />
            상황에 맞는 메뉴와 근처 맛집을 추천해드려요.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {CTA_HIGHLIGHTS.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#DDE8DA] bg-[#F7FCF8] px-4 py-2 text-[15px] font-bold leading-none text-[#5E8F73]"
              >
                ✓ {item}
              </span>
            ))}
          </div>
          <div className="mt-7 flex justify-center sm:mt-8">
            <StoreButtons size="large" />
          </div>
        </div>
      </div>
    </section>
  );
}
