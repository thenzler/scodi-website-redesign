import React from 'react';
import { CheckCircle, Layout } from 'lucide-react';

export const ProcessTab = () => (
  <div className="py-12">
    <h2 className="text-2xl font-semibold mb-8">Prozessmanagement</h2>
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-xl font-semibold mb-4">BPMN 2.0 Prozessmodellierung</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
            <span>Prozesse nach BPMN 2.0 Standard modellieren</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
            <span>Automatische Versionierung aller Änderungen</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
            <span>Direkte Verknüpfung mit Dokumenten und Risiken</span>
          </li>
        </ul>
      </div>
      <div>
        <img
          src="/api/placeholder/500/300"
          alt="BPMN Prozessmodellierung"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
);