import { Filters } from "../context/systemContext";

export function countValidFilters(af: Filters): number {
  let count = 0;

  (!!af.kmStart || !!af.kmEnd) && count++;
  (!!af.startYear || !!af.endYear) && count++;
  (!!af.minPrice || !!af.maxPrice) && count++;
  af.cambios.length !== 0 && count++;
  af.carrocerias.length !== 0 && count++;
  af.combustiveis.length !== 0 && count++;
  (af.conforto.length !== 0 ||
    af.essenciais.length !== 0 ||
    af.seguranca.length !== 0 ||
    af.tecnologia.length !== 0) &&
    count++;
  af.cores.length !== 0 && count++;
  af.documentacoes.length !== 0 && count++;
  af.marcas.length !== 0 && count++;

  return count;
}
