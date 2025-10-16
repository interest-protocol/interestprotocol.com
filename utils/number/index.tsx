export function formatNumber(
  value: number | string,
  decimals = 2,
  fallback = 0
): number {
  const num = Number(value);
  if (isNaN(num) || value === undefined || value === null) {
    return +fallback.toFixed(decimals);
  }
  return +num.toFixed(decimals);
}
