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


// login and signup page

export function validateName(name) {
  const regex = /^[a-zA-Z]{8,}$/;
  return regex.test(name);
}

export function validateEmail(email) {
  const regex = /^[a-zA-Z][a-zA-Z0-9.]{10,}@(gmail\.com|hotmail\.com|outlook\.com)$/i;
  return regex.test(email);
}

export function validatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{12,}$/;
  return regex.test(password);
}

export function validatePhoneNumber(phoneNumber) {
  const regex = /^(\d{2}[- ]?\d{5}[- ]?\d{4}|\d{11})$/;
  return regex.test(phoneNumber);
}
