import { createSelector } from "reselect";

//1)Input Selector (take in the state as an argument and return a slice of that state)
const selectCart = (state) => state.cart; //prej state e marrim objektin "cart"

/*
The 2nd and 3rd are selectors created using Reselect’s createSelector function. 
createSelector expects 2 arguments: an array of input selector(s) as the 1st argument and a function 
as the 2nd argument, known as the transform function. The transform function receives the 
result(s) from the input selector(s) as arguments and should return the desired computed piece of state.
*/

/*
  "createSelector" e memorizon "selectCartItems"
*/
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems //prej "cart" i nxjerrim "cartItems"-at
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  //(cartItems) => cartItems.length
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cardItem) =>
        accumalatedQuantity + cardItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cardItem) =>
      accumalatedQuantity + cardItem.quantity * cardItem.price,
    0
  )
);
