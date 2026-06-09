"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const linkClassName =
  "text-sm font-medium text-ink-muted transition-colors hover:text-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

function scrollToPageTop(smooth: boolean) {
  window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "instant" });
}

export function PrivacyFooterLink() {
  const pathname = usePathname();
  const router = useRouter();
  const pendingScrollRef = useRef(false);

  useEffect(() => {
    if (!pendingScrollRef.current || pathname !== "/privacy") {
      return;
    }

    scrollToPageTop(false);
    pendingScrollRef.current = false;
  }, [pathname]);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    if (pathname === "/privacy") {
      scrollToPageTop(true);
      return;
    }

    pendingScrollRef.current = true;
    router.push("/privacy");
  }

  return (
    <a href="/privacy" onClick={handleClick} className={linkClassName}>
      개인정보처리방침
    </a>
  );
}
