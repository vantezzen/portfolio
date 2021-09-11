export function easeOut(position, finalValue) {
  return (1 - Math.pow(1 - position, 1.675)) * finalValue;
}