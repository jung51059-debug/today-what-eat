import {
  IOS_STORE_ENABLED,
  IOS_STORE_URL,
} from "@/lib/site";
import { PlayStoreButton } from "@/components/play-store-button";

type StoreButtonsProps = {
  size?: "default" | "large";
  className?: string;
};

function AppStoreIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.7 12.6c-.1-2.5 2-3.7 2.1-3.8-1.1-1.7-2.9-1.9-3.5-2-1.5-.1-2.9.9-3.7.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.3 2.5 1.3-.1 1.8-.8 3.4-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.2-2.5.6-.9 1.1-1.8 1.4-2.8-3.6-1.4-3-5.6-3-5.7zm-2.8-8.5c.7-.9 1.2-2.1 1.1-3.3-1.1.1-2.3.7-3.1 1.6-.7.8-1.2 2-1 3.2 1.2.1 2.4-.6 3-1.5z" />
    </svg>
  );
}

export function StoreButtons({
  size = "default",
  className = "",
}: StoreButtonsProps) {
  const appStoreButtonClass =
    size === "large"
      ? "min-h-[62px] px-7 text-base"
      : "min-h-[60px] px-5 text-sm";

  const baseButton =
    "btn-mint-lift inline-flex w-full items-center justify-center gap-2.5 rounded-full font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint sm:w-auto";

  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${className}`}
    >
      <PlayStoreButton variant="badge" size={size} />
      {IOS_STORE_ENABLED ? (
        <a
          href={IOS_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseButton} ${appStoreButtonClass} border-2 border-mint/40 bg-surface text-mint hover:border-mint hover:bg-mint-light`}
          aria-label="App Store에서 앱 다운로드"
        >
          <AppStoreIcon />
          App Store에서 받기
        </a>
      ) : null}
    </div>
  );
}
