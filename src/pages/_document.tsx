import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Gruppo&display=swap"
            rel="stylesheet"
          />
          <meta name="robots" content="index, follow" />
          <meta name="theme-color" content="#3e4938" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#3e4938" />
          <meta name="msapplication-navbutton-color" content="#3e4938" />
          <meta name="keywords" content="carros, semi-novos, venda, troca, compra, financiamento, concessionária, veiculos, motos, capivari, piracicaba, campinas, automóveis, loja" />
          {/* Google Tag Manager */}
          <script>
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KX5BF3NN');`}
          </script>
          {/* End Google Tag Manager */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KX5BF3NN"
          height="0" width="0" style={{ "display": "none", "visibility": "hidden" }}></iframe></noscript>
      </Html>
    );
  }
}

export default MyDocument;
