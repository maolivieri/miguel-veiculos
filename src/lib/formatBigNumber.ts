export function formatToBigNumber(value: number | string | null) {
  if (!value) {
    return 0;
  }
  return new Intl.NumberFormat("pt-BR", {}).format(Number(value));
}
