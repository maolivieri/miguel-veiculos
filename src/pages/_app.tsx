import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SystemContextProvider } from "../context/systemContext";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import { ListsContextProvider } from "../context/listsContext";
import { UIContextProvider } from "../context/uiContext";
// import Script from 'next/script'
import { useEffect } from "react";
import TagManager from 'react-gtm-module'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NHNTV36' });
}, []);
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
            <UIContextProvider>
              <Component {...pageProps} />
            </UIContextProvider>
          </SystemContextProvider>
        </ListsContextProvider>
      </ApolloProvider>
      {/* <!-- Google tag (gtag.js) --> */}
      {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3JQCVWY41H" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-3JQCVWY41H');
        `}
      </Script> */}
    </>
  );
}

export default MyApp;
