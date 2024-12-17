import React from 'react';

export const FeatureNav = ({ activeTab, setActiveTab }) => (
  <section className="border-y bg-white sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex overflow-x-auto space-x-8 py-4">
        {[
          { id: 'prozesse', label: 'Prozessmanagement' },
          { id: 'dokumente', label: 'Dokumentenlenkung' },
          { id: 'normen', label: 'Normerfüllung' },
          { id: 'integration', label: 'Integration' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap px-4 py-2 font-medium rounded-md transition-colors
              ${activeTab === tab.id 
                ? 'bg-teal-50 text-teal-600' 
                : 'text-gray-600 hover:text-teal-600'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  </section>
);