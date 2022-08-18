import type { NextPage } from "next";

import { Header } from "../components/Header";
import { HomeSearch } from "../components/HomeSearch";
import { Layout } from "../components/Layout";
import { OurCars } from "../components/OurCars";

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <HomeSearch />
      <OurCars />
    </Layout>
  );
};

export default Home;
