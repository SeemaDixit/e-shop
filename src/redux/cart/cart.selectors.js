import { createSelector } from 'reselect';


const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => { return cart.cartItems }
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce(
        (totalQuantity, CartItem) => {
            return (totalQuantity + CartItem.quantity);
        }, 0)

);

