export function formatToBigNumber(value: number | string | null | readonly string[]) {
  if (!value) {
    return 0;
  }
  const formattedValue = value.toString().replace(/[^0-9]/g, '')
  return new Intl.NumberFormat("pt-BR", {}).format(Number(formattedValue));
}
