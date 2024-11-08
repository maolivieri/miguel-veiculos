import { Filters, FiltersRange } from "../context/systemContext";
import { ICar } from "../types/Car";

function isWithinValue(
  value: number,
  min: null | number,
  max: null | number,
  minRange: null | number,
  maxRange: null | number
): boolean {
  const absMin = min || minRange;
  const absMax = max || maxRange;
  if (!absMin || !absMax) {
    return true;
  } else if (value >= absMin && value <= absMax) {
    return true;
  } else return false;
}

function isWithinList(value: string, list: string[]): boolean {
  if (list.length === 0) {
    return true;
  }

  return list.includes(value.toString());
}

function isWithinAllListItems(
  value: { nome: string }[],
  list: string[]
): boolean {
  const reduceArray = value.map((x) => x?.nome);
  if (list.length === 0) {
    return true;
  }

  return list.every((v) => reduceArray.includes(v));
}

export function filterCar(
  car: ICar,
  filter: Filters,
  ranges: FiltersRange
): boolean {
  return (
    isWithinValue(
      car.preco,
      filter.minPrice,
      filter.maxPrice,
      ranges.minPrice,
      ranges.maxPrice
    ) &&
    isWithinValue(
      car.anoModelo,
      filter.startYear,
      filter.endYear,
      ranges.minYear,
      ranges.maxYear
    ) &&
    isWithinValue(
      car.km,
      filter.kmStart,
      filter.kmEnd,
      ranges.minKM,
      ranges.maxKM
    ) &&
    isWithinList(car.carroceria?.nome, filter.carrocerias) &&
    isWithinList(car.marca?.nome, filter.marcas) &&
    isWithinList(car.cambio?.nome, filter.cambios) &&
    isWithinList(car.combustivel?.nome, filter.combustiveis) &&
    isWithinList(car.cor?.nome, filter.cores) &&
    isWithinAllListItems(car.essenciais, filter.essenciais) &&
    isWithinAllListItems(car.confortos, filter.conforto) &&
    isWithinAllListItems(car.tecnologias, filter.tecnologia) &&
    isWithinAllListItems(car.segurancas, filter.seguranca) &&
    isWithinAllListItems(car.documentacoes, filter.documentacoes)
  );
}
