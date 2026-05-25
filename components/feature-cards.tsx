import { FEATURES } from "@/lib/site";

const iconMap = {
  situation: (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
  nearby: (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.5 7-10a7 7 0 1 0-14 0c0 5.5 7 10 7 10z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  ),
  favorite: (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21l-1.5-1.4C5.4 15.4 2 12.3 2 8.5 2 5.4 4.4 3 7.5 3c1.7 0 3.3.8 4.5 2.1C13.2 3.8 14.8 3 16.5 3 19.6 3 22 5.4 22 8.5c0 3.8-3.4 6.9-8.5 11.1L12 21z" />
    </svg>
  ),
  today: (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M5 12H3m18 0h-2M7.05 7.05 5.64 5.64m12.72 12.72-1.41-1.41M7.05 16.95l-1.41 1.41m12.72-12.72-1.41 1.41" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
};

export function FeatureCards() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="bg-cream pb-10 pt-14 sm:pb-12 sm:pt-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="features-heading"
            className="text-2xl font-bold text-ink sm:text-3xl"
          >
            이런 기능을 제공해요
          </h2>
          <p className="mt-3 text-base text-ink-muted sm:text-lg">
            메뉴 고민부터 맛집 탐색까지, 일상에 필요한 기능만 담았습니다.
          </p>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <li key={feature.title}>
              <article className="card-feature-hover flex h-full flex-col rounded-2xl bg-surface px-5 pb-7 pt-10 sm:px-6 sm:pb-8 sm:pt-11">
                <div
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint-light text-mint"
                  aria-hidden="true"
                >
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-lg font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm leading-[1.7] text-ink-muted">
                  {feature.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
