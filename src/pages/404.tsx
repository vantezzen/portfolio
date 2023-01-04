import * as React from "react";
import { Link, PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import PageCard from "../components/various/PageCard";
import { Helmet } from "react-helmet";
import Button from "../components/various/Button";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <PageCard>
        <Helmet>
          <title>Not found</title>
        </Helmet>

        <h1 className="font-bold text-3xl">Page not found</h1>

        <p className="mt-4">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>

        <Link to="/" className="mt-4 inline-block">
          <Button highlighted>Go back to the homepage</Button>
        </Link>
      </PageCard>
    </Layout>
  );
};

export default NotFoundPage;
