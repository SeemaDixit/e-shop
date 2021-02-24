import CartItem from "../../components/cart-item/cart-item";

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const exisitingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
        );

    if(exisitingCartItem) {
        return cartItems.map(cartItem => {
            return cartItem.id === cartItemToAdd.id 
            ? {...cartItemToAdd, quantity: cartItem.quantity + 1 }
            : cartItem
        });
    }

    return [...cartItems, { ...cartItemToAdd, quantity : 1}];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    //Find the exisitng item to be removed
    const exisitingItem = cartItems.find(cartItem =>(
        cartItem.id === cartItemToRemove.id
    ));

    if(exisitingItem.quantity === 1) {
        return cartItems.filter(cartItem => (
             cartItem.id !== cartItemToRemove.id
        ));
    }

    return cartItems.map(cartItem =>(
        cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    ));
}