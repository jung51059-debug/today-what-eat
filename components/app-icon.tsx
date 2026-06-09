import { APP_NAME } from "@/lib/site";

type AppIconProps = {
  size?: number;
  className?: string;
  alt?: string;
  priority?: boolean;
};

export function AppIcon({
  size = 88,
  className = "",
  alt = `${APP_NAME} 앱 아이콘`,
  priority = false,
}: AppIconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/app-icon.png"
      alt={alt}
      width={size}
      height={size}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      className={className}
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        maxWidth: size,
        maxHeight: size,
      }}
    />
  );
}
