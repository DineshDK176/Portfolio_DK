import { Code, Gamepad2, Box, Film, Palette } from "lucide-react";

const skills = [
  {
    name: "Blender",
    level: 90,
    icon: Box,
    description: "3D Modeling"
  },
  {
    name: "Godot",
    level: 80,
    icon: Gamepad2,
    description: "Game Development"
  },
  {
    name: "Java, C++ & Python",
    level: 85,
    icon: Code,
    description: "Programming"
  },
  {
    name: "Video Editing",
    level: 75,
    icon: Film,
    description: "Content Creation"
  },
  {
    name: "Pixel Art",
    level: 40,
    icon: Palette,
    description: "Art Design"
  },
  {
    name: "Animation",
    level: 40,
    icon: Film,
    description: "Motion Graphics"
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          My <span className="text-gradient">Skills</span>
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>

                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
