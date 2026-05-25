import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/site";

type SiteHeaderProps = {
  variant?: "default" | "minimal";
};

export function SiteHeader({ variant = "default" }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:h-16 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 rounded-lg leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
          aria-label={`${APP_NAME} 홈으로 이동`}
        >
          <Image
            src="/app-icon.png"
            alt=""
            width={36}
            height={36}
            className="h-8 w-8 rounded-xl sm:h-9 sm:w-9"
            priority
            aria-hidden
          />
          <span className="text-base font-semibold text-ink sm:text-lg">
            {APP_NAME}
          </span>
        </Link>

        {variant === "default" ? (
          <nav aria-label="주요 메뉴" className="flex shrink-0 items-center">
            <a
              href="#download"
              className="btn-mint-lift inline-flex h-10 items-center rounded-full bg-mint px-5 text-sm font-semibold text-white shadow-mint-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint sm:h-11 sm:px-6 sm:text-base"
            >
              다운로드
            </a>
          </nav>
        ) : (
          <Link
            href="/"
            className="text-sm font-medium text-mint transition-colors hover:text-mint-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
          >
            ← 홈으로
          </Link>
        )}
      </div>
    </header>
  );
}
