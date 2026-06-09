/** 앱·사이트 공통 상수 — 배포 전 이 파일의 플레이스홀더 값을 실제 정보로 교체하세요. */

export const APP_NAME = "오늘 뭐 먹지?";

/** Hero 상단 배지 문구 */
export const APP_BADGE = "오늘의 메뉴 추천 앱";

export const TAGLINE =
  "오늘 뭐 먹을지 고민될 때,\n상황에 맞는 메뉴와 근처 맛집을 추천해드려요 ✨";

export const DESCRIPTION =
  "오늘 뭐 먹지?는 혼밥, 데이트, 회식 등 상황에 맞는 메뉴를 추천하고, 위치 기반으로 근처 맛집을 찾아주는 모바일 앱입니다.";

/** Hero 프로모 이미지 (원본 비율 1672×941) */
export const PROMO_IMAGE = "/promo.png";

/** Open Graph 등 절대 URL이 필요할 때 사용 (배포 도메인으로 교체) */
export const SITE_URL = "https://today-what-eat-tau.vercel.app";

/**
 * Google Play 스토어 URL
 * 출시 전: "#" 또는 "coming-soon" → 헤더·배지가 #download(CTA)로 이동
 * 출시 후: 실제 Play Store URL로 교체
 */
export const PLAY_STORE_URL = "#";

/** CTA 공식 배지 alt/라벨용 */
export const PLAY_STORE_BUTTON_LABEL = "Google Play에서 받기";

/** 헤더 다운로드 버튼 문구 */
export const HEADER_DOWNLOAD_LABEL = "다운로드";

/** CTA 하이라이트 칩 문구 (✓는 컴포넌트에서 붙임) */
export const CTA_HIGHLIGHTS = [
  "회원가입 없음",
  "근처 맛집 추천",
  "즐겨찾기 저장",
] as const;

/** @deprecated PLAY_STORE_URL 사용 */
export const ANDROID_STORE_URL = PLAY_STORE_URL;

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
