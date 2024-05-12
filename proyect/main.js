const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");
toggle.addEventListener("click", () => {
sidebar.classList.toggle("close");
})
searchBtn.addEventListener("click", () => {
sidebar.classList.remove("close");
})
modeSwitch.addEventListener("click", () => {
body.classList.toggle("dark");
if (body.classList.contains("dark")) {
  modeText.innerText = "Light mode";
} else {
  modeText.innerText = "Dark mode";
}
});


function getProductsFromDatabase() {
  return [
      { id: 1, name: 'Kompyuter', price: 1500, image: 'https://souz-market.ru/wp-content/uploads/4/a/1/4a1a00d295645334e6734dec44704580.jpeg', description: 'Kuchli kompyuter' },
      { id: 2, name: 'Smartfon', price: 800, image: 'https://mishka-shop.com/upload/resize_cache/iblock/066/1090_800_1/1.jpg', description: 'Ajoyib smartfon' },
  ];
}

function displayProducts() {
  const products = getProductsFromDatabase();
  const productListElement = document.getElementById('product-list');

  products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');

      productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Narx: $${product.price}</p>
          <p>${product.description}</p>
      `;

      productListElement.appendChild(productElement);
  });
}

displayProducts();
