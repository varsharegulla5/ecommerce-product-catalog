let allProducts = [];

async function loadProducts() {

  const response =
    await fetch("data/products.json");

  allProducts =
    await response.json();

  displayProducts(allProducts);
}

function displayProducts(products) {

  const container =
    document.getElementById("products-container");

  container.innerHTML = "";

  products.forEach(product => {

    container.innerHTML += `
      <div class="card">

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

        <div class="card-content">

          <h3>${product.name}</h3>

          <p>${product.category}</p>

          <p class="price">
            ₹${product.price}
          </p>

          <a href="product.html?id=${product.id}">
            View Details
          </a>

        </div>

      </div>
    `;
  });
}

loadProducts();

/* SEARCH */

const search =
  document.getElementById("search");

if (search) {

  search.addEventListener("input", () => {

    const value =
      search.value.toLowerCase();

    const filtered =
      allProducts.filter(product =>
        product.name
        .toLowerCase()
        .includes(value)
      );

    displayProducts(filtered);
  });
}

/* FILTER */

document
.querySelectorAll("[data-category]")
.forEach(button => {

  button.addEventListener("click", () => {

    const category =
      button.dataset.category;

    if (category === "all") {

      displayProducts(allProducts);

    } else {

      const filtered =
        allProducts.filter(product =>
          product.category === category
        );

      displayProducts(filtered);
    }

  });

});