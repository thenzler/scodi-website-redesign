import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, LineChart, Settings2, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Prozessmanagement",
    description: "Visualisieren und optimieren Sie Ihre Geschäftsprozesse mit unserer intuitiven Prozessmanagement-Lösung.",
    icon: LineChart,
  },
  {
    title: "Qualitätsmanagement",
    description: "Erfüllen Sie Qualitätsstandards und verbessern Sie kontinuierlich Ihre Prozesse mit unserem QM-System.",
    icon: CheckCircle,
  },
  {
    title: "Dokumentenmanagement",
    description: "Verwalten Sie alle relevanten Dokumente zentral und sicher mit Versionierung und Zugriffskontrollen.",
    icon: Calendar,
  },
  {
    title: "Benutzerfreundlich",
    description: "Intuitive Benutzeroberfläche für effiziente Navigation und schnelle Einarbeitung.",
    icon: Users,
  },
  {
    title: "Sicherheit",
    description: "Höchste Sicherheitsstandards zum Schutz Ihrer sensiblen Unternehmensdaten.",
    icon: ShieldCheck,
  },
  {
    title: "Anpassbar",
    description: "Flexibel konfigurierbar und an Ihre spezifischen Anforderungen anpassbar.",
    icon: Settings2,
  },
];

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Qualitätsmanagement neu gedacht
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                SCODi 4P vereint Qualitäts-, Prozess- und Dokumentenmanagement in einer
                modernen, effizienten Gesamtlösung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/demo">Kostenlose Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Kontakt aufnehmen</Link>
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="/api/placeholder/600/400"
                    alt="SCODi 4P Dashboard"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-50 rounded-full filter blur-3xl opacity-70" />
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-50 rounded-full filter blur-3xl opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Alle Funktionen für Ihr Qualitätsmanagement
            </h2>
            <p className="text-xl text-gray-600">
              Entdecken Sie die vielfältigen Möglichkeiten von SCODi 4P
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-100 hover:border-blue-100 transition-colors duration-200"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Starten Sie jetzt mit SCODi 4P und optimieren Sie Ihr Qualitätsmanagement
          </p>
          <Button size="lg" asChild>
            <Link href="/demo">Jetzt Demo anfordern</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}