import Image from "next/image";
import { MockupStatusBar } from "@/components/mockup-status-bar";

type PhoneMockupProps = {
  src: string;
  alt: string;
  label: string;
  priority?: boolean;
  width?: number;
  height?: number;
  /** true면 CSS 폰 프레임·상태바 없이 이미지만 표시 */
  frameless?: boolean;
};

export function PhoneMockup({
  src,
  alt,
  label,
  priority = false,
  width = 390,
  height = 844,
  frameless = true,
}: PhoneMockupProps) {
  if (frameless) {
    return (
      <figure className="phone-mockup-figure">
        <div className="phone-mockup-frameless">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 640px) 28vw, 220px"
            className="phone-mockup-screen"
            priority={priority}
            unoptimized
          />
        </div>
        <figcaption className="phone-mockup-caption">{label}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="phone-mockup-figure">
      <div className="phone-mockup-shell">
        <div className="phone-mockup-screen-wrap">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 640px) 28vw, 220px"
            className="phone-mockup-screen"
            priority={priority}
          />
          <div className="phone-mockup-status-cover" aria-hidden="true" />
          <MockupStatusBar />
        </div>
      </div>
      <figcaption className="phone-mockup-caption">{label}</figcaption>
    </figure>
  );
}
