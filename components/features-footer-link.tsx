"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const linkClassName =
  "text-sm font-medium text-ink-muted transition-colors hover:text-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

function scrollToFeaturesSection() {
  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
}

export function FeaturesFooterLink() {
  const pathname = usePathname();
  const router = useRouter();
  const pendingScrollRef = useRef(false);

  useEffect(() => {
    if (!pendingScrollRef.current || pathname !== "/") {
      return;
    }

    let attempts = 0;
    const maxAttempts = 30;

    const tryScroll = () => {
      const featuresSection = document.getElementById("features");

      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: "smooth" });
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

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    if (pathname === "/") {
      scrollToFeaturesSection();
      return;
    }

    pendingScrollRef.current = true;
    router.push("/");
  }

  return (
    <a href="/#features" onClick={handleClick} className={linkClassName}>
      앱 기능
    </a>
  );
}
