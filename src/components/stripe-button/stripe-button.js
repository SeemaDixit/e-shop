import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = "pk_test_51IO6YoFNezAyjOOywNS5Fij2ubn21dL3caexcCWr2WHIYinj6rhFHyv5tzI070ZKQVpsChhJbQWiANmUOie1WoMp00RWZqMB7P";

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothong"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            billingAddress
            shippingAddress
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;