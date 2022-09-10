import { FilterOptions } from "../../../../context/systemContext";

export function SetFocusedFilterComponent(focusedFilter: FilterOptions) {
  switch (focusedFilter) {
    case "preco":
      return <div>preco</div>;
    case "ano":
      return <div>ano</div>;
    case "km":
      return <div>km</div>;
    case "carroceria":
      return <div>carroceria</div>;
    case "opcionais":
      return <div>opcionais</div>;
    case "marca":
      return <div>marca</div>;
    case "cambio":
      return <div>cambio</div>;
    case "combustivel":
      return <div>combustivel</div>;
    case "cor":
      return <div>cor</div>;
    case "documentacao":
      return <div>documentacao</div>;
    case "potencia":
      return <div>potencia</div>;
    case "portas":
      return <div>portas</div>;
    case "tracao":
      return <div>tracao</div>;
    default:
      return <div></div>;
  }
}
