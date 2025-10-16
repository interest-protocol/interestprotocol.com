export function formatNumber<T extends string | number>(
  value: T | null | undefined,
  decimals = 2,
  fallback = 0
): T | number {
  const num = Number(value);

  if (isNaN(num) || value === undefined || value === null) {
    return +fallback.toFixed(decimals);
  }

  return value;
}
