import React from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="text-xl font-bold text-primary-600">SCODi</div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="#" className="text-gray-700 hover:text-primary-600">Products</a>
            <a href="#" className="text-gray-700 hover:text-primary-600">Features</a>
            <a href="#" className="text-gray-700 hover:text-primary-600">Support</a>
            <a href="#" className="text-gray-700 hover:text-primary-600">About</a>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};