"use client";

import { useEffect } from "react";

/** /privacy 진입 시 항상 페이지 최상단에서 시작 */
export function PrivacyScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return null;
}
