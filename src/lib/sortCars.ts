import { SortOptions } from "../context/systemContext";
import { ICar } from "../types/Car";

export function SortCars(cars: ICar[], param: SortOptions) {
  switch (param) {
    case "menorpreco":
      return cars.sort((a, b) => a.preco - b.preco);
    case "maiorpreco":
      return cars.sort((a, b) => b.preco - a.preco);
    case "menorano":
      return cars.sort((a, b) => b.anoModelo - a.anoModelo);
    case "menorkm":
      return cars.sort((a, b) => a.km - b.km);
    case "az":
      return cars.sort((a, b) =>
        a.modelo > b.modelo ? 1 : b.modelo > a.modelo ? -1 : 0
      );
    default:
      return cars;
  }
}
