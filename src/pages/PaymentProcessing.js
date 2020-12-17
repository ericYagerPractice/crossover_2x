import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../components/stripe'
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Hz92AEZ09d89Q16FNjk6S3UzcWxUjqjRwWxacwLtmdw8LpL8mF7H6ydFlbGGs2SiCk1oHDTMxqHKJVSnG6CqFGG007qcfsaje');

export default function Checkout() { 
    return(
        <>
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
            
        </>
    )
}