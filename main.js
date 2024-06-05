document.addEventListener('DOMContentLoaded', function() {

    // Validación del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    // Manejar la búsqueda
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
        // Agregar eventos a los botones de los productos
        const viewButtons = document.querySelectorAll('.view-btn');
        const favoriteButtons = document.querySelectorAll('.favorite-btn');
        const compareButtons = document.querySelectorAll('.compare-btn');
        const productList = document.getElementById('product-list');



    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Por favor complete todos los campos.');
            return false;
        }

        alert('Formulario enviado correctamente.');
        contactForm.reset();
    });


    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Vista previa del producto.');
        });
    });

    favoriteButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Añadido a favoritos.');
        });
    });

    compareButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Añadido a comparar.');
        });
    });
    
    
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const products = productList.querySelectorAll('.card-product');

        products.forEach(product => {
            const productName = product.getAttribute('data-product-name').toLowerCase();
            if (productName.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });


    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const products = document.querySelectorAll('.card-product');
        products.forEach(product => {
            const productName = product.getAttribute('data-product-name').toLowerCase();
            if (productName.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });

    // Manejar el botón de agregar al carrito
    const cartButtons = document.querySelectorAll('.add-cart');
    cartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.card-product');
            const productName = productCard.getAttribute('data-product-name');
            const productPrice = productCard.getAttribute('data-price');

            addToCart(productName, productPrice);
        });
    });

    // Función para agregar al carrito (puedes personalizar esta parte)
    function addToCart(name, price) {
        alert(`Producto agregado al carrito:\nNombre: ${name}\nPrecio: $${price}`);
        // Aquí puedes agregar la lógica para manejar el carrito
    }


// declaracion de variables 
inputSearch = document.getElementById("inputSearch")

//se crea filtrado de busqueda 

document.getElementById(inputSearch).addEventListener("keyup", buscador_interno);



function searchButton(){

    filter = inputSearch.value.toUpperCase();
    li = searchForm.getElementsByTagName("li");
    
    //recorriendo elementos a filtarr mediante los "li"

    for (i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display ="";
        }else{
            li[i].style.display = "none";
        }
    }
};

let data = (
    "Cupcakes",
    "Pasteles",
    "Malteadas",
    "Donas"
);

function searchButton(){
    
    let query = document.getElementById("search").value;
    console.log(query);

    if (query.trim() === ""){
        return;
    }
    let results = [];

    for(let i = 0; i = data.length; i++){
        if(data[i].toLowerCase().includes(query.toLowerCase())){
            results.push(data[i]);
        }
    }
    document.getElementById("results").innerHTML = "";

    if(results.length > 0){
        for(let i = 0; i < results.length; i++){
            let li = document.createElement("li");
            li.textContent = results[i];
            document.getElementById("results").appendChild(li);
        }
    }else{
        let li = document.createElement("li");
        li.textContent = "No se encontro informacion " + query;
        document.getElementById("results").appendChild(li);
    }
  
}
btn.onclick = function(){
    var buscar = document.getElementById("search").value;
    if (buscar == 'cupcakes'){
      <li><a href="pasteles.html">Cupcakes</a></li>
    }
    if (buscar == 'pasteles'){
      <li><a href="pasteles.html">Pasteles</a></li>
    }
    if (buscar == 'malteadas'){
      <li><a href="pasteles.html">Malteadas</a></li>
    }
    if (buscar == 'donas'){
      <li><a href="pasteles.html">Donas</a></li>
    }
  }

//-----------------------------carrito-------------------
document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCountElement = document.getElementById('cart-count');
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    const products = document.querySelectorAll('.card-product');
    products.forEach(product => {
        product.querySelector('.add-to-cart-btn').addEventListener('click', () => {
            const productName = product.getAttribute('data-product-name');
            const productPrice = parseFloat(product.getAttribute('data-product-price'));

            const cartItem = cart.find(item => item.name === productName);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }
            updateCart();
        });
    });

    function updateCart() {
        cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        cartItemsElement.innerHTML = '';

        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <span>${item.name}</span>
                <span>${item.quantity} x $${item.price.toFixed(2)} = $${(item.quantity * item.price).toFixed(2)}</span>
            `;
            cartItemsElement.appendChild(cartItemElement);
        });

        const total = cart.reduce((total, item) => total + item.quantity * item.price, 0);
        cartTotalElement.textContent = total.toFixed(2);
    }
});


});