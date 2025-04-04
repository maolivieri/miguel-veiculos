import { ApolloProvider, gql, useQuery } from "@apollo/client";
import { createContext, ReactNode, useState } from "react";
import { client } from "../lib/apollo";

const GET_LISTS = gql`
  query GetLists {
    carrocerias(orderBy: nome_ASC, where: {cars_every: {id_contains: ""}}) {
      nome
      icon {
        url
      }
    }
    essenciais(orderBy: nome_ASC) {
      nome
    }
    segurancas(orderBy: nome_ASC) {
      nome
    }
    tecnologias(orderBy: nome_ASC) {
      nome
    }
    marcas(orderBy: nome_ASC, where: {cars_every: {id_contains: ""}}) {
      nome
      logo {
        url
      }
    }
    documentacoes(orderBy: nome_ASC) {
      nome
    }
    cors(orderBy: nome_ASC, where: {cars_every: {id_contains: ""}}) {
      cor {
        hex
      }
      nome
    }
    confortos(orderBy: nome_ASC) {
      nome
    }
    combustivels(orderBy: nome_ASC) {
      nome
    }
    cambios(orderBy: nome_ASC) {
      nome
    }
  }
`;

interface Props {
  children: ReactNode;
}

interface DefaultProps {
  nome: string;
}

interface CarroceriasProps {
  nome: string;
  icon?: {
    url?: string;
  };
}

interface MarcasProps {
  nome: string;
  logo?: {
    url?: string;
  };
}

interface CoresProps {
  nome: string;
  cor: {
    hex: string;
  };
}

type API_DATA = {
  carrocerias: CarroceriasProps[];
  essenciais: DefaultProps[];
  segurancas: DefaultProps[];
  tecnologias: DefaultProps[];
  marcas: MarcasProps[];
  documentacoes: DefaultProps[];
  cors: CoresProps[];
  confortos: DefaultProps[];
  combustivels: DefaultProps[];
  cambios: DefaultProps[];
};

const BLANK_DATA = {
  carrocerias: [],
  essenciais: [],
  segurancas: [],
  tecnologias: [],
  marcas: [],
  documentacoes: [],
  cors: [],
  confortos: [],
  combustivels: [],
  cambios: [],
};

type ListsContextType = API_DATA;

export const ListsContext = createContext({} as ListsContextType);

export const ListsContextProvider = ({ children }: Props) => {
  const { data } = useQuery<API_DATA>(GET_LISTS);

  const VALUE = !data ? BLANK_DATA : data;

  return (
    <ListsContext.Provider value={VALUE}>{children}</ListsContext.Provider>
  );
};
