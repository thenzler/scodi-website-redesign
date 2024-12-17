import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

export const Hero = () => (
  <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-teal-50 to-white">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="flex items-center gap-2 text-teal-600 mb-4">
            <Shield className="w-5 h-5" />
            <span className="font-medium">ISO 9001 / 14001 / 45001 / 27001 zertifiziert</span>
          </div>
          <h1 className="text-4xl font-bold mb-6 text-gray-900">
            SCODi 4P: Die Komplettlösung für Ihr Qualitätsmanagement
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Prozessmanagement, Dokumentenlenkung und Qualitätsmanagement in einer ausgereiften Gesamtlösung. Bewährt seit 2002.
          </p>
          <div className="flex gap-4">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-5">
              Demo anfordern
            </Button>
            <Button variant="outline" className="px-6 py-5">
              Produktdetails
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="/api/placeholder/600/400"
            alt="SCODi 4P QM Software Interface"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
);