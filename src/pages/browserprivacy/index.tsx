import { Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout/Layout";
import Button from "../../components/various/Button";
import PageCard from "../../components/various/PageCard";

function Index() {
  return (
    <Layout>
      <PageCard>
        <h1 className="font-bold text-3xl">
          Privacy policies for browser extensions
        </h1>
        <p>Please select a browser extension</p>

        <div className="flex flex-col gap-6">
          <Link to="/browserprivacy/dontbugme">
            <Button highlighted>DontBugMe</Button>
          </Link>
          <Link to="/browserprivacy/skip-silence">
            <Button highlighted>Skip Silence</Button>
          </Link>
          <Link to="/browserprivacy/bangs">
            <Button highlighted>Bangs for Google</Button>
          </Link>
        </div>
      </PageCard>
    </Layout>
  );
}

export default Index;
