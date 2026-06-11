import { PhoneMockup } from "@/components/phone-mockup";

const SCREENSHOTS = [
  {
    label: "상황 선택",
    src: "/screenshot-1.png",
    alt: "혼밥, 데이트, 회식 등 상황을 고르는 앱 화면",
    width: 769,
    height: 1694,
    position: "side" as const,
  },
  {
    label: "메뉴 추천",
    src: "/screenshot-2.png",
    alt: "오늘의 추천 메뉴 목록을 보여주는 앱 화면",
    width: 797,
    height: 1674,
    position: "center" as const,
  },
  {
    label: "근처 맛집",
    src: "/screenshot-3.png",
    alt: "근처 맛집 목록과 거리 필터를 보여주는 앱 화면",
    width: 813,
    height: 1708,
    position: "side" as const,
  },
] as const;

export function ScreenshotSection() {
  return (
    <section
      aria-labelledby="screenshots-heading"
      className="relative overflow-hidden bg-cream pb-10 pt-12 sm:pb-16 sm:pt-14"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-mint/3 blur-[88px]" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#ebe3d8]/30 blur-[96px]" />
        <div className="absolute left-1/2 top-6 h-56 w-[520px] -translate-x-1/2 rounded-full bg-white/15 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="showcase-intro mx-auto max-w-2xl text-center">
          <h2
            id="screenshots-heading"
            className="text-[19px] font-bold text-ink sm:text-[22px]"
          >
            앱 미리보기
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink-muted sm:text-[19px]">
            오늘 뭐 먹을지 고민될 때, 3단계로 빠르게 결정해 보세요.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            <span className="rounded-full border border-[#E8D8C8] bg-white px-4 py-2 text-[15px] font-bold leading-none text-[#6B5A4E] shadow-sm">
              ① 상황 선택
            </span>
            <span className="text-[15px] font-bold text-[#B7A79A]" aria-hidden="true">
              →
            </span>
            <span className="rounded-full border border-[#E8D8C8] bg-white px-4 py-2 text-[15px] font-bold leading-none text-[#6B5A4E] shadow-sm">
              ② 오늘의 메뉴 추천
            </span>
            <span className="text-[15px] font-bold text-[#B7A79A]" aria-hidden="true">
              →
            </span>
            <span className="rounded-full border border-[#E8D8C8] bg-white px-4 py-2 text-[15px] font-bold leading-none text-[#6B5A4E] shadow-sm">
              ③ 근처 맛집 확인
            </span>
          </div>
          <p className="mt-4 text-[15px] font-semibold leading-relaxed text-[#7A6B5D] sm:text-[16px]">
            상황 선택 → 메뉴 추천 → 근처 맛집 찾기
          </p>
        </div>

        <figure className="showcase-frame mx-auto mt-11 max-w-5xl sm:mt-12">
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
                  width={shot.width}
                  height={shot.height}
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
