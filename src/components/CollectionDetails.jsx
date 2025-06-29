import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BsArrowLeft, BsPlusLg, BsDashLg } from 'react-icons/bs';
import { collections } from '../data/collections';
import { CartContext } from '../context/CartContext';

const CollectionDetails = () => {
  const { slug } = useParams();
  const { cartItems, addToCart, updateQuantity } = useContext(CartContext);
  const collection = collections.find(c => c.slug === slug);

  const getQuantityInCart = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#111]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#C5A46D] mb-4">Collection not found</h2>
          <Link to="/#collections" className="inline-flex items-center text-[#C5A46D] hover:opacity-80">
            <BsArrowLeft className="mr-2" /> Back to Collections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <Link to="/#collections" className="inline-flex items-center text-[#C5A46D] mb-8 hover:opacity-80">
          <BsArrowLeft className="mr-2" /> Back to Collections
        </Link>
        
        <h1 className="text-4xl font-bold text-[#C5A46D] mb-4">{collection.name}</h1>
        <p className="text-white/70 mb-12">{collection.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collection.items?.map(item => (
            <div key={item.id} className="bg-white/5 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-700"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-[#C5A46D] mb-4">₹{item.price}</p>
                
                {getQuantityInCart(item.id) > 0 ? (
                  <div className="flex items-center justify-center gap-3">
                    <button 
                      onClick={() => updateQuantity(item.id, getQuantityInCart(item.id) - 1)}
                      className="bg-[#C5A46D] text-black w-8 h-8 rounded flex items-center justify-center hover:bg-[#B49B6D] transition-colors"
                    >
                      <BsDashLg />
                    </button>
                    <span className="text-[#C5A46D] font-medium">
                      {getQuantityInCart(item.id)}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item.id, getQuantityInCart(item.id) + 1)}
                      className="bg-[#C5A46D] text-black w-8 h-8 rounded flex items-center justify-center hover:bg-[#B49B6D] transition-colors"
                    >
                      <BsPlusLg />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-[#C5A46D] text-black py-2 rounded text-sm hover:bg-[#B49B6D] transition-colors"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionDetails;