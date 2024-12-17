import React from 'react';
import { motion } from 'framer-motion';

export const Features = () => (
  <div className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Key Features</h2>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {['Document Management', 'Process Management', 'Quality Management', 'Analytics'].map((feature) => (
          <motion.div
            key={feature}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="h-12 w-12 rounded-md bg-primary-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">{feature}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);