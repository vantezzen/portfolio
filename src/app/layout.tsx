import type { Metadata } from "next";
import {
  DM_Sans,
  Fuzzy_Bubbles,
  Geist_Mono,
  Playfair_Display,
} from "next/font/google";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair-display",
});

const fuzzyBubbles = Fuzzy_Bubbles({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fuzzy-bubbles",
});

export const metadata: Metadata = {
  title: site.name,
  description: site.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased font-sans",
        fuzzyBubbles.variable,
        dmSans.variable,
        playfairDisplay.variable,
        geistMono.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        {children}

        <script
          defer
          src="https://a.vantezzen.io/script.js"
          data-website-id="98fcfa82-c3e6-46c7-8802-dd1fbb786ab4"
        ></script>
        <script
          async
          defer
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          data-skip-dnt="true"
        ></script>
        <noscript>
          <img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" />
        </noscript>
      </body>
    </html>
  );
}
