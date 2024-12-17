import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
  >
    <div className="h-40 bg-primary-50 rounded-lg mb-4" />
    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-500">{description}</p>
    <button className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
      Learn More
    </button>
  </motion.div>
);

export const Products = () => (
  <div className="bg-gray-50 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Our Products</h2>
        <p className="mt-4 text-gray-500">Choose the solution that fits your needs</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ProductCard 
          title="SCODi 4P"
          description="Comprehensive quality and process management solution for your organization."
        />
        <ProductCard
          title="SCODi SPITEX"
          description="Specialized software for healthcare quality management and documentation."
        />
      </div>
    </div>
  </div>
);