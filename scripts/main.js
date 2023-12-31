import Product from "./productModel.js";
import { formatTitle, formatPrice } from "./util.js";

const url = "http://localhost:8080/lojaroupas/product/products";
const productContainer = document.getElementById("productContainer");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const productCards = [];
    const productsList = data.map((productData) => {
      const product = new Product();
      product.category = productData.category;
      product.title = productData.title;
      product.price = productData.price;
      product.image = productData.image;
      product.id = productData.id;
      return product;
    });

    productsList.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("card-container");

      productCard.innerHTML = `
        <a href="src/product-page.html" class="card-container">
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
        window.location.href = `src/product-page.html?id=${product.id}`;
      });

      productCards.push(productCard);
      productContainer.appendChild(productCard);
    });

    // category section
    const categoryArr = {
      categoryOffers: document.getElementById("ofertas"),
      categoryBrandNew: document.getElementById("novidades"),
      categoryMale: document.getElementById("masculino"),
      categoryFemale: document.getElementById("feminino"),
      categoryPurse: document.getElementById("bolsas"),
      categoryShoes: document.getElementById("calcados"),
      categoryWinter: document.getElementById("inverno"),
      categoryAccessories: document.getElementById("acessorios"),
    };

    Object.values(categoryArr).forEach((categoryElement) => {
      categoryElement.addEventListener("click", (event) => {
        const selectedCategory = event.target.id.toLowerCase();

        Object.values(categoryArr).forEach((element) => {
          element.style.color = "black";
        });

        for (let i = 0; i < productsList.length; i++) {
          const categoryValue = productsList[i].category.toLowerCase();
          const productCard = productCards[i];

          if (categoryValue === selectedCategory) {
            productCard.style.display = "block";
            event.target.style.color = "rgb(189, 2, 2, 1)";
          } else {
            productCard.style.display = "none";
          }
        }
      });
    });

    const logo = document.getElementById("logo").addEventListener("click", () => {
        for (let i = 0; i < productsList.length; i++) {
          const productCard = productCards[i];
          productCard.style.display = "block";
        }
        Object.values(categoryArr).forEach((element) => {
          element.style.color = "";
        });
      });

    // search section
    const search = () => {
      const searchBar = document.getElementById("searchBar").value.toLowerCase();

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
