/*
  Utility functions allow us to keep our files clean and organize
  functions that we may need in multiple files in one location
*/

/* 
"cartItems" - existing card items(array)
"cartItemToAdd" - ajo qe deshirojm me shtu.
*/
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exisitngCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  //if exist
  if (exisitngCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //if not exist
  //kthejm nje array te ri me te gjitha item-at ekzistue ("...cartItems")
  //gjithashtu i shtojm edhe ato te rejat por "quantity" ja japum vleren 1 (""...cartItemToAdd, quantity: 1")

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  //quntity property gets attached the first time around since this if
  //block won't run when it's a new item
};

//Kur te zvoglojm "Quantity-in" permes shigjetes
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const exisitngCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (exisitngCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};
