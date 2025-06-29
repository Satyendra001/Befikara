import React, { useState, useContext } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { cartItems, total } = useContext(CartContext);
  const stripe = useStripe();
  const elements = useElements();


  const handleSubmit  = () =>{
    console.log("Submit called---------")
  }
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);

//     if (!stripe || !elements) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//     });

//     if (error) {
//       setError(error.message);
//       setLoading(false);
//       return;
//     }

//     // Send payment info to your backend
//     try {
//       const response = await axios.post('/api/payment', {
//         payment_method_id: paymentMethod.id,
//         amount: total * 100, // Convert to cents
//       });

//       if (response.data.success) {
//         // Handle successful payment
//         // Clear cart, show success message, etc.
//       }
//     } catch (err) {
//       setError('Payment failed. Please try again.');
//     }
    
//     setLoading(false);
//   };

  return (
    <div className="min-h-screen py-20 px-6 bg-[#111]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#C5A46D] mb-12">Checkout</h2>
        
        {/* Order Summary */}
        <div className="bg-white/5 p-6 rounded mb-8">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} x {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="border-t border-white/10 mt-4 pt-4">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <form onSubmit={handleSubmit} className="bg-white/5 p-6 rounded">
          <div className="mb-6">
            <label className="block text-sm mb-2">Card Details</label>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#ffffff',
                    '::placeholder': {
                      color: '#aab7c4'
                    }
                  },
                  invalid: {
                    color: '#fa755a',
                  }
                }
              }}
              className="p-3 bg-white/10 rounded"
            />
          </div>

          {error && (
            <div className="text-red-500 mb-4">{error}</div>
          )}

          <button
            type="submit"
            disabled={!stripe || loading}
            className="w-full bg-[#C5A46D] text-black py-3 rounded font-medium hover:bg-[#B49B6D] transition-colors disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;