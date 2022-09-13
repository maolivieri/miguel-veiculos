import { FilterOptions } from "../../../../context/systemContext";
import { FilterAno } from "../Filters/FilterAno";
import { FilterCarroceria } from "../Filters/FilterCarroceria";
import { FilterKM } from "../Filters/FilterKM";
import { FilterPreco } from "../Filters/FilterPreco";

export function SetFocusedFilterComponent(focusedFilter: FilterOptions) {
  switch (focusedFilter) {
    case "preco":
      return <FilterPreco />;
    case "ano":
      return <FilterAno />;
    case "km":
      return <FilterKM />;
    case "carroceria":
      return <FilterCarroceria />;
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
