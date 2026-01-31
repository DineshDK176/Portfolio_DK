import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I am a <span className="text-primary font-semibold">3D Blender designer</span> currently 
                pursuing my 3rd year of <span className="text-accent font-semibold">B.E. in Electrical and Electronics Engineering</span> at 
                Tamilnadu College of Engineering. I'm deeply passionate about 3D design, programming, 
                and game development.
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                My journey in technology is driven by creativity and a love for building things that 
                people enjoy. Whether it's crafting immersive 3D models, developing engaging games, 
                or writing clean code, I strive to blend artistry with technical excellence.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 glow-effect">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Education</h3>
                  <p className="text-base sm:text-lg font-medium text-foreground">B.E. Electrical and Electronics Engineering</p>
                  <p className="text-muted-foreground">Tamilnadu College of Engineering</p>
                  <p className="text-sm text-muted-foreground mt-1">Graduation: 2027</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
