const params =
  new URLSearchParams(
    window.location.search
  );

const id =
  Number(params.get("id"));

async function loadProduct() {

  const response =
    await fetch("data/products.json");

  const products =
    await response.json();

  const product =
    products.find(
      p => p.id === id
    );

  const container =
    document.getElementById(
      "product-details"
    );

  if (!container || !product) return;

  container.innerHTML = `
    <div class="card">

      <img
        src="${product.image}"
        alt="${product.name}"
      >

      <div class="card-content">

        <h2>${product.name}</h2>

        <p>${product.description}</p>

        <p class="price">
          ₹${product.price}
        </p>

        <p>
          Category:
          ${product.category}
        </p>

      </div>

    </div>
  `;
}

loadProduct();