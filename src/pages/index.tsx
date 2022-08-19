import type { NextPage } from "next";
import { useState } from "react";

import ReactVisibilitySensor from "react-visibility-sensor";

import { Header } from "../components/Header";
import { HomeSearch } from "../components/HomeSearch";
import { Layout } from "../components/Layout";
import { OurCars } from "../components/OurCars";

const Home: NextPage = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(true);

  return (
    <Layout>
      <Header isSearchVisible={isSearchVisible} />
      <ReactVisibilitySensor
        partialVisibility
        offset={{ top: 150 }}
        // minTopValue={300}
        onChange={(isVisible: boolean) => {
          console.log(isVisible);
          setIsSearchVisible(isVisible);
        }}
      >
        <HomeSearch />
      </ReactVisibilitySensor>
      <OurCars />
    </Layout>
  );
};

export default Home;
