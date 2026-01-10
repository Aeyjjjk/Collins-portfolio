import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Cpu, Zap, Smartphone, Shield, Wrench, Cog, Box, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Services = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const services = [
    {
      icon: Cpu,
      title: "Embedded Systems Development",
      description: "Custom microcontroller solutions, firmware development, and IoT device programming",
      color: "text-primary",
    },
    {
      icon: Box,
      title: "PCB Design & Hardware",
      description: "Circuit design, PCB layout, and hardware prototyping for industrial applications",
      color: "text-accent",
    },
    {
      icon: Cog,
      title: "PLC & HMI Programming",
      description: "Industrial automation systems, SCADA integration, and process control solutions",
      color: "text-primary",
    },
    {
      icon: Zap,
      title: "Robotics & Automation",
      description: "Robotic system design, drone development, and automated control systems",
      color: "text-accent",
    },
    {
      icon: Code,
      title: "IoT Systems Integration",
      description: "Smart device connectivity, sensor networks, and cloud-based monitoring systems",
      color: "text-primary",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Flutter-based cross-platform mobile applications with modern UI/UX",
      color: "text-accent",
    },
    {
      icon: Code,
      title: "Java Application Development",
      description: "Enterprise-grade Java applications and backend systems",
      color: "text-primary",
    },
    {
      icon: Shield,
      title: "Safety Systems & Documentation",
      description: "QHSE documentation, safety protocols, and compliance systems",
      color: "text-accent",
    },
    {
      icon: Wrench,
      title: "Instrumentation Services",
      description: "Industrial instrumentation, calibration, and measurement systems",
      color: "text-primary",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Comprehensive engineering and development solutions tailored to your needs
            </p>
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="outline"
              className="rounded-full border-2 border-primary/50 hover:bg-primary/10 font-semibold px-6 gap-2"
            >
              {isExpanded ? "Hide Services" : "View Services"}
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Card
                          className="p-6 hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 border border-transparent hover:border-primary/30 bg-card group h-full"
                        >
                          <div className={`w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${service.color}`}>
                            <Icon className="h-7 w-7" />
                          </div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
