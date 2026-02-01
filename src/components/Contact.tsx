import { Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => {

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/itz_dinesh177/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dinesh-k-7050a2290/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/DineshDK176", label: "GitHub" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you!
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-xl p-6 sm:p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <a 
                href="tel:+919629997186"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-sm sm:text-base">+91 962997186</p>
                </div>
              </a>

              <a 
                href="mailto:dineshkarthikeyan176@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm sm:text-base">dineshkarthikeyan176@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="text-lg font-semibold mb-4 text-center">Follow Me</h4>
              <div className="flex gap-4 justify-center">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center hover:scale-110 transition-transform glow-effect"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
