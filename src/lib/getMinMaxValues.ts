export function getMinValues(array: number[]): number {
  return array.reduce((acc, val) => (acc < val ? acc : val));
}

export function getMaxValues(array: number[]): number {
  return array.reduce((acc, val) => (acc > val ? acc : val), 0);
}
