import { Layout } from "../../components/Layout";
import SubPages from "../../components/SubPage";

export default function AboutUs() {
  const pStyles = { lineHeight: "1.5rem", color: "var(--gray-800)" };

  return (
    <Layout title="Miguel Veiculos | Sobre nós">
      <SubPages images={["/assets/images/miguel.png", "/assets/images/lojamv1.png", "/assets/images/lojamv2.png"]} title="Sobre Nós">
        <div>
          <p style={pStyles}>
            Fundada por <b>Miguel Rodrigues de Jesus</b>, na cidade de Capivari,
            interior de São Paulo, a loja Miguel Veículos vem atuando no
            mercado de venda de carros semi-novos desde 1998.
          </p>
          <p style={pStyles}>
            A ética, transparência e compromisso com nossos clientes sempre foram
            prioridades em nossos negócios e os princiapis pilares que moldaram a
            trajetória da nossa marca.
          </p>
        </div>
      </SubPages>
    </Layout>
  );
}
