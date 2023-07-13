import { gql } from "@apollo/client";
import { CarDetailsCard } from "../../components/CarDetailsCard";
import { DetailsHeader } from "../../components/DetailsHeader";
import { client } from "../../lib/apollo";
import styles from "./styles.module.scss";

import { ICar } from "../../types/Car";
import { GetStaticProps } from "next";
import { SideDrawer } from "../../components/SideDrawer";
import { SpinnerComponent } from "../../design/Spinner";
import { useContext, useEffect } from "react";
import { UIContext } from "../../context/uiContext";

interface IProps {
  carProps: ICar;
}

export default function CarDetailsPage({ carProps }: IProps) {
  const { isLoading, stopLoading } = useContext(UIContext);
  const car = carProps;

  useEffect(() => {
    stopLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <SpinnerComponent active={isLoading} />
      <SideDrawer />
      <DetailsHeader />
      {!!car && <CarDetailsCard car={car} />}
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query GetCars {
        cars(first: 100) {
          id
        }
      }
    `,
  });

  const cars: ICar[] = data.cars;
  const paths = cars.map((car) => ({
    params: {
      id: car.id,
    },
  }));

  return {
    paths,
    fallback: true, // can also be false or true
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const carID = params?.id ? params.id : "asd";

  const { data } = await client.query({
    query: gql`
      query GetCar($id: ID) {
        car(where: { id: $id }) {
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
    variables: {
      id: carID,
    },
  });

  const car: ICar = data.car;
  return {
    props: { carProps: car },
    revalidate: 60 
  };
};
