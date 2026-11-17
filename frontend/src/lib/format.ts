export function formatPrice(value: string | number): string {
  const numericValue = Number(value);

  if (Number.isNaN(numericValue)) {
    return "£0.00";
  }

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericValue);
}

export function formatShortPrice(value: string | number): string {
  const numericValue = Number(value);

  if (Number.isNaN(numericValue)) {
    return "£0";
  }

  return `£${Math.round(numericValue).toLocaleString("en-GB")}`;
}
