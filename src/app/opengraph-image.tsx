import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social preview card: the same hero, on paper white. */
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "96px 112px",
        background: "#ffffff",
        color: "#262626",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 30, color: "#737373", marginBottom: 32 }}>
        {site.name}
      </div>
      <div
        style={{
          fontSize: 60,
          fontWeight: 500,
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          maxWidth: 940,
        }}
      >
        {site.tagline}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginTop: 56,
          fontSize: 26,
          color: "#737373",
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 999,
            background: "#262626",
          }}
        />
        {site.location}
      </div>
    </div>,
    size,
  );
}
