import { Card } from "@/components/ui/card";
import { Code2, Cpu, Wrench, Shield, Layers, Workflow } from "lucide-react";

export const About = () => {
  const strengths = [
    {
      icon: Cpu,
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
      icon: Wrench,
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
      icon: Code2,
      title: "Application Development",
      summary:
        "Creating software applications that connect users with devices and systems.",
      details: [
        "Flutter-based mobile application development",
        "Java application development and system logic",
        "Integration with embedded devices, IoT platforms, and backends",
      ],
    },
    {
      icon: Shield,
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
  

  const tools = [
    "Flutter",
    "Java",
    "PLC Programming",
    "HMI Design",
    "Arduino",
    "ESP8266 / ESP32",
    "Raspberry Pi",
    "Linux",
    "Kali Linux",
    "Sensors & Modules",
  ];

  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* ===== Intro ===== */}
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I work at the intersection of hardware and software, building systems that combine
              embedded electronics, automation, and application-level control for real-world use.
            </p>
          </div>

          {/* ===== Core Expertise ===== */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Core Expertise
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {strengths.map((strength, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border border-border/40 hover:border-primary/40 hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <strength.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    {strength.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {strength.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* ===== How I Work ===== */}
          <Card className="p-10 bg-gradient-to-br from-card to-card/60 border border-border/40">
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Workflow className="h-6 w-6 text-primary" />
                  How I Work
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  My approach focuses on understanding system requirements first, then translating
                  them into practical hardware designs, control logic, and software interfaces.
                  I value reliability, clarity, and maintainability in every system I build.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Layers className="h-6 w-6 text-primary" />
                  System Thinking
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I treat projects as complete systems — from sensors and controllers to user
                  interfaces and security considerations — ensuring all components work together
                  efficiently.
                </p>
              </div>

            </div>
          </Card>

          {/* ===== Tools & Technologies ===== */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm rounded-full border border-border/50 bg-card hover:border-primary/40 transition"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* ===== Professional Background ===== */}
          <Card className="p-10 border border-border/40 bg-card">
            <div className="max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold text-center">
                Professional Background
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a multidisciplinary engineer with a background in embedded systems, automation,
                and hardware engineering. My experience includes working with PLC and HMI systems,
                industrial automation, IoT-based solutions, and robotic platforms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Alongside hardware development, I build mobile applications using Flutter and Java,
                often integrating them with embedded devices and backend services. I also maintain
                practical exposure to cybersecurity concepts, using Kali Linux for security testing
                and system analysis.
              </p>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};
