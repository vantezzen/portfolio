/** 234k, 3.5k, 10.1M: compact numbers with one decimal below 10k and none above. */
export function formatCompact(value: number, fractionDigits?: number) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: fractionDigits ?? (value >= 10_000 ? 0 : 1),
  })
    .format(value)
    .replace("K", "k");
}
