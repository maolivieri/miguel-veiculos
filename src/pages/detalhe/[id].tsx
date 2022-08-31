import { gql, useQuery } from "@apollo/client";
import { CarDetailsCard } from "../../components/CarDetailsCard";
import { DetailsHeader } from "../../components/DetailsHeader";
import { client } from "../../lib/apollo";
import styles from "./styles.module.scss";

import { ICar } from "../../types/Car";
import { GetStaticProps } from "next";

interface IProps {
  carProps: ICar;
}

// export default function CarDetailsPage({ carProps }: IProps) {
export default function CarDetailsPage({ carProps }: IProps) {
  const car = carProps;

  return (
    <div className={styles.container}>
      <DetailsHeader />
      {!!car && <CarDetailsCard car={car} />}
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query GetCars {
        cars {
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
    fallback: false, // can also be true or 'blocking'
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
    variables: {
      id: carID,
    },
  });

  // console.log(data);

  const car: ICar = data.car;
  // const car = null;
  return {
    props: { carProps: car },
  };
};
