import Link from "next/link";
import { APP_NAME, CONTACT_EMAIL, COPYRIGHT_YEAR } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-cream-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-ink-muted">
          © {COPYRIGHT_YEAR} {APP_NAME}. All rights reserved.
        </p>
        <nav aria-label="푸터 링크">
          <ul className="flex flex-wrap gap-4 sm:gap-6">
            <li>
              <a
                href="#features"
                className="text-sm font-medium text-ink-muted transition-colors hover:text-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
              >
                앱 기능
              </a>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-sm font-medium text-ink-muted transition-colors hover:text-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
              >
                개인정보처리방침
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
              >
                문의
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
