import Product from "./productModel.js";

const urlParams = new URLSearchParams(window.location.search)
const productId = urlParams.get('id')

const productUrl = `https://api-lojaroupas.up.railway.app/lojaroupas/${productId}`

fetch(productUrl)
  .then((response) => response.json())
  .then((data) => {

    const product = new Product()

    product.title = data.title
    product.price = data.price
    product.image = data.image
    product.id = data.id
    product.description = data.description


    // product image container
    const productDetailContainer = document.getElementById('productImageContainer')

    const productDetail = document.createElement('div')
    productDetail.classList.add('product-image')

    productDetail.innerHTML = `
      <img src="${product.image}" alt="product-image">
    `;

    productDetailContainer.appendChild(productDetail)


    // product title container
    const productTitle = document.getElementById('title')

    const title = document.createElement('h2')
    title.innerHTML = `
      
      <h2>${product.title}</h2>
    `;

    productTitle.appendChild(title)


    // product price section
    const productPrice = document.getElementById('price')

    const price = document.createElement('span')
    price.innerHTML = `
      <span class="price">R$ ${formatPrice(product.price)}</span>
    `;

    productPrice.appendChild(price)

  });
