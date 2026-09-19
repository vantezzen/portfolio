import { ExtensionGetPage } from "@/components/legal/extension-get-page";
import { legalMetadata } from "@/components/legal/legal-page";

export const metadata = legalMetadata(
  "Get DontBugMe",
  "Install DontBugMe for your browser.",
);

export default function GetDontBugMePage() {
  return (
    <ExtensionGetPage
      name="DontBugMe"
      links={{
        chrome:
          "https://chrome.google.com/webstore/detail/dontbugme/mknlnngolpglmlcadgdmlaokbfgppmma",
        firefox: "https://addons.mozilla.org/en-US/firefox/addon/dontbugme/",
        edge: "https://microsoftedge.microsoft.com/addons/detail/dontbugme/fdgmjcnekkpdnoplmkljagijndpddnjb/",
        github: "https://github.com/vantezzen/dontbugme",
      }}
    />
  );
}
