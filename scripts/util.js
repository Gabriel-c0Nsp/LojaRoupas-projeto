function formatNumber(number) {
  let numberFormated = number.toFixed(2);
  return numberFormated.toString().replace(".", ",");
}

function formatTitle(product) {
  let titleToFormat = product.title
  if (titleToFormat.length > 55) {
    return titleToFormat.slice(0, 55) + "..."    
  } else {
    return titleToFormat
  }
}
