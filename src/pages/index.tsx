import { gql } from "@apollo/client";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useState } from "react";

import ReactVisibilitySensor from "react-visibility-sensor";
import { FiltersModal } from "../components/FiltersModal";

import { Header } from "../components/Header";
import { HomeFloatingMenu } from "../components/HomeFloatingMenu";
import { HomeSearch } from "../components/HomeSearch";
import { Layout } from "../components/Layout";
import { OurCars } from "../components/OurCars";
import { SideDrawer } from "../components/SideDrawer";
import { client } from "../lib/apollo";
import { ICar } from "../types/Car";

const Home: NextPage = ({
  carsProps,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const cars: ICar[] = carsProps;
  const carsFiltered = cars.filter(
    (car) =>
      car.modelo.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      car.marca.nome.toLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  return (
    <Layout>
      <SideDrawer />
      <Header isSearchVisible={isSearchVisible} />
      <ReactVisibilitySensor
        partialVisibility
        offset={{ top: 140 }}
        // minTopValue={300}
        onChange={(isVisible: boolean) => {
          setIsSearchVisible(!isVisible);
        }}
      >
        <HomeSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </ReactVisibilitySensor>
      <OurCars cars={carsFiltered} />
      <HomeFloatingMenu isSearchVisible={isSearchVisible} />
      <FiltersModal />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        cars {
          id
          km
          modelo
          opcional_direito
          opcional_esquerdo
          portas
          potencia
          preco
          publishedAt
          stage
          tracao
          finalDaPlaca
          marca {
            nome
            logo {
              url
            }
          }
          main_image {
            url
          }
          ano
          assentos
          autonomia
          cambio
          carroceria
          combustivel
          confortos {
            nome
          }
          cor
          essenciais {
            nome
          }
          fotos {
            ... on Foto {
              id
              fotos {
                url
              }
            }
          }
          segurancas {
            nome
          }
          tecnologias {
            nome
          }
        }
      }
    `,
  });

  const cars: ICar[] = data.cars;

  return {
    props: {
      carsProps: cars,
    },
  };
};
