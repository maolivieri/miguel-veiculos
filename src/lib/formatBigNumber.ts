export function formatToBigNumber(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    // style: "unit",
    currency: "BRL",
    // minimumFractionDigits: 2,
  }).format(Number(value));
}
