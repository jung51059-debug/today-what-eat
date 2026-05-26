import { APP_NAME } from "@/lib/site";
import { StoreButtons } from "@/components/store-buttons";

export function CtaSection() {
  return (
    <section
      id="download"
      aria-labelledby="cta-heading"
      className="py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="cta-card overflow-hidden rounded-3xl border border-mint/15 px-6 py-8 text-center sm:px-12 sm:py-11">
          <h2
            id="cta-heading"
            className="mb-[-4px] text-balance text-2xl font-bold text-ink sm:text-3xl"
          >
            오늘 뭐 먹을지, 지금 바로 시작해 보세요
          </h2>
          <p className="mx-auto mt-4 max-w-[420px] text-base leading-relaxed text-ink-muted sm:text-lg">
            {APP_NAME}를 스토어에서 내려받고, 상황에 맞는 메뉴와 근처 맛집을
            만나 보세요.
          </p>
          <div className="mt-7 flex justify-center sm:mt-8">
            <StoreButtons size="large" />
          </div>
        </div>
      </div>
    </section>
  );
}
