export type ICar = {
  id: string;
  km: string;
  modelo: string;
  opcional_direito: boolean;
  opcional_esquerdo: boolean;
  portas: number;
  potencia: string;
  preco: number;
  tracao: string;
  marca: {
    nome: string;
    logo: {
      url: string;
    };
  };
  main_image: {
    url: string;
  };
  ano: string;
  assentos: number;
  autonomia: number;
  cambio: string;
  carroceria: string;
  combustivel: string;
  confortos: {
    nome: string;
  }[];
  cor: string;
  essenciais: {
    nome: string;
  }[];
  fotos: {
    fotos: {
      url: string;
    };
  }[];
  segurancas: {
    nome: string;
  }[];
  tecnologias: {
    nome: string;
  }[];
};
