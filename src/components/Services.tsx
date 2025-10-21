import { Code, Smartphone, Cloud, Database, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas y escalables con las últimas tecnologías.",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones nativas y multiplataforma para iOS y Android.",
  },
  {
    icon: Cloud,
    title: "Soluciones Cloud",
    description: "Infraestructura en la nube segura, escalable y optimizada.",
  },
  {
    icon: Database,
    title: "Bases de Datos",
    description: "Diseño e implementación de bases de datos robustas y eficientes.",
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description: "Protección de datos y sistemas con los más altos estándares.",
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Optimización de procesos mediante automatización inteligente.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluciones integrales de tecnología diseñadas para impulsar tu negocio
          </p>
        </div>

        <Separator className="mb-16 max-w-3xl mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
            >
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary p-2.5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-full w-full text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
