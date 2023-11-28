import Product from "./productModel.js";

const url = "http://localhost:8080/lojaroupas/products";
const productContainer = document.getElementById("productContainer");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const productsList = data.map((productData) => {
      const product = new Product();
      product.title = productData.title;
      product.price = productData.price;
      product.image = productData.image;
      product.id = productData.id;
      return product;
    });

    const productCards = productsList.map((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("card-container");

      productCard.innerHTML = `
        <a href="content/product-page.html" class="card-container">
          <div class="product-img">
            <img src="${product.image}" alt="product-image" />
          </div>
          <div class="favorite-status">
            <i class="fa-regular fa-heart favorite-icon" style="color: #000000"></i>
          </div>
          <div class="product-info">
            <p>${formatTitle(product)}</p>
            <span>R$ ${formatPrice(product.price)}</span>
          </div>
        </a>`;

      productCard.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = `content/product-page.html?id=${product.id}`;
      });

      productContainer.appendChild(productCard);
      return productCard;
    });

    const search = () => {
      const searchBar = document
        .getElementById("searchBar")
        .value.toLowerCase();

      for (let i = 0; i < productsList.length; i++) {
        const productTitle = productsList[i].title.toLowerCase();
        const productCard = productCards[i];

        if (productTitle.includes(searchBar)) {
          productCard.style.display = "block";
        } else {
          productCard.style.display = "none";
        }
      }
    };

    window.search = search;
  });
