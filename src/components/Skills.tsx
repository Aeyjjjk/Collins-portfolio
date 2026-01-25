import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export const Skills = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});
  const [triggerKey, setTriggerKey] = useState(0); // ✅ NEW
  const [activeCard, setActiveCard] = useState<number | null>(null);
const [shakeCard, setShakeCard] = useState<number | null>(null);
const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);



const skillCategories = [
  {
    category: "Automation & Control",
    color: "from-primary/20 to-primary/5",
    sound: "/sounds/automation.mp3",
    skills: [
      { name: "PLC Programming", level: 75 },
      { name: "HMI Development", level: 80 },
      // { name: "SCADA Systems", level: 85 },
    ],
  },
  {
    category: "Hardware Engineering",
    color: "from-secondary/20 to-secondary/5",
    sound: "/sounds/hardware.mp3",
    skills: [
      { name: "Embedded Systems", level: 80 },
      { name: "Microcontroller Programming", level: 70 },
      { name: "Sensors & Actuators Integration", level: 75 },
      { name: "P&ID Interpretation", level: 85 },
      { name: "Motors Control", level: 50 },
    ],
  },
  {
    category: "Robotics & IoT",
    color: "from-primary/20 to-secondary/10",
    sound: "/sounds/robotics.mp3",
    skills: [
      { name: "Autonomous Robot Development", level: 90 },
      { name: "Robotic Navigation & Obstacle Avoidance", level: 87 },
      { name: "Arduino-based IoT system", level: 80 },
      { name: "MQTT protocol Implementation", level: 50 },
      { name: "Remote-controlled robots via IoT", level: 70 },
      
    ],
  },
  {
    category: "Software Development",
    color: "from-secondary/20 to-primary/10",
    sound: "/sounds/software.mp3",
    skills: [
      { name: "Flutter Dart", level: 70 },
      { name: "Mobile/Web App Development", level: 75 },
    ],
  },
  {
    category: "Cybersecurity",
    color: "from-primary/15 to-secondary/15",
    sound: "/sounds/cyber.mp3",
    skills: [
      { name: "Kali Linux", level: 80 },
      { name: "Network Security", level: 78 },
      { name: "Penetration Testing", level: 75 },
    ],
  },
];


  // ✅ REUSABLE animation runner
  const runAnimation = (cardIndex?: number) => {
    setAnimatedValues(prev => {
      const filtered = { ...prev };
      if (cardIndex !== undefined) {
        Object.keys(filtered).forEach(key => {
          if (key.startsWith(`${cardIndex}-`)) {
            delete filtered[key];
          }
        });
      }
      return filtered;
    });
  
    skillCategories.forEach((category, catIndex) => {
      if (cardIndex !== undefined && catIndex !== cardIndex) return;
  
      category.skills.forEach((skill, skillIndex) => {
        const key = `${catIndex}-${skillIndex}`;
        let currentValue = 0;
        const increment = skill.level / 45;
        const delay = skillIndex * 120;
  
        setTimeout(() => {
          const interval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= skill.level) {
              currentValue = skill.level;
              clearInterval(interval);
            }
            setAnimatedValues(prev => ({
              ...prev,
              [key]: Math.round(currentValue),
            }));
          }, 18);
        }, delay);
      });
    });
  };
  
  const handleCardClick = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    setActiveCard(index);
    setShakeCard(index);
    runAnimation(index);
  
    playCardSound(skillCategories[index].sound);
  
    // Remove shake
    setTimeout(() => setShakeCard(null), 500);
  
    // Ripple
    const card = e.currentTarget;
    const ripple = document.createElement("span");
    const size = Math.max(card.clientWidth, card.clientHeight);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.nativeEvent.offsetX - size / 2}px`;
    ripple.style.top = `${e.nativeEvent.offsetY - size / 2}px`;
    ripple.className = "ripple";
  
    card.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };
  
  const playCardSound = (soundUrl: string) => {
    // Stop previous audio if any
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  
    const audio = new Audio(soundUrl);
    audio.volume = 0.35;
    audio.play().catch(() => {});
  
    setCurrentAudio(audio);
  };
  
  
  useEffect(() => {
    return () => {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    };
  }, [currentAudio]);
  

  // 🔁 Run on scroll OR manual trigger
  useEffect(() => {
    if (isVisible) {
      runAnimation();
    }
  }, [isVisible, triggerKey]); // ✅ triggerKey added

  return (
    <section id="skills" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">
              What I Know
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My Skills & <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical skills across engineering, automation, hardware, and software development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <Card
              key={categoryIndex}
              onClick={(e) => handleCardClick(e, categoryIndex)}
              className={`
                relative cursor-pointer overflow-hidden
                p-6 transition-all duration-500 ease-out
                hover:-translate-y-1 hover:shadow-2xl
                ${shakeCard === categoryIndex ? "animate-shake" : ""}
              `}
            >
            
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-50 group-hover:opacity-70 transition-opacity`}
                />
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
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <Badge className="text-xs font-bold">
                              {currentValue}%
                            </Badge>
                          </div>

                          <div className="w-full bg-muted/50 rounded-full h-2.5 overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-300 relative"
                              style={{
                                width: `${currentValue}%`,
                                background: `linear-gradient(90deg,
                                  hsl(${180 + progress * 1.8} 70% 50%),
                                  hsl(${200 + progress * 1.6} 80% 60%))`,
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
