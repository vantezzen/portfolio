import React from "react";
import ExtensionPage from "../../components/various/ExtensionPage";

function SkipSilence() {
  return (
    <ExtensionPage
      name="Skip Silence"
      links={{
        github: "https://github.com/vantezzen/skip-silence",
        firefox: "https://addons.mozilla.org/de/firefox/addon/skip-silence/",
        chrome:
          "https://chrome.google.com/webstore/detail/skip-silence/fhdmkhbefcbhakffdihhceaklaigdllh",
      }}
    />
  );
}

export default SkipSilence;
