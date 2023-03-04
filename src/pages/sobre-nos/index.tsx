import SubPages from "../../components/SubPage";

export default function AboutUs() {
  return (
    <SubPages
      images={["/assets/images/cover.png", "/assets/images/header_alt.png"]}
      copy="Fundada por Miguel Rodrigues de Jesus, na cidade de Capivari, no
    interior de São Paulo, a loja Miguel Veículos vem atuando no
    mercado de venda de carros semi-novos desde 1998."
      title="Sobre Nós"
    />
  );
}
