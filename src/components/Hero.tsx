import profileImage from "@/assets/profile-hero.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background py-20 pt-40">
      <div className="container mx-auto px-4 z-10">
        {/* Desktop and Mobile Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 items-center bg-card/40 rounded-3xl overflow-hidden border border-white/5">
            {/* Left side - Profile image */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
              <img 
                src={profileImage} 
                alt="Dinesh (DK)" 
                className="w-full h-full object-contain object-center"
              />
            </div>

            {/* Right side - Text content */}
            <div className="bg-[#4a3a3a] p-8 md:p-10 lg:p-12 h-full flex flex-col justify-center text-center">
              <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
                Dinesh K (DK)
              </h1>
              
              <div className="space-y-3">
                <p className="text-white/90 text-base sm:text-lg md:text-base lg:text-lg font-medium">
                  "Video Editor" | "Game designer" | "Programmer"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
