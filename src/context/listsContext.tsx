import { ApolloProvider, gql, useQuery } from "@apollo/client";
import { createContext, ReactNode, useState } from "react";
import { client } from "../lib/apollo";

const GET_LISTS = gql`
  query GetLists {
    carrocerias {
      nome
    }
    essenciais {
      nome
    }
    segurancas {
      nome
    }
    tecnologias {
      nome
    }
    marcas {
      nome
      logo {
        url
      }
    }
    documentacoes {
      nome
    }
    cors {
      cor {
        hex
      }
      nome
    }
    confortos {
      nome
    }
    combustivels {
      nome
    }
    cambios {
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
  carrocerias: DefaultProps[];
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
