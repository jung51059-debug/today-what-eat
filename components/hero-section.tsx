import Image from "next/image";
import { AppIcon } from "@/components/app-icon";
import { APP_BADGE, APP_NAME, PROMO_IMAGE, TAGLINE } from "@/lib/site";

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

      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-10 lg:py-14">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-6 flex justify-center lg:justify-start">
            <AppIcon size={120} className="rounded-[22%] shadow-md" priority />
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
        </div>

        <div className="hero-promo-card w-full overflow-hidden rounded-[2rem] border border-border-warm bg-cream shadow-lg sm:rounded-[2.5rem] lg:max-w-[900px] lg:justify-self-end">
          <Image
            src={PROMO_IMAGE}
            alt={`${APP_NAME} 앱 주요 화면 미리보기`}
            width={1672}
            height={941}
            className="block h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 860px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
