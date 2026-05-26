import Image from "next/image";

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
      <div className="phone-mockup-device">
        <div className="phone-mockup-bezel">
          <div className="phone-mockup-island" aria-hidden="true" />
          <div className="phone-mockup-display">
            <Image
              src={src}
              alt={alt}
              width={390}
              height={844}
              sizes="(max-width: 640px) 28vw, 220px"
              className="phone-mockup-screen"
              priority={priority}
            />
          </div>
        </div>
      </div>
      <figcaption className="phone-mockup-caption">{label}</figcaption>
    </figure>
  );
}
