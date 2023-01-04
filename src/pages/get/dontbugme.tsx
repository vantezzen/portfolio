import React from "react";
import ExtensionPage from "../../components/various/ExtensionPage";

function DontBugMe() {
  return (
    <ExtensionPage
      name="DontBugMe"
      links={{
        github: "https://github.com/vantezzen/dontbugme",
        firefox: "https://addons.mozilla.org/en-US/firefox/addon/dontbugme/",
        chrome:
          "https://chrome.google.com/webstore/detail/dontbugme/mknlnngolpglmlcadgdmlaokbfgppmma",
        edge: "https://microsoftedge.microsoft.com/addons/detail/dontbugme/fdgmjcnekkpdnoplmkljagijndpddnjb/",
      }}
    />
  );
}

export default DontBugMe;
