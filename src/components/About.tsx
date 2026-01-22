import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Cpu, Wrench, Shield, Layers, Microchip, Bot, Workflow, AppWindow,  ShieldCheck, X } from "lucide-react";

export const About = () => {
  const [activeStrength, setActiveStrength] = useState<any>(null);

  const strengths = [
    {
      icon: Microchip,
      title: "Embedded Systems",
      summary:
        "Developing microcontroller-based systems with a focus on stability, hardware integration, and real-world operation.",
      details: [
        "Microcontroller programming and peripheral configuration",
        "Sensor and module interfacing for data acquisition",
        "Basic circuit design, testing, and hardware troubleshooting",
      ],
    },
    {
      icon:  Bot,
      title: "Automation & Robotics",
      summary:
        "Building control and automation systems for industrial and robotic applications.",
      details: [
        "PLC control logic design and implementation",
        "HMI development for monitoring and operator interaction",
        "Robotic system integration and automated workflows",
      ],
    },
    {
      icon: AppWindow,
      title: "Application Development",
      summary:
        "Creating software applications.",
      details: [
      "Cross-platform mobile development using Flutter with clean UI architecture",
      "State management, API consumption, and real-time data handling",
      "Tight integration with embedded systems, IoT devices, and automation backends",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      summary:
        "Applying security awareness across systems, networks, and applications.",
      details: [
        "System and network security assessment basics",
        "Understanding common vulnerabilities and attack surfaces",
        "Hands-on use of Kali Linux tools for security testing",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-20">

         
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Core Expertise
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {strengths.map((strength, index) => (
                <Card
                  key={index}
                  onClick={() => setActiveStrength(strength)}
                  className="p-6 bg-card border border-border/40 cursor-pointer
                             hover:border-primary/40 hover:-translate-y-1
                             transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <strength.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold">
                    {strength.title}
                  </h4>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

     
      {activeStrength && (
        <div
          onClick={() => setActiveStrength(null)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm
                     flex items-center justify-center px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-lg w-full bg-card border border-border/40
                       rounded-2xl p-6 relative
                       animate-in fade-in zoom-in duration-200"
          >
          
            <button
              onClick={() => setActiveStrength(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <activeStrength.icon className="h-5 w-5 text-primary" />
              </div>
              <h4 className="text-xl font-bold">
                {activeStrength.title}
              </h4>
            </div>

            <p className="text-muted-foreground mb-4">
              {activeStrength.summary}
            </p>

            <ul className="space-y-2 text-sm">
              {activeStrength.details.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};
