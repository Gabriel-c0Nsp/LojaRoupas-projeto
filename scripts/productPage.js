import Product from "./productModel.js";

const urlParams = new URLSearchParams(window.location.search)
const productId = urlParams.get('id')

const productUrl = `https://api-lojaroupas-production.up.railway.app/lojaroupas/${productId}`

fetch(productUrl)
  .then((response) => response.json())
  .then((data) => {

    const product = new Product()

    product.title = data.title
    product.price = data.price
    product.image = data.image
    product.id = data.id
    product.description = data.description

    const productDetailContainer = document.getElementById('productImageContainer')

    const productDetail = document.createElement('div')
    productDetail.classList.add('product-image')

    productDetail.innerHTML = `
      <img src="${product.image}" alt="product-image">
    `;

    productDetailContainer.appendChild(productDetail)

  });
