async function loadFeaturedProducts() {

  const response =
    await fetch("data/products.json");

  const products =
    await response.json();

  const container =
    document.getElementById("featured-products");

  if (!container) return;

  products.slice(0, 3).forEach(product => {

    container.innerHTML += `
      <div class="card">

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

        <div class="card-content">

          <h3>${product.name}</h3>

          <p class="price">
            ₹${product.price}
          </p>

        </div>

      </div>
    `;
  });
}

loadFeaturedProducts();