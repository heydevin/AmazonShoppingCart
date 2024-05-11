export function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
}

// default export example
export default formatCurrency;