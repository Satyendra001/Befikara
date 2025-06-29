// src/components/Navbar.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsCart3, BsCartFill } from 'react-icons/bs'; // Import cart icons
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      navigate(`/#${sectionId}`, { replace: true });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-[#C5A46D]">
            BEFIKARA
          </Link>
          <div className="flex items-center gap-6">
            {isHome ? (
              <>
                <button onClick={() => scrollToSection('home')} className="hover:text-[#C5A46D]">
                  Home
                </button>
                <button onClick={() => scrollToSection('collections')} className="hover:text-[#C5A46D]">
                  Collections
                </button>
                <button onClick={() => scrollToSection('products')} className="hover:text-[#C5A46D]">
                  Products
                </button>
              </>
            ) : (
              <>
                <Link to="/" className="hover:text-[#C5A46D]">Home</Link>
                <Link to="/#collections" className="hover:text-[#C5A46D]">Collections</Link>
                <Link to="/#products" className="hover:text-[#C5A46D]">Products</Link>
              </>
            )}
            <Link 
              to="/cart" 
              className="relative hover:text-[#C5A46D] flex items-center"
            >
              <BsCart3 className="text-2xl" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C5A46D] text-black text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
