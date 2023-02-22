import { gql } from "@apollo/client";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useContext, useEffect, useState } from "react";

import ReactVisibilitySensor from "react-visibility-sensor";

import { Header } from "../components/Header";
import { HomeFloatingMenu } from "../components/HomeFloatingMenu";
import { HomeSearch } from "../components/HomeSearch";
import { Layout } from "../components/Layout";
import { OurCars } from "../components/OurCars";
import { SideDrawer } from "../components/SideDrawer";
import { SystemContext } from "../context/systemContext";
import { UIContext } from "../context/uiContext";
import { SpinnerComponent } from "../design/Spinner";
import { client } from "../lib/apollo";
import { filterCar } from "../lib/filterCars";
import { ICar } from "../types/Car";
import { SearchFilters } from "../components/SearchFIlters";

const Home: NextPage = ({
  carsProps,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { activeFilters } = useContext(SystemContext);
  const { isLoading, stopLoading } = useContext(UIContext);

  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    stopLoading();
  }, []);

  const cars: ICar[] = carsProps;

  const carsSearchResult = cars.filter(
    (car) =>
      car.modelo.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      car.marca.nome.toLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  const carsFiltered = carsSearchResult.filter((car) =>
    filterCar(car, activeFilters)
  );

  const carsArray = carsFiltered;
  return (
    <Layout>
      <div>
        <SpinnerComponent active={isLoading} />
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
          <HomeSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </ReactVisibilitySensor>
        <OurCars cars={carsArray} />
        <HomeFloatingMenu isSearchVisible={isSearchVisible} />
      </div>
      <SearchFilters />
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
          anoFabricacao
          anoModelo
          assentos
          autonomia
          cambio {
            nome
          }
          carroceria {
            nome
          }
          combustivel {
            nome
          }
          confortos {
            nome
          }
          cor {
            nome
            cor {
              hex
            }
          }
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
          documentacoes {
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
