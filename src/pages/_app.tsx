import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SystemContextProvider } from "../context/systemContext";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import { ListsContextProvider } from "../context/listsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <ApolloProvider client={client}>
        <ListsContextProvider>
          <SystemContextProvider>
            <Component {...pageProps} />
          </SystemContextProvider>
        </ListsContextProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
