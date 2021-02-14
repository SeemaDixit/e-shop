import React from 'react';
import { connect } from 'react-redux';


import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-dropdown.scss';

const CartDropdown = ({cartItems}) => {
    console.log(cartItems);
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => {
                        return(
                            <CartItem key={cartItems.id} item={cartItem} />
                        );
                    })
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItemsCount(state)
    }
}

export default connect(mapStateToProps)(CartDropdown);