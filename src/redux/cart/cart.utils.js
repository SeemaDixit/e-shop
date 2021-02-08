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