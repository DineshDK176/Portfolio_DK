import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import sdawImage from "@/assets/ai-interface.png";
import carImage from "@/assets/Car_design.jpeg";
import eggImage from "@/assets/Logo_HB.png";
import pottiImage from "@/assets/Potti Game.png";

const projects = [
  {
    title: "SDAW - Desktop Assistant",
    description: "A basic AI assistant application for Windows, created to help users automate simple tasks and improve productivity.",
    image: sdawImage,
    link: "https://github.com/DineshDK176/SDAW",
    tags: ["AI", "Windows", "Desktop App"],
  },
  {
    title: "3D Car Design",
    description: "A detailed 3D model of a modern sports car designed using Blender with realistic materials and lighting.",
    image: carImage,
    link: "https://www.linkedin.com/posts/dinesh-k-7050a2290_blender-3dabrmodel-carabrmodelling-activity-7293227890698006528-Aes7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfxNJkB5NmWGF7FW2E4CGnnDbOqngCxh5I",
    tags: ["Blender", "3D Modeling", "Visualization"],
  },
  {
    title: "Half Boil Animation",
    description: "A creative animation project made in Blender for a YouTube video, showcasing playful storytelling through 3D.",
    image: eggImage,
    link: "https://www.linkedin.com/posts/dinesh-k-7050a2290_blender-3d-3dmodeling-activity-7380505980708716544-l6tC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfxNJkB5NmWGF7FW2E4CGnnDbOqngCxh5I",
    tags: ["Blender", "Animation", "YouTube"],
  },
  {
    title: "Potti Game Store",
    description: "A comprehensive game store platform providing a seamless experience for browsing and purchasing games.",
    image: pottiImage,
    link: "https://github.com/DineshDK176/Potti-Games",
    tags: ["React", "Game Store", "Web App"],
  },
];

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);
  const displayedProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          My <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A collection of my creative works showcasing 3D design, development, and animation skills.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card
                className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-300 h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowMore(!showMore)}
              className="group gap-2"
            >
              {showMore ? (
                <>
                  Show Less <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  Show More <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
