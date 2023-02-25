import { Filters } from "../context/systemContext";
import { ICar } from "../types/Car";

interface ListNome {
  nome: string;
}
[];

function isWithinValue(
  value: number,
  min: null | number,
  max: null | number
): boolean {
  if (!min || !max) {
    return true;
  } else if (value >= min && value <= max) {
    return true;
  } else return false;
}

function isWithinList(value: string, list: string[]): boolean {
  if (list.length === 0) {
    return true;
  } else if (list.includes(value)) {
    return true;
  } else return false;
}

function isWithinAllListItems(
  value: { nome: string }[],
  list: string[]
): boolean {
  const reduceArray = value.map((x) => x.nome);
  if (list.length === 0) {
    return true;
  } else if (list.every((v) => reduceArray.includes(v))) {
    return true;
  } else return false;
}

export function filterCar(car: ICar, filter: Filters): boolean {
  return (
    isWithinValue(car.preco, filter.minPrice, filter.maxPrice) &&
    isWithinValue(car.anoModelo, filter.startYear, filter.endYear) &&
    isWithinValue(car.km, filter.kmStart, filter.kmEnd) &&
    isWithinList(car.carroceria.nome, filter.carrocerias) &&
    isWithinList(car.marca.nome, filter.marcas) &&
    isWithinList(car.cambio.nome, filter.cambios) &&
    isWithinList(car.combustivel.nome, filter.combustiveis) &&
    isWithinList(car.cor.nome, filter.cores) &&
    isWithinAllListItems(car.essenciais, filter.carrocerias) &&
    isWithinAllListItems(car.confortos, filter.carrocerias) &&
    isWithinAllListItems(car.tecnologias, filter.carrocerias) &&
    isWithinAllListItems(car.segurancas, filter.carrocerias) &&
    isWithinAllListItems(car.documentacoes, filter.carrocerias)
  );
}
