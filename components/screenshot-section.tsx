import Image from "next/image";

const SCREENSHOTS = [
  {
    label: "상황 선택",
    src: "/screenshot-1.png",
    alt: "혼밥, 데이트, 회식 등 상황을 고르는 앱 화면",
  },
  {
    label: "메뉴 추천",
    src: "/screenshot-2.png",
    alt: "오늘의 추천 메뉴 목록을 보여주는 앱 화면",
  },
  {
    label: "근처 맛집",
    src: "/screenshot-3.png",
    alt: "근처 맛집 목록과 거리 필터를 보여주는 앱 화면",
  },
] as const;

export function ScreenshotSection() {
  return (
    <section
      aria-labelledby="screenshots-heading"
      className="bg-cream pb-16 pt-12 sm:pb-20 sm:pt-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <ul
          className="mt-12 flex gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:gap-7 sm:overflow-visible sm:pb-0 lg:gap-10"
          aria-label="앱 스크린샷 목록"
        >
          {SCREENSHOTS.map((shot, index) => (
            <li
              key={shot.label}
              className="min-w-[260px] flex-1 sm:min-w-0"
            >
              <figure className="screenshot-card-hover overflow-hidden rounded-3xl border border-border/40 bg-surface">
                <div className="relative aspect-[9/19] w-full bg-cream">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 32vw, 380px"
                    className="object-cover object-top"
                    priority={index === 0}
                  />
                </div>
                <figcaption className="border-t border-border/40 bg-surface px-4 py-3 text-center text-sm font-semibold text-ink/75">
                  {shot.label}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
