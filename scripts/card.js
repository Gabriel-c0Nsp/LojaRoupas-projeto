class Product {
  title;
  price;
  image;
}

function formatNumber(number) {
    return number.toString().replace(".", ",");
}

const url = "https://fakestoreapi.com/products"

const productContainer = document.getElementById('productContainer');

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((productData) => {
      const product = new Product();
      product.title = productData.title;
      product.price = productData.price;
      product.image = productData.image;

      const productCard = document.createElement('div');
      productCard.classList.add('card-container');

      productCard.innerHTML = `
        <a href="#" class="card-container">
        <div class="product-img">
          <img src="${product.image}" alt="product-image" />
        </div>
          <div class="favorite-status">
            <i
              class="fa-regular fa-heart favorite-icon"
              style="color: #000000"
            ></i>
          </div>
        <div class="product-info">
          <p>${product.title}</p>
          <span>R$ ${formatNumber(product.price)}</span>
        </div>
        </a>
      `;

      productContainer.appendChild(productCard);
    });
  });

