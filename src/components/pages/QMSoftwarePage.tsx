import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, Shield, Users, Settings, Database,
  CheckCircle, ChevronDown, ChevronUp,
  Star, Hospital, Factory, Globe
} from "lucide-react";

const colors = {
  turquoise: "#40E0D0",
  darkTurquoise: "#35BEB0",
  lightTurquoise: "#E6FAF8",
};

// Feature Item Component
const FeatureItem = ({ icon: Icon, title, description }) => (
  <Card className="p-6 hover:shadow-lg transition-all duration-300">
    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
      style={{ backgroundColor: colors.lightTurquoise }}>
      <Icon className="w-6 h-6" style={{ color: colors.turquoise }} />
    </div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Card>
);

// Expandable Section Component
const DetailSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <Card className={`mb-4 overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between"
      >
        <h3 className="text-xl font-semibold flex items-center gap-3">
          <span className="w-1 h-6 rounded transition-all duration-300"
            style={{ 
              backgroundColor: colors.turquoise,
              width: isOpen ? '3px' : '3px'
            }}
          />
          {title}
        </h3>
        <div className="w-10 h-10 rounded-full flex items-center justify-center">
          {isOpen ? (
            <ChevronUp className="w-5 h-5" style={{ color: colors.turquoise }} />
          ) : (
            <ChevronDown className="w-5 h-5" style={{ color: colors.turquoise }} />
          )}
        </div>
      </button>
      <div className={`transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-6 pb-6">
          {children}
        </div>
      </div>
    </Card>
  );
};

export function QMSoftwarePage() {
  const [activeTab, setActiveTab] = useState("overview");

  const mainFeatures = [
    {
      icon: Shield,
      title: "ISO 9001 konform",
      description: "Standardprodukt für Zertifizierungen nach ISO 9001 / 14001 / 45001 / 27001"
    },
    {
      icon: Users,
      title: "Benutzerfreundlich",
      description: "QMS für den ganzen Betrieb per Browser verfügbar"
    },
    {
      icon: Settings,
      title: "Anpassbar",
      description: "Flexibel konfigurierbar an Ihre spezifischen Anforderungen"
    }
  ];

  const editions = [
    {
      title: "Professional Edition",
      description: "Für mittelständische Unternehmen",
      features: [
        "Prozessmanagement Basic",
        "Dokumentenmanagement",
        "Audit-Management",
        "Maßnahmenmanagement",
        "Dashboard & Reporting Basic",
        "Bis zu 20 Benutzer"
      ]
    },
    {
      title: "Enterprise Edition",
      description: "Maximale Flexibilität für Großunternehmen",
      features: [
        "Alle Funktionen der Professional Edition",
        "Multi-Site Management",
        "Unbegrenzte Benutzer",
        "Custom Workflows",
        "SSO-Integration",
        "Enterprise API",
        "Dedizierter Support"
      ]
    }
  ];

  const industries = [
    {
      icon: Hospital,
      title: "Gesundheitswesen",
      description: "Speziell angepasst für Krankenhäuser und Kliniken",
      features: [
        "Erfüllung regulatorischer Anforderungen",
        "Integration mit Krankenhaus-IT",
        "Spezielle Audit-Funktionen",
        "Hygiene-Management"
      ]
    },
    {
      icon: Factory,
      title: "Industrie & Fertigung",
      description: "Optimiert für Produktionsunternehmen",
      features: [
        "Produktionsprozess-Integration",
        "Qualitätssicherung in der Fertigung",
        "Lieferanten-Management",
        "Prüfmittel-Verwaltung"
      ]
    },
    {
      icon: Shield,
      title: "Pharma & Medizintechnik",
      description: "Validiert für regulierte Umgebungen",
      features: [
        "GMP-Konformität",
        "Elektronische Signaturen",
        "Audit Trail",
        "Validierungsdokumentation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 opacity-20"
            style={{ backgroundColor: colors.turquoise }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: colors.lightTurquoise, color: colors.turquoise }}>
                SCODi 4P QM Software
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Professionelles
                <span className="block mt-2" style={{ color: colors.turquoise }}>
                  Qualitätsmanagement
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Die QM Software SCODi 4P vereint Qualitätsmanagement, Prozessmanagement und 
                Dokumentenmanagement zu einer effektiven und effizienten Gesamtlösung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-white" style={{ backgroundColor: colors.turquoise }}>
                  Live-Demo vereinbaren
                </Button>
                <Button variant="outline" size="lg" className="border-2"
                  style={{ borderColor: colors.turquoise, color: colors.turquoise }}>
                  Feature Tour
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-2">
                <img
                  src="/api/placeholder/800/500"
                  alt="SCODi 4P Dashboard"
                  className="rounded-xl w-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl -z-10 transform rotate-2"
                style={{ backgroundColor: colors.lightTurquoise }} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-4 bg-gray-100 rounded-lg p-1">
              {['overview', 'features', 'editions', 'industries'].map((tab) => (
                <TabsTrigger 
                  key={tab}
                  value={tab}
                  className="capitalize"
                  style={{ color: activeTab === tab ? colors.turquoise : undefined }}
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-8">
                {mainFeatures.map((feature, index) => (
                  <FeatureItem key={index} {...feature} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: FileText,
                    title: "Dokumentenmanagement",
                    features: [
                      "Zentrale Dokumentenverwaltung",
                      "Versionierung & Historie",
                      "Volltextsuche",
                      "Microsoft Office Integration",
                      "Freigabe-Workflows"
                    ]
                  },
                  {
                    icon: Settings,
                    title: "Prozessmanagement",
                    features: [
                      "BPMN 2.0 Modellierung",
                      "Prozesslandkarten",
                      "Prozessanalyse",
                      "KPI-Monitoring",
                      "Workflow-Automatisierung"
                    ]
                  },
                  {
                    icon: Shield,
                    title: "Qualitätsmanagement",
                    features: [
                      "ISO 9001 konform",
                      "Audit-Management",
                      "Maßnahmenmanagement",
                      "Risk Management",
                      "Compliance-Tracking"
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: colors.lightTurquoise }}
                      >
                        <section.icon 
                          className="w-6 h-6"
                          style={{ color: colors.turquoise }}
                        />
                      </div>
                      <h3 className="font-semibold text-lg">{section.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {section.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle 
                            className="w-4 h-4"
                            style={{ color: colors.turquoise }}
                          />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="editions" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                {editions.map((edition, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-2">{edition.title}</h3>
                    <p className="text-gray-600 text-sm mb-6">{edition.description}</p>
                    <ul className="space-y-3 mb-6">
                      {edition.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 mt-0.5" style={{ color: colors.turquoise }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full text-white" style={{ backgroundColor: colors.turquoise }}>
                      Mehr erfahren
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="industries" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-8">
                {industries.map((industry, index) => (
                  <Card key={index} className="p-6">
                    <industry.icon className="w-8 h-8 mb-4" style={{ color: colors.turquoise }} />
                    <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{industry.description}</p>
                    <ul className="space-y-2">
                      {industry.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 mt-0.5" style={{ color: colors.turquoise }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}