import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export const Skills = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  const skillCategories = [
    {
      category: "Automation & Control",
      color: "from-primary/20 to-primary/5",
      skills: [
        { name: "PLC Programming", level: 95 },
        { name: "HMI Development", level: 90 },
        { name: "SCADA Systems", level: 85 },
      ],
    },
    {
      category: "Hardware Engineering",
      color: "from-secondary/20 to-secondary/5",
      skills: [
        { name: "Embedded Systems", level: 92 },
        { name: "Circuit Design", level: 88 },
        { name: "PCB Design", level: 85 },
      ],
    },
    {
      category: "Robotics & IoT",
      color: "from-primary/20 to-secondary/10",
      skills: [
        { name: "IoT Systems", level: 90 },
        { name: "Robotics", level: 87 },
        { name: "Drone Technology", level: 83 },
      ],
    },
    {
      category: "Software Development",
      color: "from-secondary/20 to-primary/10",
      skills: [
        { name: "Flutter Development", level: 88 },
        { name: "Java Programming", level: 85 },
        { name: "Mobile App Development", level: 87 },
      ],
    },
    {
      category: "Cybersecurity",
      color: "from-primary/15 to-secondary/15",
      skills: [
        { name: "Kali Linux", level: 80 },
        { name: "Network Security", level: 78 },
        { name: "Penetration Testing", level: 75 },
      ],
    },
  ];

  useEffect(() => {
    if (isVisible) {
      skillCategories.forEach((category, catIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          const key = `${catIndex}-${skillIndex}`;
          let currentValue = 0;
          const increment = skill.level / 50;
          const delay = (catIndex * 3 + skillIndex) * 100;

          setTimeout(() => {
            const interval = setInterval(() => {
              currentValue += increment;
              if (currentValue >= skill.level) {
                currentValue = skill.level;
                clearInterval(interval);
              }
              setAnimatedValues((prev) => ({ ...prev, [key]: Math.round(currentValue) }));
            }, 20);
          }, delay);
        });
      });
    }
  }, [isVisible]);

  return (
    <section id="skills" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Technical Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across multiple engineering and technology domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="p-6 hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1 border border-transparent hover:border-primary/30 bg-card group overflow-hidden relative"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-6 text-gradient">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const key = `${categoryIndex}-${skillIndex}`;
                      const currentValue = animatedValues[key] || 0;
                      const progress = (currentValue / skill.level) * 100;
                      
                      return (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                            <Badge 
                              className="text-xs font-bold transition-all duration-300"
                              style={{
                                backgroundColor: `hsl(${180 + (progress * 1.8)} 70% ${40 + (progress * 0.2)}%)`,
                                color: 'hsl(0 0% 100%)',
                              }}
                            >
                              {currentValue}%
                            </Badge>
                          </div>
                          <div className="w-full bg-muted/50 rounded-full h-2.5 overflow-hidden shadow-inner">
                            <div
                              className="h-full rounded-full transition-all duration-300 shadow-lg relative overflow-hidden"
                              style={{
                                width: `${currentValue}%`,
                                background: `linear-gradient(90deg, 
                                  hsl(${180 + (progress * 1.8)} 70% 50%), 
                                  hsl(${200 + (progress * 1.6)} 80% 60%))`,
                                boxShadow: `0 0 10px hsl(${180 + (progress * 1.8)} 70% 50% / 0.5)`,
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
