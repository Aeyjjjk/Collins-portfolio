import { Card } from "@/components/ui/card";
import { Code2, Cpu, Wrench, Shield } from "lucide-react";

export const About = () => {
  const strengths = [
    {
      icon: Cpu,
      title: "Embedded Systems",
      description: "Expert in microcontroller programming, circuit design, and hardware integration",
    },
    {
      icon: Code2,
      title: "Software Development",
      description: "Proficient in Flutter, Java, and PLC programming for automation systems",
    },
    {
      icon: Wrench,
      title: "Automation & Robotics",
      description: "Specialized in PLC logic, HMI development, and robotic system design",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Experienced in network security, Kali Linux, and system hardening",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate engineer bridging the gap between hardware and software, 
              creating innovative solutions in automation, embedded systems, and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {strengths.map((strength, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-500 ease-out hover:-translate-y-1 border border-transparent hover:border-primary/30 bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <strength.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{strength.title}</h3>
                <p className="text-muted-foreground text-sm">{strength.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-card/50 border border-border/30">
            <div className="max-w-3xl mx-auto space-y-6 text-center">
              <h3 className="text-2xl font-bold">Professional Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                With extensive experience in automation, embedded systems, and app development, 
                I specialize in creating innovative engineering solutions. My expertise spans 
                from designing circuit boards and programming PLCs to developing mobile applications 
                and implementing cybersecurity measures. I'm passionate about leveraging technology 
                to solve real-world problems in instrumentation, robotics, and industrial automation.
              </p>
              <div className="pt-4">
                <div className="inline-flex items-center gap-8 text-sm font-semibold">
                  <span className="text-primary">Git</span>
                  <span className="text-accent">Android Studio</span>
                  <span className="text-primary">VS Code</span>
                  <span className="text-accent">Linux</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
