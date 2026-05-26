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
  { id: "third-party", title: "7. 제3자 제공 및 외부 연동" },
  { id: "retention", title: "8. 보유 및 이용 기간" },
  { id: "rights", title: "9. 이용자의 권리" },
  { id: "security", title: "10. 안전성 확보 조치" },
  { id: "children", title: "11. 아동의 개인정보" },
  { id: "changes", title: "12. 방침 변경" },
  { id: "contact", title: "13. 문의처" },
  { id: "legal", title: "14. 법적 고지" },
] as const;

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav aria-label="페이지 이동" className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-mint transition-colors hover:text-mint-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
        >
          ← 홈으로 돌아가기
        </Link>
      </nav>

      <header className="mb-10 border-b border-border pb-8">
        <h1 className="text-3xl font-bold text-ink sm:text-4xl">
          개인정보처리방침
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-muted">
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
        className="mb-10 rounded-2xl border border-border bg-surface p-5 sm:p-6"
      >
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
          목차
        </h2>
        <ol className="mt-3 space-y-2 text-sm">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-mint transition-colors hover:text-mint-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <article className="space-y-10 text-base leading-relaxed text-ink-muted">
        <section id="intro" className="scroll-mt-24">
          <h2 className="mb-3 text-xl font-bold text-ink">1. 총칙</h2>
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
          <h2 className="mb-3 text-xl font-bold text-ink">2. 운영자 정보</h2>
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
          <h2 className="mb-3 text-xl font-bold text-ink">
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
          <h2 className="mb-3 text-xl font-bold text-ink">
            4. 개인정보의 처리 목적
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>상황별 메뉴 추천 및 앱 핵심 기능 제공</li>
            <li>이용자 위치 기반 근처 식당 검색(위치 권한 허용 시)</li>
            <li>즐겨찾기·최근 기록 등 개인화된 이용 경험 제공(기기 내 저장)</li>
            <li>광고 표시 및 광고 성과 측정(Google AdMob)</li>
            <li>외부 앱·웹(지도, 전화, 스토어 등) 연결(url_launcher)</li>
          </ul>
        </section>

        <section id="local-storage" className="scroll-mt-24">
          <h2 className="mb-3 text-xl font-bold text-ink">
            5. 기기 내 저장 정보
          </h2>
          <p>
            앱은 아래 정보를 이용자 기기 내부(로컬 저장소)에 저장할 수
            있습니다. 이 정보는 운영자 서버로 전송되지 않으며, 앱 삭제 시
            일반적으로 함께 삭제됩니다.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>즐겨찾기한 메뉴·맛집 목록</li>
            <li>최근 확인한 메뉴 이름</li>
            <li>검색 거리, 카테고리 등 필터 설정</li>
          </ul>
          <p className="mt-3">
            이용자는 앱 내 제공 기능(해당 UI가 있는 경우)을 통해 저장된
            즐겨찾기·기록을 삭제할 수 있습니다.
          </p>
        </section>

        <section id="location" className="scroll-mt-24">
          <h2 className="mb-3 text-xl font-bold text-ink">6. 위치 정보</h2>
          <p>
            근처 맛집 검색 기능은 이용자가 OS 설정에서 위치 권한을 허용한
            경우에만 동작합니다. 위치 정보를 거부하면 해당 기능이 제한되거나
            대체 방식(예: 수동 지역 선택)으로 제공될 수 있습니다.
          </p>
          <p className="mt-3">
            위치 권한은 Android/iOS 설정 &gt; 앱 &gt; 「{APP_NAME}」에서
            언제든지 철회할 수 있습니다.
          </p>
        </section>

        <section id="third-party" className="scroll-mt-24">
          <h2 className="mb-3 text-xl font-bold text-ink">
            7. 제3자 제공 및 외부 연동
          </h2>
          <p className="mb-4">
            앱은 아래 외부 서비스·SDK와 연동될 수 있으며, 각 서비스의
            개인정보처리방침이 별도로 적용됩니다.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-surface p-4">
              <h3 className="font-semibold text-ink">카카오 로컬 API</h3>
              <p className="mt-2 text-sm">
                식당 검색 및 좌표 기반 조회를 위해 검색어·좌표 등이 카카오
                서버로 전송될 수 있습니다.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-4">
              <h3 className="font-semibold text-ink">Google AdMob</h3>
              <p className="mt-2 text-sm">
                광고 게재 및 맞춤형 광고 제공을 위해 광고 식별자, 기기 정보,
                이용 기록 등이 Google에 의해 처리될 수 있습니다.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-4">
              <h3 className="font-semibold text-ink">외부 앱 링크(url_launcher)</h3>
              <p className="mt-2 text-sm">
                지도, 전화, 앱 스토어 등 외부 앱·웹으로 이동할 때 해당
                서비스의 정책이 적용됩니다.
              </p>
            </div>
          </div>
        </section>

        <section id="retention" className="scroll-mt-24">
          <h2 className="mb-3 text-xl font-bold text-ink">
            8. 보유 및 이용 기간
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              기기 내 저장 정보: 이용자가 삭제하거나 앱을 삭제할 때까지
            </li>
            <li>
              위치 정보: 검색 요청 처리에 필요한 최소한의 기간 동안만 이용
            </li>
            <li>
              제3자(카카오, Google 등): 각 서비스 제공자의 정책에 따름
            </li>
          </ul>
        </section>

        <section id="rights" className="scroll-mt-24">
          <h2 className="mb-3 text-xl font-bold text-ink">9. 이용자의 권리</h2>
          <p>이용자는 다음과 같은 방법으로 개인정보 관련 권리를 행사할 수 있습니다.</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>앱 내 기능을 통한 즐겨찾기·로컬 기록 삭제</li>
            <li>OS 설정에서 위치 권한 철회</li>
            <li>앱 삭제를 통한 기기 내 로컬 데이터 삭제</li>
            <li>
              광고 맞춤 설정: Android/iOS 및 Google 광고 설정에서 조정 가능
            </li>
            <li>
              기타 문의:{" "}
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
          <h2 className="mb-3 text-xl font-bold text-ink">
            10. 안전성 확보 조치
          </h2>
          <p>
            운영자는 개인정보의 안전한 처리를 위해 접근 권한 관리, 전송 구간
            보호(HTTPS), 최소 수집 원칙 등 합리적인 보호 조치를 적용합니다.
            다만 인터넷 환경의 특성상 완전한 보안을 보장할 수는 없습니다.
          </p>
        </section>

        <section id="children" className="scroll-mt-24">
          <h2 className="mb-3 text-xl font-bold text-ink">
            11. 아동의 개인정보
          </h2>
          <p>
            앱은 만 14세 미만 아동을 대상으로 하지 않으며, 해당 연령대의
            개인정보를 고의로 수집하지 않습니다. 관련 문의가 있을 경우
            운영자에게 연락해 주시면 신속히 조치하겠습니다.
          </p>
        </section>

        <section id="changes" className="scroll-mt-24">
          <h2 className="mb-3 text-xl font-bold text-ink">12. 방침 변경</h2>
          <p>
            본 방침은 법령·서비스 변경에 따라 수정될 수 있으며, 변경 시 앱
            또는 본 웹페이지를 통해 공지합니다. 중요한 변경의 경우 시행일 7일
            전(이용자에게 불리한 변경은 30일 전)부터 공지할 수 있습니다.
          </p>
        </section>

        <section id="contact" className="scroll-mt-24">
          <h2 className="mb-3 text-xl font-bold text-ink">13. 문의처</h2>
          <p>
            개인정보 처리와 관련한 문의·불만·피해 구제는 아래로 연락해
            주세요.
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

        <section
          id="legal"
          className="scroll-mt-24 rounded-xl border border-mint/20 bg-mint-light p-5"
        >
          <h2 className="mb-3 text-xl font-bold text-ink">14. 법적 고지</h2>
          <p className="text-sm">
            본 개인정보처리방침은 서비스 출시 전 작성된 <strong>초안</strong>
            입니다. 실제 서비스 운영·수익화(광고 포함)·위치정보 이용 등
            구체적인 처리 방식에 따라 「개인정보 보호법」, 「위치정보의
            보호 및 이용 등에 관한 법률」 등 관련 법령에 맞게{" "}
            <strong>반드시 법률 전문가의 검토</strong>를 거쳐 최종본을
            확정해야 합니다. 본 문서는 법적 효력을 대체하지 않습니다.
          </p>
        </section>
      </article>
    </main>
  );
}
