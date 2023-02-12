import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Connect from "../components/landing/Connect";
import Projects from "../components/landing/Projects";
import Tech from "../components/landing/Tech";
import { Helmet } from "react-helmet";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Helmet>
        <title>
          Hollstein - Crafting powerful websites and web applications
        </title>
      </Helmet>

      <Hero />
      <About />
      <Connect />
      <Projects />
      <Tech />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
