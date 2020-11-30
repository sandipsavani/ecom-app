import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const stripeCheckoutButton = ({ price }) => { 
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HTrNRDwRXjAC4ExSFisz24s0k1N6nKQB0YLETGOhijgZ5t0KeUnwB0MFfahQ7C3sQzs1xjaAWFrhFkAUiywkICP00dGSbYb8c';
    
    const onToken = token => {
        console.log('token: ', token);
        alert('Payment Done');
    };
    
    return (
        <StripeCheckout
            label='Pay Now'
            name='Ecom App.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default stripeCheckoutButton;