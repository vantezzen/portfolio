import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout/Layout";
import Button from "./Button";
import PageCard from "./PageCard";

const STORE_NAMES = {
  chrome: "Google Chrome Webstore",
  firefox: "Mozilla Firefox Add-ons",
  edge: "Microsoft Edge Add-ons",
  github: "GitHub",
};

function ExtensionPage({
  name,
  links,
}: {
  name: string;
  links: {
    github: string;
    firefox: string;
    chrome: string;
    edge?: string;
  };
}) {
  useEffect(() => {
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      // Firefox
      window.location.href = links.firefox;
    } else if ((window as any).chrome) {
      // Chrome(-ium)
      window.location.href = links.chrome;
    }
  }, []);

  return (
    <Layout>
      <PageCard>
        <Helmet>
          <title>Get {name} - Hollstein</title>
        </Helmet>

        <h1 className="font-bold text-3xl">Get {name}</h1>

        <div className="flex flex-col gap-6">
          {Object.keys(links).map((store) => (
            <a href={links[store as keyof typeof links]} key={store}>
              <Button highlighted>
                Get on {STORE_NAMES[store as keyof typeof links]}
              </Button>
            </a>
          ))}
        </div>
      </PageCard>
    </Layout>
  );
}

export default ExtensionPage;
