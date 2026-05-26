import Image from "next/image";
import { MockupStatusBar } from "@/components/mockup-status-bar";

type PhoneMockupProps = {
  src: string;
  alt: string;
  label: string;
  priority?: boolean;
};

export function PhoneMockup({
  src,
  alt,
  label,
  priority = false,
}: PhoneMockupProps) {
  return (
    <figure className="phone-mockup-figure">
      <div className="phone-mockup-shell">
        <div className="phone-mockup-screen-wrap">
          <Image
            src={src}
            alt={alt}
            width={390}
            height={844}
            sizes="(max-width: 640px) 28vw, 220px"
            className="phone-mockup-screen"
            priority={priority}
          />
          {/* 기존 Android 상태바를 덮고 출시용 mockup 상태바로 교체 */}
          <div className="phone-mockup-status-cover" aria-hidden="true" />
          <MockupStatusBar />
        </div>
      </div>
      <figcaption className="phone-mockup-caption">{label}</figcaption>
    </figure>
  );
}
