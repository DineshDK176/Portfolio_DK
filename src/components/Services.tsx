import { Video, Box, Code2, Film, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing for YouTube and promotional content. Creating engaging visual stories with smooth transitions and effects.",
  },
  {
    icon: Box,
    title: "3D Design",
    description: "Custom 3D modeling, product visualization, and animations using Blender. Bringing concepts to life with stunning detail.",
  },
  {
    icon: Code2,
    title: "Programming Teaching",
    description: "One-on-one or online programming lessons in Java, C, and C++. Making complex concepts easy to understand.",
  },
  {
    icon: Film,
    title: "Animating",
    description: "Creating smooth and expressive animations for games, videos, and presentations.",
  },
  {
    icon: Palette,
    title: "Pixel Art",
    description: "Designing retro-style pixel art assets for games and digital media.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          My <span className="text-gradient">Services</span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="glass-card p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-6 group-hover:glow-effect transition-all">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
