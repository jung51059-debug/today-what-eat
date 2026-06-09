import Link from "next/link";
import { AppIcon } from "@/components/app-icon";
import { PlayStoreButton } from "@/components/play-store-button";
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
          <AppIcon
            size={40}
            className="rounded-[22%] shadow-sm"
            alt=""
            priority
          />
          <span className="text-base font-semibold text-ink sm:text-lg">
            {APP_NAME}
          </span>
        </Link>

        {variant === "default" ? (
          <nav aria-label="주요 메뉴" className="flex items-center">
            <PlayStoreButton variant="header" />
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
