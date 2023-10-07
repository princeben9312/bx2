let cartQuantity = 0

function cart_Quantity (Number){
  cartQuantity += Number;

  if(Number > 0){
    console.log(`${Number} of product was added.`)
    console.log(`The cart Quantity is ${cartQuantity}`)
  }else if(cartQuantity <= 0){
    cartQuantity = 0;
    console.log('The cart is empty');
  }
  else if(Number < 0){
    console.log(`${Number * -1} of products was removed.`)
    console.log(`The cart quantity is ${cartQuantity}`)
  } 

  }