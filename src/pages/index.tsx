import type { NextPage } from "next";

import { Header } from "../components/Header";
import { HomeSearch } from "../components/HomeSearch";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <HomeSearch />
    </Layout>
  );
};

export default Home;
