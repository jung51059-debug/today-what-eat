import Image from "next/image";

export function ScreenshotSection() {
  return (
    <section
      aria-labelledby="screenshots-heading"
      className="relative overflow-hidden bg-cream pb-16 pt-12 sm:pb-20 sm:pt-14"
    >
      {/* 배경 장식 — 프로모션 쇼케이스 분위기 */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-mint/6 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#ebe3d8]/70 blur-3xl" />
        <div className="absolute left-1/2 top-8 h-48 w-[480px] -translate-x-1/2 rounded-full bg-white/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="screenshots-heading"
            className="text-[19px] font-bold text-ink sm:text-[22px]"
          >
            앱 미리보기
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink-muted sm:text-[19px]">
            상황 선택부터 맛집 탐색까지, 직관적인 화면으로 빠르게 결정해
            보세요.
          </p>
        </div>

        {/* 업로드한 프로모션 이미지 쇼케이스 */}
        <figure className="mx-auto mt-14 max-w-5xl sm:mt-16">
          <div className="screenshot-card-hover overflow-hidden rounded-2xl shadow-[0_8px_32px_rgb(0_0_0/0.06)]">
            <Image
              src="/app-showcase.jpg"
              alt="오늘 뭐 먹지? 앱 주요 화면 — 상황 선택, 메뉴 추천, 근처 맛집"
              width={1024}
              height={633}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
              className="h-auto w-full"
              priority
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
