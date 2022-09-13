import { FilterOptions } from "../../../../context/systemContext";
import { FilterAno } from "../Filters/FilterAno";
import { FilterCambio } from "../Filters/FilterCambio";
import { FilterCarroceria } from "../Filters/FilterCarroceria";
import { FilterCombustivel } from "../Filters/FilterCombustivel";
import { FilterDocumentacao } from "../Filters/FilterDocumentacao";
import { FilterKM } from "../Filters/FilterKM";
import { FilterMarcas } from "../Filters/FilterMarcas";
import { FilterOpcionais } from "../Filters/FilterOpcionais";
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
      return <FilterOpcionais />;
    case "marca":
      return <FilterMarcas />;
    case "cambio":
      return <FilterCambio />;
    case "combustivel":
      return <FilterCombustivel />;
    case "cor":
      return <div>cor</div>;
    case "documentacao":
      return <FilterDocumentacao />;
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
