// LOCALSTORAGE

//Ajouter au panier

function saveBasket(basket){
    console.log("saveBasket");
    localStorage.setItem("basket", JSON.stringify(basket));
}

// Recuperer ce qu'il y a au panier

function getBasket(){
    let basket = localStorage.getItem("basket");
    if (basket == null){
        return [];
    } else {
    return JSON.parse(basket);
    }
}

// Modifier les quantités

function addBasket(product){
    let basket = getBasket();
    const priceSelect = document.getElementById('price').value;
    const titleSelect = document.getElementById('title').value;
    const quantitySelect = document.getElementById('quantity').value;
    const colorSelect = document.getElementById('colors').value;
    const imageSelect = document.getElementById('image').value;
    let foundProduct = basket.find(p => p.id == productId && colorSelect === p.color && p.title === titleSelect);
    if (foundProduct != undefined){
        foundProduct.quantity = parseInt(foundProduct.quantity) + parseInt(quantitySelect);
    } else {

        basket.push({
            id: productId,
            title: titleSelect,
            quantity: quantitySelect,
            color: colorSelect,
            price: priceSelect,
            image: imageSelect
        });
    }
    console.log(basket);
    saveBasket(basket);
}


//Supprimer les quantiés

function removeFromBasket(product){
    let basket = getBasket();
    basket = basket.filter(p => p.id != product.id);
    saveBasket(basket);
}

//Modifier les quantités depuis le panier

function changeQuantity(product, quantity){
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id);
    if (foundProduct != undefined) {
        foundProduct.quantity += quantity;
        if(foundProduct.quantity <= 0){
            removeFromBasket(foundProduct);
        } else{
            saveBasket(basket);
        }
    }
    //saveBasket(basket);
}

//Calculer le prix

function getNumberProduct(){
    let basket = getBasket();
    let number = 0;
    for(let product of basket){
        number += product.quantity;
    }
    return number;
}

function getTotalPrice(){
    let basket = getBasket();
    let total = 0;
    for(let product of basket){
        total += product.quantity *product.price;
    }
    return total;
}
//localStorage.clear();


// BOUTON addToCart

let addToCart = document.getElementById('addToCart');

addToCart.addEventListener("click", addBasket);


//console.log(addBasket({id:"5746", "name":"kanapou", "price":20.00}));