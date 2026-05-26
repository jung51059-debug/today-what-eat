import { PhoneMockup } from "@/components/phone-mockup";

const SCREENSHOTS = [
  {
    label: "상황 선택",
    src: "/screenshot-1.png",
    alt: "혼밥, 데이트, 회식 등 상황을 고르는 앱 화면",
    position: "side" as const,
  },
  {
    label: "메뉴 추천",
    src: "/screenshot-2.png",
    alt: "오늘의 추천 메뉴 목록을 보여주는 앱 화면",
    position: "center" as const,
  },
  {
    label: "근처 맛집",
    src: "/screenshot-3.png",
    alt: "근처 맛집 목록과 거리 필터를 보여주는 앱 화면",
    position: "side" as const,
  },
] as const;

export function ScreenshotSection() {
  return (
    <section
      aria-labelledby="screenshots-heading"
      className="relative overflow-hidden bg-cream pb-16 pt-12 sm:pb-20 sm:pt-14"
    >
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

        <figure className="showcase-frame mx-auto mt-14 max-w-5xl sm:mt-16">
          <ul
            className="showcase-row"
            aria-label="앱 화면 쇼케이스"
          >
            {SCREENSHOTS.map((shot, index) => (
              <li
                key={shot.label}
                className={
                  shot.position === "center"
                    ? "showcase-item showcase-item-center"
                    : "showcase-item showcase-item-side"
                }
              >
                <PhoneMockup
                  src={shot.src}
                  alt={shot.alt}
                  label={shot.label}
                  priority={index === 1}
                />
              </li>
            ))}
          </ul>
        </figure>
      </div>
    </section>
  );
}
