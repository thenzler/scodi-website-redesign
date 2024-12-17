import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ProcessTab, DocumentTab, NormTab, IntegrationTab } from './tabs';
import { Hero, FeatureNav, Features, CallToAction } from './sections';
import { CheckCircle, ArrowRight, Shield, Book } from 'lucide-react';

export const QMSoftwarePage = () => {
  const [activeTab, setActiveTab] = useState('prozesse');

  const tabs = {
    prozesse: <ProcessTab />,
    dokumente: <DocumentTab />,
    normen: <NormTab />,
    integration: <IntegrationTab />
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <FeatureNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="max-w-6xl mx-auto px-6">
        {tabs[activeTab]}
      </div>
      <Features />
      <CallToAction />
    </div>
  );
};
