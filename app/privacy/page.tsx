import type { Metadata } from "next";
import Link from "next/link";
import { APP_NAME, CONTACT_EMAIL, OPERATOR_ADDRESS, OPERATOR_NAME, OPERATOR_REPRESENTATIVE } from "@/lib/site";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: `${APP_NAME} 앱의 개인정보 처리 방침입니다.`,
  openGraph: {
    title: `개인정보처리방침 | ${APP_NAME}`,
    description: `${APP_NAME} 앱의 개인정보 처리 방침입니다.`,
    url: "/privacy",
  },
};

const sections = [
  { id: "intro", title: "1. 총칙" },
  { id: "operator", title: "2. 운영자 정보" },
  { id: "collection", title: "3. 수집하는 개인정보 항목" },
  { id: "purpose", title: "4. 개인정보의 처리 목적" },
  { id: "local-storage", title: "5. 기기 내 저장 정보" },
  { id: "location", title: "6. 위치 정보" },
  { id: "third-party", title: "7. 제3자 제공 및 외부 서비스 연동" },
  { id: "retention", title: "8. 보유 및 이용 기간" },
  { id: "rights", title: "9. 이용자의 권리" },
  { id: "security", title: "10. 안전성 확보 조치" },
  { id: "children", title: "11. 아동의 개인정보" },
  { id: "changes", title: "12. 방침 변경" },
  { id: "contact", title: "13. 문의처" },
] as const;

export default function PrivacyPage() {
  return (
    <main className="privacy-page mx-auto max-w-[832px] px-4 py-10 sm:px-6 sm:py-14">
      <nav aria-label="페이지 이동" className="mb-6">
        <Link
          href="/"
          className="privacy-back-link inline-flex items-center text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
        >
          ← 홈으로 돌아가기
        </Link>
      </nav>

      <header className="mb-10 border-b border-border pb-8">
        <h1 className="text-3xl font-bold text-ink sm:text-4xl">
          개인정보처리방침
        </h1>
        <p className="mt-4 text-base leading-[1.85] text-ink-muted">
          「{APP_NAME}」(이하 &ldquo;앱&rdquo;)은 이용자의 개인정보를 중요하게
          생각하며, 「개인정보 보호법」 등 관련 법령을 준수합니다. 본
          개인정보처리방침은 앱 이용 과정에서 처리되는 개인정보와 그 이용
          목적, 보관 방법 등을 안내합니다.
        </p>
        <p className="mt-2 text-sm text-ink-subtle">
          시행일:{" "}
          <strong className="font-medium text-ink">2026년 5월 26일</strong>
        </p>
      </header>

      <nav
        aria-label="목차"
        className="mb-12 rounded-2xl border border-border bg-surface p-5 sm:mb-14 sm:p-6"
      >
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
          목차
        </h2>
        <ol className="privacy-toc-list mt-3 space-y-2.5">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="privacy-toc-link transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <article className="privacy-article space-y-14 text-base text-ink-muted sm:space-y-16">
        <section id="intro" className="scroll-mt-24">
          <h2 className="privacy-section-title mb-3 font-bold text-ink">1. 총칙</h2>
          <p>
            「{APP_NAME}」은 별도의 회원가입이나 로그인 없이 이용할 수 있는
            모바일 앱입니다. 앱은 메뉴 추천, 근처 맛집 검색, 즐겨찾기 등의
            기능을 제공하며, 서비스 제공에 필요한 범위 내에서 개인정보를
            처리할 수 있습니다.
          </p>
          <p className="mt-3">
            운영자는 「개인정보 보호법」 등 관련 법령을 준수하며, 이용자의
            개인정보를 안전하게 보호하기 위해 노력합니다.
          </p>
        </section>

        <section id="operator" className="scroll-mt-24">
          <h2 className="privacy-section-title mb-3 font-bold text-ink">2. 운영자 정보</h2>
          <dl className="overflow-hidden rounded-xl border border-border bg-cream-muted">
            <div className="grid gap-1 border-b border-border px-4 py-3 sm:grid-cols-[140px_1fr]">
              <dt className="font-medium text-ink">회사명/운영자명</dt>
              <dd>{OPERATOR_NAME}</dd>
            </div>
            <div className="grid gap-1 border-b border-border px-4 py-3 sm:grid-cols-[140px_1fr]">
              <dt className="font-medium text-ink">대표자</dt>
              <dd>{OPERATOR_REPRESENTATIVE}</dd>
            </div>
            <div className="grid gap-1 border-b border-border px-4 py-3 sm:grid-cols-[140px_1fr]">
              <dt className="font-medium text-ink">주소</dt>
              <dd>{OPERATOR_ADDRESS}</dd>
            </div>
            <div className="grid gap-1 px-4 py-3 sm:grid-cols-[140px_1fr]">
              <dt className="font-medium text-ink">이메일</dt>
              <dd>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-mint hover:text-mint-hover"
                >
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section id="collection" className="scroll-mt-24">
          <h2 className="privacy-section-title mb-3 font-bold text-ink">
            3. 수집하는 개인정보 항목
          </h2>
          <p className="mb-4">
            앱은 회원가입을 요구하지 않으며, 이용자를 식별할 수 있는 계정
            정보를 서버에 저장하지 않습니다. 다만 서비스 제공을 위해 아래와
            같은 정보가 처리될 수 있습니다.
          </p>
          <ul className="space-y-4">
            <li>
              <strong className="text-ink">위치 정보(선택)</strong>
              <p className="mt-1">
                근처 맛집 검색 기능 이용 시, 이용자가 위치 권한을 허용한
                경우에만 사용됩니다.
              </p>
            </li>
            <li>
              <strong className="text-ink">기기 내 저장 정보</strong>
              <p className="mt-1">
                즐겨찾기, 최근 메뉴 기록, 검색 필터 설정 등의 정보가 이용자
                기기 내에 저장될 수 있습니다.
              </p>
            </li>
            <li>
              <strong className="text-ink">광고 식별자</strong>
              <p className="mt-1">
                Google AdMob 광고 제공 과정에서 광고 식별자(Advertising ID)
                및 기기 정보 등이 수집·이용될 수 있습니다.
              </p>
            </li>
            <li>
              <strong className="text-ink">앱 이용 기록(비식별 정보)</strong>
              <p className="mt-1">
                서비스 개선 및 오류 분석을 위한 비식별 형태의 기술적 정보가
                수집될 수 있습니다.
              </p>
            </li>
          </ul>
        </section>

        <section id="purpose" className="scroll-mt-24">
          <h2 className="privacy-section-title mb-3 font-bold text-ink">
            4. 개인정보의 처리 목적
          </h2>
          <p className="mb-4">
            앱은 다음과 같은 목적으로 개인정보를 처리할 수 있습니다.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>상황별 메뉴 추천 및 앱 핵심 기능 제공</li>
            <li>
              이용자 위치 기반의 근처 맛집 검색 기능 제공(위치 권한 허용 시)
            </li>
            <li>
              즐겨찾기 및 최근 기록 저장 등 개인화된 이용 경험 제공
            </li>
            <li>광고 제공 및 광고 성과 측정(Google AdMob)</li>
            <li>지도, 전화, 앱 스토어 등 외부 서비스 연결 기능 제공</li>
          </ul>
        </section>

        <section id="local-storage" className="scroll-mt-24">
          <h2 className="privacy-section-title mb-3 font-bold text-ink">
            5. 기기 내 저장 정보
          </h2>
          <p>
            앱은 아래와 같은 정보를 이용자 기기 내부에 저장할 수 있습니다.
            해당 정보는 운영자의 서버로 전송되지 않으며, 일반적으로 앱
            삭제 시 함께 삭제됩니다.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>즐겨찾기한 메뉴 및 맛집 목록</li>
            <li>최근 확인한 메뉴 기록</li>
            <li>검색 거리, 카테고리 등 사용자 설정 정보</li>
          </ul>
          <p className="mt-3">
            이용자는 앱 내 기능을 통해 저장된 즐겨찾기 및 기록을 삭제할 수
            있습니다.
          </p>
        </section>

        <section id="location" className="scroll-mt-24">
          <h2 className="privacy-section-title mb-3 font-bold text-ink">6. 위치 정보</h2>
          <p>
            근처 맛집 검색 기능은 이용자가 위치 권한을 허용한 경우에만
            이용할 수 있습니다. 위치 권한을 허용하지 않을 경우 일부 기능
            이용이 제한될 수 있습니다.
          </p>
          <p className="mt-3">
            이용자는 Android 또는 iOS 설정에서 언제든지 위치 권한을
            변경하거나 철회할 수 있습니다.
          </p>
        </section>

        <section id="third-party" className="scroll-mt-24">
          <h2 className="privacy-section-title mb-3 font-bold text-ink">
            7. 제3자 제공 및 외부 서비스 연동
          </h2>
          <p className="mb-4">
            앱은 아래 외부 서비스와 연동될 수 있으며, 각 서비스의
            개인정보처리방침이 별도로 적용될 수 있습니다.
          </p>
          <ul className="space-y-4">
            <li>
              <strong className="text-ink">카카오 로컬 API</strong>
              <p className="mt-1">
                근처 맛집 검색 기능 제공을 위해 검색어 및 위치 정보(좌표)가
                카카오 서버로 전송될 수 있습니다.
              </p>
            </li>
            <li>
              <strong className="text-ink">Google AdMob</strong>
              <p className="mt-1">
                광고 제공 및 광고 성과 측정을 위해 광고 식별자, 기기 정보,
                이용 기록 등이 Google에 의해 처리될 수 있습니다.
              </p>
            </li>
            <li>
              <strong className="text-ink">외부 서비스 연결</strong>
              <p className="mt-1">
                지도, 전화, 앱 스토어 등 외부 앱 또는 웹페이지로 이동할
                경우 해당 서비스의 정책이 적용될 수 있습니다.
              </p>
            </li>
          </ul>
        </section>

        <section id="retention" className="scroll-mt-24">
          <h2 className="privacy-section-title mb-3 font-bold text-ink">
            8. 보유 및 이용 기간
          </h2>
          <p className="mb-4">
            앱은 개인정보를 아래와 같은 기준으로 보유 및 이용합니다.
          </p>
          <ul className="space-y-4">
            <li>
              <strong className="text-ink">기기 내 저장 정보</strong>
              <p className="mt-1">
                이용자가 직접 삭제하거나 앱을 삭제할 때까지 이용자 기기
                내에 저장될 수 있습니다.
              </p>
            </li>
            <li>
              <strong className="text-ink">위치 정보</strong>
              <p className="mt-1">
                근처 맛집 검색 요청 처리에 필요한 최소한의 범위에서만
                일시적으로 이용됩니다.
              </p>
            </li>
            <li>
              <strong className="text-ink">제3자 서비스 정보</strong>
              <p className="mt-1">
                카카오, Google 등 외부 서비스에서 처리되는 정보는 각
                서비스 제공자의 정책에 따릅니다.
              </p>
            </li>
          </ul>
        </section>

        <section id="rights" className="scroll-mt-24">
          <h2 className="privacy-section-title mb-3 font-bold text-ink">9. 이용자의 권리</h2>
          <p className="mb-4">
            이용자는 아래와 같은 방법으로 개인정보 관련 권리를 행사할 수
            있습니다.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>앱 내 기능을 통한 즐겨찾기 및 최근 기록 삭제</li>
            <li>Android 또는 iOS 설정에서 위치 권한 변경 및 철회</li>
            <li>앱 삭제를 통한 기기 내 저장 데이터 삭제</li>
            <li>
              Android/iOS 및 Google 광고 설정을 통한 맞춤형 광고 설정 변경
            </li>
            <li>
              개인정보 관련 문의:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-mint hover:text-mint-hover"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </section>

        <section id="security" className="scroll-mt-24">
          <h2 className="privacy-section-title mb-3 font-bold text-ink">
            10. 안전성 확보 조치
          </h2>
          <p>
            운영자는 개인정보의 안전한 처리를 위해 최소 수집 원칙, 접근
            권한 관리, HTTPS 기반의 보안 통신 등 합리적인 보호 조치를
            적용하고 있습니다.
          </p>
          <p className="mt-3">
            다만 인터넷 환경의 특성상 모든 보안 위험을 완전히 방지할 수는
            없으며, 운영자는 개인정보 보호를 위해 지속적으로 노력합니다.
          </p>
        </section>

        <section id="children" className="scroll-mt-24">
          <h2 className="privacy-section-title mb-3 font-bold text-ink">
            11. 아동의 개인정보
          </h2>
          <p>
            앱은 만 14세 미만 아동을 대상으로 하지 않으며, 만 14세 미만
            아동의 개인정보를 고의로 수집하지 않습니다.
          </p>
          <p className="mt-3">
            관련 문의가 있을 경우 운영자에게 연락해 주시면 확인 후 필요한
            조치를 진행하겠습니다.
          </p>
        </section>

        <section id="changes" className="scroll-mt-24">
          <h2 className="privacy-section-title mb-3 font-bold text-ink">12. 방침 변경</h2>
          <p>
            본 방침은 관련 법령 및 서비스 내용의 변경에 따라 수정될 수
            있으며, 변경 사항은 앱 또는 웹페이지를 통해 안내합니다.
          </p>
          <p className="mt-3">
            중요한 변경 사항이 있는 경우 시행일 최소 7일 전부터 공지하며,
            이용자에게 불리한 변경의 경우 최소 30일 전에 안내합니다.
          </p>
        </section>

        <section id="contact" className="scroll-mt-24">
          <h2 className="privacy-section-title mb-3 font-bold text-ink">13. 문의처</h2>
          <p>
            개인정보 처리와 관련한 문의 및 요청 사항은 아래 이메일로
            연락해 주세요.
          </p>
          <p className="mt-3">
            이메일:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-mint hover:text-mint-hover"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
