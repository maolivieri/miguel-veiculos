import { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Miguel Veiculos</title>
        <meta
          name="description"
          content="Website da loja de carros Miguel Veiculos em Capivari-SP"
        />
      </Head>
      {children}
    </>
  );
}
