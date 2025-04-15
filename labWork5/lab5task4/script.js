const productsCatalog = new Map();
const productHistory = new WeakMap();


const orders = new Set();

const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const productQuantity = document.getElementById('productQuantity');
const addProductToCatalog = document.getElementById('addProductToCatalog');
const displayCatalog = document.getElementById('displayCatalog');
const catalogList = document.getElementById('catalogList');

productsCatalog.set(1, { name: "coca-cola", price: 15, quantity: 10 });
productsCatalog.set(2, { name: "water", price: 12, quantity: 20 });
productsCatalog.set(3, { name: "sprite", price: 10, quantity: 5 });

addProductToCatalog.addEventListener('click', () => {
    const prName = productName.value;
    const prPrice = parseInt(productPrice.value);
    const prQuantity = parseInt(productQuantity.value);
    const randomId = Math.floor(Math.random() * 999) + 1;

    const product = { name: prName, price: prPrice, quantity: prQuantity };
    productsCatalog.set(randomId, product);
    productHistory.set(product, [`Додано ${new Date().toLocaleString()}`]);
});

displayCatalog.addEventListener('click', () => {
    catalogList.innerHTML = '';
    for (const [id, product] of productsCatalog) {
        const li = document.createElement('li');
        li.textContent = `ID: ${id}, ${product.name} — ${product.price} грн, ${product.quantity} шт.`;
        catalogList.appendChild(li);
    }
});

function deleteProduct() {
    const id = parseInt(document.getElementById('productIdDelete').value);
    if (productsCatalog.has(id)) {
        const product = productsCatalog.get(id);
        productHistory.set(product, [`Видалено ${new Date().toLocaleString()}`]);
        productsCatalog.delete(id);
        alert("Продукт видалено");
    } else {
        alert("Продукт не знайдено");
    }
}

function updateProduct() {
    const id = parseInt(document.getElementById('updateId').value);
    const newPrice = parseInt(document.getElementById('newPrice').value);
    const newQuantity = parseInt(document.getElementById('newQuantity').value);

    if (productsCatalog.has(id)) {
        const product = productsCatalog.get(id);
        product.price = newPrice;
        product.quantity = newQuantity;
        const history = productHistory.get(product) || [];
        history.push(`Оновлено ${new Date().toLocaleString()}`);
        productHistory.set(product, history);
        alert("Продукт оновлено");
    } else {
        alert("Продукт не знайдено");
    }
}

function findProduct() {
    const searchName = document.getElementById('searchName').value.toLowerCase();
    catalogList.innerHTML = '';
    for (const [id, product] of productsCatalog) {
        if (product.name.toLowerCase().includes(searchName)) {
            const li = document.createElement('li');
            li.textContent = `ID: ${id}, ${product.name} — ${product.price} грн, ${product.quantity} шт.`;
            catalogList.appendChild(li);
        }
    }
}

function makeOrder() {
    const id = parseInt(document.getElementById('orderId').value);
    const qty = parseInt(document.getElementById('orderQuantity').value);

    if (productsCatalog.has(id)) {
        const product = productsCatalog.get(id);
        if (product.quantity >= qty) {
            product.quantity -= qty;
            orders.add({ productId: id, quantity: qty, date: new Date() });

            const history = productHistory.get(product) || [];
            history.push(`Замовлено ${qty} шт — ${new Date().toLocaleString()}`);
            productHistory.set(product, history);

            alert("Замовлення оформлено");
        } else {
            alert("Недостатньо товару на складі");
        }
    } else {
        alert("Продукт не знайдено");
    }
}
