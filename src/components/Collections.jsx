// src/components/Collections.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { collections } from '../data/collections';

const Collections = () => {
  return (
    <section id="collections" className="min-h-screen py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-[#C5A46D] mb-12">Featured Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map(collection => (
          <Link 
            key={collection.id} 
            to={`/collection/${collection.slug}`}
            className="bg-white/5 p-6 rounded-lg text-center transform hover:scale-105 transition-all duration-300"
          >
            <div className="h-40 bg-gray-700 rounded mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
            <p className="text-white/70 mb-4">{collection.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Collections;
