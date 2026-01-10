import { Button } from "@/components/ui/button";
import { ArrowDown, Download, MessageCircle, Linkedin } from "lucide-react";
import { heroData } from "@/data/portfolio-data";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Profile Image with Animated Background */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              {/* Animated rotating rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-44 h-44 md:w-56 md:h-56 rounded-full border-2 border-primary/30 animate-[spin_8s_linear_infinite]"></div>
                <div className="absolute w-52 h-52 md:w-64 md:h-64 rounded-full border border-dashed border-primary/20 animate-[spin_12s_linear_infinite_reverse]"></div>
                <div className="absolute w-60 h-60 md:w-72 md:h-72 rounded-full border border-dotted border-secondary/20 animate-[spin_15s_linear_infinite]"></div>
              </div>
              
              {/* Pulsing glow effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full bg-primary/20 blur-xl animate-pulse"></div>
                <div className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full bg-secondary/10 blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              </div>

              {/* Profile image container */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-xl z-10">
                <img 
                  src={heroData.profileImage}
                  alt={heroData.name}
                  className="w-full h-full object-cover bg-muted"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none z-10"></div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-4 border-background z-20"></div>
            </div>
          </div>

          <div className="inline-block">
            <span className="text-sm font-semibold tracking-wider text-primary uppercase mb-4 block">
              {heroData.title}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-gradient">{heroData.name}</span>
          </h1>

          <div className="space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {heroData.skills.join(" | ")}
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
              {heroData.tagline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="rounded-full gradient-tech text-white font-semibold px-8 glow-primary"
            >
              Hire Me
            </Button>
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 font-semibold px-8"
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full border-2 font-semibold px-8"
              asChild
            >
              <a href={heroData.cvLink} download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:text-primary"
              asChild
            >
              <a href={heroData.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:text-primary"
              asChild
            >
              <a href={heroData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="pt-16 animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};
