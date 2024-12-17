import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Layout, FileText, Search } from 'lucide-react';

export const Features = () => (
  <section className="py-16 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {[
          {
            icon: <Layout className="w-8 h-8 text-teal-600" />,
            title: "Prozesslandschaften",
            description: "Übersichtliche Darstellung aller Geschäftsprozesse mit BPMN 2.0"
          },
          {
            icon: <FileText className="w-8 h-8 text-teal-600" />,
            title: "Dokumentenmanagement",
            description: "Normgerechte Lenkung aller qualitätsrelevanten Dokumente"
          },
          {
            icon: <Search className="w-8 h-8 text-teal-600" />,
            title: "Volltextsuche",
            description: "Schneller Zugriff auf alle Inhalte über die integrierte Suche"
          }
        ].map((feature) => (
          <Card key={feature.title} className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);