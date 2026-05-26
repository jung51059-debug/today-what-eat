import Image from "next/image";

const SLICES = [
  {
    alt: "혼밥, 데이트, 회식 등 상황을 고르는 앱 화면",
    className: "showcase-slice showcase-slice-side",
    offset: 0,
  },
  {
    alt: "오늘의 추천 메뉴 목록을 보여주는 앱 화면",
    className: "showcase-slice showcase-slice-center",
    offset: 1,
  },
  {
    alt: "근처 맛집 목록과 거리 필터를 보여주는 앱 화면",
    className: "showcase-slice showcase-slice-side",
    offset: 2,
  },
] as const;

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

        {/* 3분할 쇼케이스 — 가운데 강조 + 좌우 오프셋 */}
        <figure className="showcase-frame mx-auto mt-14 max-w-5xl sm:mt-16">
          <div
            className="showcase-row"
            role="group"
            aria-label="오늘 뭐 먹지? 앱 주요 화면 미리보기"
          >
            {SLICES.map((slice) => (
              <div key={slice.offset} className={slice.className}>
                <div className="showcase-slice-viewport">
                  <Image
                    src="/app-showcase.jpg"
                    alt={slice.alt}
                    width={1024}
                    height={633}
                    sizes="(max-width: 640px) 30vw, 320px"
                    className="showcase-slice-image"
                    style={{ marginLeft: `${-slice.offset * 100}%` }}
                    priority={slice.offset === 1}
                  />
                </div>
              </div>
            ))}
          </div>
        </figure>
      </div>
    </section>
  );
}
