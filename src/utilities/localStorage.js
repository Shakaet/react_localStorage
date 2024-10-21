

let getStoredCart = () => {
    let getItem = localStorage.getItem("cart");
    
    if (getItem) {
        return JSON.parse(getItem);
    }
    return [];
};


let saveToLocalStorage=(cart)=>{

    let carStr= JSON.stringify(cart)

    localStorage.setItem("cart",carStr)

       


}



 let AddToLocalStorage =(id)=>{

    let cart= getStoredCart()

    cart.push(id)

    saveToLocalStorage(cart)

 }


 const removeFromLS = id => {
    const cart = getStoredCart();
    // removing every id
    const remaining = cart.filter(idx => idx !== id);
    saveToLocalStorage(remaining);
}

 

 export {AddToLocalStorage,getStoredCart,removeFromLS}

