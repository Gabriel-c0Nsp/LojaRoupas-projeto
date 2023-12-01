export function formatPrice(number) {
  let numberFormated = number.toFixed(2);
  return numberFormated.toString().replace(".", ",");
}

export function formatTitle(product) {
  let titleToFormat = product.title
  if (titleToFormat.length > 55) {
    return titleToFormat.slice(0, 55) + "..."    
  } else {
    return titleToFormat
  }
}
