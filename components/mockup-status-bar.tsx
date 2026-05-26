/** iOS 스타일 mockup 상태바 — 9:41, warm gray, 낮은 opacity */
export function MockupStatusBar() {
  return (
    <div className="phone-mockup-status-bar" aria-hidden="true">
      <span className="phone-mockup-status-time">9:41</span>

      <div className="phone-mockup-status-notch" />

      <div className="phone-mockup-status-icons">
        <svg viewBox="0 0 18 12" className="phone-mockup-status-icon" aria-hidden="true">
          <rect x="0" y="7" width="3" height="5" rx="0.75" fill="currentColor" />
          <rect x="5" y="5" width="3" height="7" rx="0.75" fill="currentColor" />
          <rect x="10" y="2.5" width="3" height="9.5" rx="0.75" fill="currentColor" />
          <rect x="15" y="0" width="3" height="12" rx="0.75" fill="currentColor" />
        </svg>

        <svg viewBox="0 0 16 12" className="phone-mockup-status-icon" aria-hidden="true">
          <path
            d="M8 10.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
            fill="currentColor"
          />
          <path
            d="M4.2 6.8a4.6 4.6 0 0 1 7.6 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M1.4 4.1a8.2 8.2 0 0 1 13.2 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>

        <svg viewBox="0 0 26 12" className="phone-mockup-status-icon phone-mockup-status-battery" aria-hidden="true">
          <rect
            x="0.75"
            y="1.25"
            width="21"
            height="9.5"
            rx="2.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <rect x="2.5" y="3" width="16" height="6" rx="1.2" fill="currentColor" />
          <path
            d="M23.5 4.2v3.6a1.6 1.6 0 0 0 0-3.6Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
