export function formatNumber(
  value: number,
  decimals = 2,
  fallback = '0.00'
): string {
  const num = Number(value);
  return isNaN(num) || value === undefined || value === null
    ? fallback
    : num.toFixed(decimals);
}
