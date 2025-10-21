import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Smartphone, Pill, Heart } from "lucide-react";

const projects = [
  {
    icon: Smartphone,
    title: "ComiShop",
    description: "Aplicación móvil hecha en Kotlin para la administración de productos de una empresa, realización de ventas y cálculo de comisiones del vendedor.",
    technologies: ["Kotlin", "Android", "Firebase", "Material Design"],
    category: "E-commerce"
  },
  {
    icon: Pill,
    title: "RecuerdApp",
    description: "Aplicación hecha en Flutter para recordar con notificaciones y alarmas los remedios que debe tomar la persona.",
    technologies: ["Flutter", "Dart", "Firebase", "Local Notifications"],
    category: "Salud"
  },
  {
    icon: Heart,
    title: "VetFlow",
    description: "Aplicación donde puedes acceder a servicios veterinarios para tu mascota.",
    technologies: ["React ionic", "Node.js", "Postgres", "NestJs"],
    category: "Servicios"
  }
];

const Portfolio = () => {
  return (
    <section id="portafolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Nuestro Portafolio
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubre algunos de nuestros proyectos más destacados
          </p>
        </div>

        <Separator className="mb-16 max-w-3xl mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary p-2.5 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="h-full w-full text-primary-foreground" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs bg-background/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;