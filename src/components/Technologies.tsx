import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const technologies = [
  "React", "TypeScript", "Node.js", "Python", "Next.js", "Flutter",
  "Kotlin","PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes",
  "TailwindCSS", "GraphQL", "React Native", "Vue.js", "Express", "Y mucho mas"
];

const Technologies = () => {
  return (
    <section id="tecnologias" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Tecnologías que Dominamos
          </h2>
          <p className="text-lg text-muted-foreground">
            Trabajamos con las herramientas más avanzadas del mercado
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-6 py-3 text-sm font-medium bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <Separator className="my-16 max-w-4xl mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">10+</div>
            <div className="text-muted-foreground">Años de Experiencia</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-secondary">50+</div>
            <div className="text-muted-foreground">Desarrolladores Expertos</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-accent">200+</div>
            <div className="text-muted-foreground">Clientes Satisfechos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
