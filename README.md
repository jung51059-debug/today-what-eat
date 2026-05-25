# 오늘 뭐 먹지? — 랜딩 페이지

「오늘 뭐 먹지?」 Flutter 모바일 앱을 소개하는 Next.js(App Router) 기반 랜딩 사이트입니다.

## 기술 스택

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4

## 폴더 구조

```
today_whateat_web/
├── app/
│   ├── layout.tsx              # 루트 레이아웃 (헤더/푸터, SEO)
│   ├── page.tsx                # / 랜딩 페이지
│   ├── globals.css             # Tailwind + 브랜드 컬러 토큰
│   └── privacy/
│       └── page.tsx            # /privacy 개인정보처리방침
├── components/
│   ├── site-header.tsx
│   ├── site-footer.tsx
│   ├── hero-section.tsx
│   ├── feature-cards.tsx
│   ├── screenshot-section.tsx
│   ├── cta-section.tsx
│   └── store-buttons.tsx
├── lib/
│   └── site.ts                 # 앱명, 스토어 URL, 연락처 등 상수
└── public/
    ├── app-icon.png
    └── promo.png
```

## 라우트

| 경로 | 설명 |
|------|------|
| `/` | 랜딩 페이지 (Hero, 기능, 스크린샷, CTA) |
| `/privacy` | 개인정보처리방침 |

## 로컬 실행

프로젝트 폴더(`today_whateat_web`)에서 아래를 실행하세요.

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

> **주의:** `npm start`는 **빌드 후**(`npm run build`)에만 사용합니다. 개발 중에는 `npm run dev`를 쓰세요.

### 실행이 안 될 때

| 증상 | 해결 |
|------|------|
| `EADDRINUSE` (포트 3000 사용 중) | 이미 켜 둔 dev 서버를 종료하거나 `npm run dev:3001` 후 [http://localhost:3001](http://localhost:3001) 접속 |
| `Could not find a production build` | `npm run build` 후 `npm start`, 또는 개발 시 `npm run dev` 사용 |
| `next` 명령을 찾을 수 없음 | `npm install` 실행 후 다시 시도 |

### 빌드

```bash
npm run build
npm start
```

## 설정 (환경 변수 없음)

환경 변수는 사용하지 않습니다. 배포 전 아래 파일의 플레이스홀더를 수정하세요.

**`lib/site.ts`**

| 상수 | 설명 |
|------|------|
| `SITE_URL` | 배포 도메인 (Open Graph용) |
| `ANDROID_STORE_URL` | Google Play 스토어 링크 |
| `IOS_STORE_URL` | App Store 링크 |
| `CONTACT_EMAIL` | 문의 이메일 |

개인정보처리방침 본문의 운영자 정보·시행일은 `app/(legal)/privacy/page.tsx`에서 직접 수정합니다.

## 이미지

- `public/app-icon.png` — 앱 아이콘 (Hero, 헤더)
- `public/promo.png` — 홍보용 스크린샷 (Hero, Open Graph)

스크린샷 섹션은 플레이스홀더 UI를 사용합니다. 실제 앱 캡처로 교체하려면 `components/screenshot-section.tsx`를 수정하세요.
