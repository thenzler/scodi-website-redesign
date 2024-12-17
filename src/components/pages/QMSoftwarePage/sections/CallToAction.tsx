import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Book } from 'lucide-react';

export const CallToAction = () => (
  <section className="py-16 px-6 bg-teal-600 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">
        Bereit für effizientes Qualitätsmanagement?
      </h2>
      <p className="text-xl mb-8">
        Über 500 Unternehmen vertrauen seit 2002 auf SCODi 4P.
        Vereinbaren Sie jetzt eine persönliche Demo.
      </p>
      <div className="flex gap-4 justify-center">
        <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6">
          <span className="mr-2">Demo vereinbaren</span>
          <ArrowRight className="w-5 h-5" />
        </Button>
        <Button variant="outline" className="text-white border-white hover:bg-teal-700 px-8 py-6">
          <span className="mr-2">Dokumentation</span>
          <Book className="w-5 h-5" />
        </Button>
      </div>
    </div>
  </section>
);