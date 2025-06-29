// src/components/Products.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { BsPlusLg, BsDashLg } from 'react-icons/bs'; // Import icons
import aot from "../assets/aot.png"

const products = [
  {
    id: 1,
    name: "Urban Tee",
    description: "Premium quality wear",
    price: 1999,
    image: aot
  },
  {
    id: 2,
    name: "Street Hoodie",
    description: "Premium quality wear",
    price: 1999,
    image: aot
  },
  {
    id: 3,
    name: "Canvas Jacket",
    description: "Premium quality wear",
    price: 1999,
    image: aot
  },
  {
    id: 4,
    name: "Canvas Jacket",
    description: "Premium quality wear",
    price: 1999,
    image: aot
  },
  {
    id: 5,
    name: "Canvas Jacket",
    description: "Premium quality wear",
    price: 1999,
    image: aot
  },
  {
    id: 6,
    name: "Canvas Jacket",
    description: "Premium quality wear",
    price: 1999,
    image: aot
  },
  {
    id: 7,
    name: "Canvas Jacket",
    description: "Premium quality wear",
    price: 1999,
    image: aot
  },
  {
    id: 8,
    name: "Canvas Jacket",
    description: "Premium quality wear",
    price: 1999,
    image: aot
  }
];

const Products = () => {
  const { cartItems, addToCart, updateQuantity } = useContext(CartContext);
  const [selectedImage, setSelectedImage] = useState(null);

  const getQuantityInCart = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <section id="products" className="min-h-screen py-20 px-6 bg-[#111]">
      <h2 className="text-3xl font-bold text-center text-[#C5A46D] mb-12">Popular Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => {
          const quantityInCart = getQuantityInCart(product.id);
          return (
            <div key={product.id} className="bg-white/5 rounded p-4 text-center">
              <div 
                className="h-48 w-full overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(product.image)}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-medium mb-1">{product.name}</h3>
              <p className="text-sm text-white/70 mb-2">{product.description}</p>
              <span className="block text-[#C5A46D] font-semibold mb-4">₹{product.price}</span>
              <div className="flex justify-center gap-2">
                {quantityInCart > 0 ? (
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => updateQuantity(product.id, quantityInCart - 1)}
                      className="bg-[#C5A46D] text-black w-8 h-8 rounded flex items-center justify-center hover:bg-[#B49B6D] hover:cursor-pointer transition-colors"
                    >
                      <BsDashLg />
                    </button>
                    <span className="text-[#C5A46D] font-medium">{quantityInCart}</span>
                    <button 
                      onClick={() => updateQuantity(product.id, quantityInCart + 1)}
                      className="bg-[#C5A46D] text-black w-8 h-8 rounded flex items-center justify-center hover:bg-[#B49B6D] hover:cursor-pointer transition-colors"
                    >
                      <BsPlusLg />
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-[#C5A46D] text-black px-4 py-2 rounded hover:bg-[#B49B6D] hover:cursor-pointer transition-colors"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl h-full w-full">
            <img 
              src={selectedImage} 
              alt="Enlarged product"
              className="w-full h-full object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white hover:text-[#C5A46D] hover:cursor-pointer text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
