"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  HEADER_DOWNLOAD_LABEL,
  PLAY_STORE_URL,
} from "@/lib/site";

type PlayStoreButtonProps = {
  variant: "header" | "badge";
  size?: "default" | "large";
  className?: string;
};

/** Google Play 공식 배지 원본 비율 (646×250) */
const GOOGLE_PLAY_BADGE_WIDTH = 646;
const GOOGLE_PLAY_BADGE_HEIGHT = 250;

const headerButtonClassName =
  "rounded-full bg-[#8eb39b] px-[18px] py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

function isComingSoon(url: string) {
  return url === "#" || url === "coming-soon";
}

function scrollToDownloadSection(smooth: boolean) {
  document
    .getElementById("download")
    ?.scrollIntoView({ behavior: smooth ? "smooth" : "instant" });
}

export function PlayStoreButton({
  variant,
  size = "large",
  className = "",
}: PlayStoreButtonProps) {
  const pathname = usePathname();
  const router = useRouter();
  const pendingScrollRef = useRef(false);
  const comingSoon = isComingSoon(PLAY_STORE_URL);

  useEffect(() => {
    if (!pendingScrollRef.current || pathname !== "/") {
      return;
    }

    let attempts = 0;
    const maxAttempts = 30;

    const tryScroll = () => {
      const downloadSection = document.getElementById("download");

      if (downloadSection) {
        downloadSection.scrollIntoView({ behavior: "smooth" });
        pendingScrollRef.current = false;
        return;
      }

      attempts += 1;
      if (attempts < maxAttempts) {
        requestAnimationFrame(tryScroll);
      } else {
        pendingScrollRef.current = false;
      }
    };

    requestAnimationFrame(tryScroll);
  }, [pathname]);

  function handleComingSoonClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    if (pathname === "/") {
      scrollToDownloadSection(true);
      return;
    }

    pendingScrollRef.current = true;
    router.push("/");
  }

  if (variant === "header") {
    if (comingSoon) {
      return (
        <a
          href="/#download"
          onClick={handleComingSoonClick}
          className={`${headerButtonClassName} ${className}`}
          aria-label="다운로드 섹션으로 이동"
        >
          {HEADER_DOWNLOAD_LABEL}
        </a>
      );
    }

    return (
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${headerButtonClassName} ${className}`}
        aria-label="Google Play에서 다운로드"
      >
        {HEADER_DOWNLOAD_LABEL}
      </a>
    );
  }

  const badgeSizeClass =
    size === "large" ? "h-auto w-[170px]" : "h-[50px] w-auto";

  if (comingSoon) {
    return (
      <a
        href="/#download"
        onClick={handleComingSoonClick}
        className={`inline-block w-fit transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint ${className}`}
        aria-label="다운로드 섹션으로 이동"
      >
        <Image
          src="/google-play-badge.png"
          alt="Google Play에서 다운로드"
          width={GOOGLE_PLAY_BADGE_WIDTH}
          height={GOOGLE_PLAY_BADGE_HEIGHT}
          className={badgeSizeClass}
          priority={size === "large"}
        />
      </a>
    );
  }

  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block w-fit transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint ${className}`}
      aria-label="Google Play 스토어에서 앱 다운로드"
    >
      <Image
        src="/google-play-badge.png"
        alt="Google Play에서 다운로드"
        width={GOOGLE_PLAY_BADGE_WIDTH}
        height={GOOGLE_PLAY_BADGE_HEIGHT}
        className={badgeSizeClass}
        priority={size === "large"}
      />
    </a>
  );
}
