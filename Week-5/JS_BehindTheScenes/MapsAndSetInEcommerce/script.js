let productViews = new WeakMap();
const keyObject1 = {};
function incrementProductViews(productId){    
   
    keyObject1["prodId"] = productId;

    if(!productViews.has(keyObject1)){
        productViews.set(keyObject1,1);
        console.log(`Product ID ${productId} is viewed for the first time`);
    }
    else if(productViews.has(keyObject1)){
       let visitCount = productViews.get(keyObject1);
        productViews.set(keyObject1,++visitCount);
        console.log(`Product ID ${productId} is viewed for the ${visitCount} time`);
    }    
}

let cartItems = new WeakSet();
const keyObject2 = {};
function addToCart(productId){   
    
    keyObject2["prodId"] = productId;

    if(!cartItems.has(keyObject2)){
        cartItems.add(keyObject2);
        console.log("Product added to cart");
    }
    else if(cartItems.has(keyObject2)){
       console.log("Product already in cart");
    }    
}

incrementProductViews(123);     // Product ID 123 is viewed for the first time
incrementProductViews(1234);     // Product ID 123 is viewed for the second time

addToCart(123);     // "Product added to cart"
addToCart(1234);     // "Product already in cart"
