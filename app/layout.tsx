import "./globals.css";
import type { Metadata } from "next";
import { LanguageProvider } from "./language-provider";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ari's Reef",
  description: "Reef Hub",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="reef-blue">
      <head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <script
          src="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js"
          defer
        />
      </head>

      <body>
        {/* ⭐ Pi Network SDK MUST be loaded with next/script */}
        <Script
          src="https://sdk.minepi.com/pi-sdk.js"
          strategy="beforeInteractive"
          crossOrigin="anonymous"
        />

        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
