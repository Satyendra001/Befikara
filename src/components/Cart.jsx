import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="py-20 px-6 bg-[#111] min-h-screen">
        <h2 className="text-3xl font-bold text-center text-[#C5A46D] mb-12">Your Cart</h2>
        <p className="text-center text-white/70">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="py-20 px-6 bg-[#111] min-h-screen">
      <h2 className="text-3xl font-bold text-center text-[#C5A46D] mb-12">Your Cart</h2>
      <div className="max-w-4xl mx-auto">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white/5 p-4 mb-4 rounded">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-800 rounded">
              <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-[#C5A46D]">₹{item.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 bg-[#C5A46D] text-black rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-[#C5A46D] text-black rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-400"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="mt-8 text-right">
          <p className="text-xl font-bold text-[#C5A46D]">Total: ₹{total}</p>
          <Link 
            to="/checkout" 
            className="mt-4 bg-[#C5A46D] text-black px-6 py-2 rounded hover:bg-[#B49B6D] transition-colors"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;