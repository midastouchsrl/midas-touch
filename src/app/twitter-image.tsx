import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Midas Touch - Realizziamo Ciò Che Altri Non Possono";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#050505",
          padding: "80px",
        }}
      >
        {/* Logo area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontSize: "48px",
              fontWeight: 600,
              color: "#B8965C",
            }}
          >
            &gt;
          </span>
          <span
            style={{
              fontSize: "48px",
              fontWeight: 600,
              color: "#fafafa",
              marginLeft: "8px",
            }}
          >
            Midas
          </span>
          <span
            style={{
              fontSize: "48px",
              fontWeight: 600,
              color: "#B8965C",
              marginLeft: "4px",
            }}
          >
            touch
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontSize: "72px",
              fontWeight: 600,
              color: "#fafafa",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Realizziamo Ciò Che
          </span>
          <span
            style={{
              fontSize: "72px",
              fontWeight: 600,
              color: "#B8965C",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Altri Non Possono
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: "40px",
            fontSize: "24px",
            color: "#a3a3a3",
            maxWidth: "700px",
          }}
        >
          Sviluppo software premium, soluzioni AI, design e consulenza strategica.
        </div>

        {/* Bottom info */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "32px",
            fontSize: "18px",
            color: "#737373",
          }}
        >
          <span>midastouch.it</span>
          <span>•</span>
          <span>Roma, Italia</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
