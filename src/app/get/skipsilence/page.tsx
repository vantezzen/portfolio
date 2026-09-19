import { ExtensionGetPage } from "@/components/legal/extension-get-page";
import { legalMetadata } from "@/components/legal/legal-page";

export const metadata = legalMetadata(
  "Get Skip Silence",
  "Install Skip Silence for your browser.",
);

export default function GetSkipSilencePage() {
  return (
    <ExtensionGetPage
      name="Skip Silence"
      links={{
        chrome:
          "https://chrome.google.com/webstore/detail/skip-silence/fhdmkhbefcbhakffdihhceaklaigdllh",
        firefox: "https://addons.mozilla.org/de/firefox/addon/skip-silence/",
        github: "https://github.com/vantezzen/skip-silence",
      }}
    />
  );
}
