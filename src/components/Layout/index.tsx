import { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export function Layout({ children, title = 'Miguel Veiculos'  }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Website com a melhor seleção de carros semi-novos em Capivari-SP na loja Miguel Veículos"
        />
      </Head>
      {children}
    </>
  );
}
