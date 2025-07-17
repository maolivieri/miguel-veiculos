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
import { getMaxValues, getMinValues } from "../lib/getMinMaxValues";
import { SortCars } from "../lib/sortCars";
import { Modal } from "../design/Modal";
import { SortCarsList } from "../components/SortCarsList";
import { ModalCarSearch } from "../components/ModalCarSearch";
import { PageFooter } from "../components/PageFooter";
import { useInView } from "react-intersection-observer";

const Home: NextPage = ({
  carsProps,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    activeFilters,
    setFilterRanges,
    filterRanges,
    listSort,
    isFiltersOpen,
  } = useContext(SystemContext);
  const { isLoading, stopLoading } = useContext(UIContext);

  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const [isSortOpen, setIsSortOpen] = useState(false);
  function handleSortOpen() {
    setIsSortOpen((prevState) => !prevState);
    setIsSearchOpen(false);
  }
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  function handleSearchOpen() {
    setIsSearchOpen((prevState) => !prevState);
    setIsSortOpen(false);
  }

  // Intersection Observer hook:
  const { ref: searchRef, inView } = useInView({
    /* optional options: */
    rootMargin: '-140px 0px 0px 0px',  // similar to offset top 140px
    triggerOnce: false,
  });

  useEffect(() => {
    // When component is not in view, set isSearchVisible to false
    setIsSearchVisible(!inView);
  }, [inView]);

  const cars: ICar[] = carsProps;

  const pricesArray = cars.map((car) => car.preco);
  const kmArray = cars.map((car) => car.km);
  const yearArray = cars.map((car) => car.anoModelo);

  const minPrice = getMinValues(pricesArray);
  const maxPrice = getMaxValues(pricesArray);
  const minKM = getMinValues(kmArray);
  const maxKM = getMaxValues(kmArray);
  const minYear = getMinValues(yearArray);
  const maxYear = getMaxValues(yearArray);

  useEffect(() => {
    stopLoading();
    setFilterRanges({
      minPrice,
      maxPrice,
      minKM,
      maxKM,
      minYear,
      maxYear,
    });
  }, []);

  const carsSearchResult = cars.filter(
    (car) =>
      car.modelo.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      car.marca.nome.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      car.carroceria.nome
        .toLowerCase()
        .includes(searchValue.toLocaleLowerCase())
  );

  const carsFiltered = carsSearchResult.filter((car) =>
    filterCar(car, activeFilters, filterRanges)
  );

  const carsArray = SortCars(carsFiltered, listSort);
  return (
    <Layout>
      <div className={`pageBody`}>
        <SpinnerComponent active={isLoading} />
        <SideDrawer />
        <Header isSearchVisible={isSearchVisible} />
        <div ref={searchRef}>
          <HomeSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <OurCars cars={carsArray} />
        <PageFooter />
        <Modal isOpen={isSortOpen} toggleModal={handleSortOpen} isFilterOpen={isFiltersOpen} isSearchVisible={isSearchVisible}>
          <SortCarsList toggleFilters={handleSortOpen} />
        </Modal>
        <Modal isOpen={isSearchOpen} toggleModal={handleSearchOpen} isFilterOpen={isFiltersOpen} isSearchVisible={isSearchVisible}>
          <ModalCarSearch
            toggleModal={handleSearchOpen}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </Modal>
        <SearchFilters />
        <HomeFloatingMenu
          handleSearchOpen={handleSearchOpen}
          handleSortOpen={handleSortOpen}
          isSearchVisible={isSearchVisible}
          openModals={[isSortOpen, isSearchOpen, isFiltersOpen]}
        />
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query GetAllCars {
        cars(orderBy: publishedAt_DESC, first: 100) {
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
    revalidate: 60
  };
};
