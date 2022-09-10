export type ICar = {
  id: string;
  km: number;
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
  anoFabricacao: number;
  anoModelo: number;
  assentos: number;
  autonomia: number;
  cambio: {
    nome: string;
  };
  carroceria: {
    nome: string;
  };
  combustivel: {
    nome: string;
  };
  finalDaPlaca: string;
  confortos: {
    nome: string;
  }[];
  cor: {
    nome: string;
    cor: {
      hex: string;
    };
  };
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
  documentacoes: {
    nome: string;
  }[];
};
