/** 앱·사이트 공통 상수 — 배포 전 이 파일의 플레이스홀더 값을 실제 정보로 교체하세요. */

export const APP_NAME = "오늘 뭐 먹지?";

/** Hero 상단 배지 문구 */
export const APP_BADGE = "오늘의 메뉴 추천 앱";

export const TAGLINE =
  "상황과 기분에 맞는 메뉴를 추천하고,\n근처 맛집까지 쉽게 찾을 수 있어요 ✨";

export const DESCRIPTION =
  "오늘 뭐 먹지?는 혼밥, 데이트, 회식 등 상황에 맞는 메뉴를 추천하고, 위치 기반으로 근처 맛집을 찾아주는 모바일 앱입니다.";

/** Open Graph 등 절대 URL이 필요할 때 사용 (배포 도메인으로 교체) */
export const SITE_URL = "https://today-what-eat-tau.vercel.app";

/** Google Play 스토어 URL (배포 후 실제 링크로 교체) */
export const ANDROID_STORE_URL =
  "https://play.google.com/store/apps/details?id=ANDROID_STORE_URL";

/** App Store URL (iOS 출시 후 실제 링크로 교체) */
export const IOS_STORE_URL = "https://apps.apple.com/app/idIOS_STORE_URL";

/** iOS 출시 전에는 false — App Store 버튼 숨김 */
export const IOS_STORE_ENABLED = false;

/** 문의·개인정보 담당 이메일 */
export const CONTACT_EMAIL = "jung51059@gmail.com";

/** 개인정보처리방침 운영자 정보 */
export const OPERATOR_NAME = "정현준";
export const OPERATOR_REPRESENTATIVE = "정현준";
export const OPERATOR_ADDRESS = "대한민국";

export const COPYRIGHT_YEAR = new Date().getFullYear();

export const FEATURES = [
  {
    title: "상황별 메뉴 추천",
    description: "상황과 기분에 맞는 메뉴를 추천해 드려요.",
    icon: "situation" as const,
  },
  {
    title: "근처 맛집 찾기",
    description: "내 주변 맛집을 거리순으로 빠르게 찾아요.",
    icon: "nearby" as const,
  },
  {
    title: "즐겨찾기 저장",
    description: "마음에 드는 메뉴와 맛집을 저장해 두세요.",
    icon: "favorite" as const,
  },
  {
    title: "오늘 메뉴 추천",
    description: "고민 없이 오늘 먹을 메뉴를 바로 추천해요.",
    icon: "today" as const,
  },
] as const;
