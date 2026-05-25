import Image from "next/image";
import { APP_BADGE, APP_NAME, TAGLINE } from "@/lib/site";
import { StoreButtons } from "@/components/store-buttons";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-cream pb-1"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-mint/10 blur-3xl sm:h-80 sm:w-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-mint/5 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-14">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-5 flex h-[88px] w-[88px] items-center justify-center overflow-hidden rounded-2xl shadow-sm shadow-mint/5 sm:h-[92px] sm:w-[92px]">
            <Image
              src="/app-icon.png"
              alt={`${APP_NAME} 앱 아이콘`}
              width={92}
              height={92}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <p className="mb-3 text-sm font-semibold text-mint">
            {APP_BADGE}
          </p>

          <h1
            id="hero-heading"
            className="text-balance text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl"
          >
            {APP_NAME}
          </h1>

          <p className="mt-4 max-w-[420px] whitespace-pre-line text-balance text-[17px] leading-[1.7] text-ink-muted sm:text-[19px]">
            {TAGLINE}
          </p>

          <div className="mt-6 w-full sm:max-w-md lg:max-w-none">
            <StoreButtons size="large" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="overflow-hidden rounded-3xl border border-border bg-surface p-3 shadow-xl shadow-mint/10">
            <Image
              src="/promo.png"
              alt={`${APP_NAME} 앱 주요 화면 미리보기`}
              width={800}
              height={600}
              className="h-auto w-full rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
