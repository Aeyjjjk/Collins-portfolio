import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Github } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Project data (in real app, this would come from API or context)
  const projects: Record<string, any> = {
    "gas-robot": {
      title: "Autonomous Gas Detector and Obstacle Avoidance Robot",
      year: "2024",
      role: "Hardware & Embedded Systems Developer",
      description: "An autonomous mobile robot designed to detect and monitor hazardous gas levels in industrial environments. Features real-time data transmission and alert systems.",
      fullDescription: "This advanced robotic system combines embedded systems with sensor technology to create a comprehensive gas monitoring solution. The robot autonomously navigates through industrial facilities while continuously monitoring air quality and detecting dangerous gas concentrations. When hazardous levels are detected, the system displays real-time readings on an LCD screen, triggers an audible alarm, and autonomously moves the robot away from danger zones while avoiding obstacles.",
      tech: ["Arduino", "Gas Sensors", "Ultrasonic Sensor", "L298N Motor Controller", "C++", "DC-DC Buck Converter", "Servo Motor"],
      category: "Robotics",
      image: "/images/project-more/gas-robot.jpg",
      features: [
        "Autonomous navigation system",
        "Multi-gas detection capability (CO, CO2, LPG, Methane)",
        "Real-time display of current system output on an LCD screen",
        "Automatic alert system with threshold monitoring",
        "Obstacle Avoidance System",
        "Rechargeable battery system with long runtime",
      ],
      goals: "Create a cost-effective, reliable solution for continuous gas monitoring in industrial environments where human presence may be dangerous or impractical.",
      outcomes: "Successfully deployed prototype demonstrating 95% detection accuracy, 3-hour battery life, and reliable operation in challenging industrial conditions.",
      github: "https://github.com/Aeyjjjk/autonomous-robot",
    },
    "water-level detector":{
      title: "Water Level Detection & Alert System",
      year: "2023",
      role: "Embedded Systems & IoT Engineer",
      description:
        "An automated water level monitoring system that detects water depth and triggers an alarm when a predefined threshold is reached.",
      fullDescription:
        "This project is a water level and depth detection system designed to monitor liquid levels in tanks or reservoirs in real time. Using a sensor connected to a microcontroller, the system continuously measures the water level and compares it against a predefined setpoint. When the water reaches or exceeds the critical level, a buzzer is automatically triggered to alert users, helping to prevent overflow, equipment damage, or water wastage.",
      tech: [
        "Water Level Sensor",
        "Microcontroller",
        "Buzzer",
        "Power Supply",
        "Connecting Wires",
      ],
      category: "Embedded Systems",
      image: "/images/projects/waterLevel.jpeg",
      features: [
        "Real-time water level monitoring",
        "Configurable level threshold (setpoint)",
        "Automatic buzzer alert on overflow risk",
        "Fast response and reliable detection",
        "Simple and low-cost hardware design",
        "Suitable for tanks, wells, and reservoirs",
      ],
      goals:
        "To prevent water overflow and equipment damage by providing a simple, reliable alert system when water reaches a critical level.",
      outcomes:
        "Successfully detected water levels with high accuracy, triggered timely alerts at the set threshold, and demonstrated reliable performance during continuous testing.",
    }
    ,
    "flutter-apps": {
      title: "Flutter Mobile Apps",
      year: "2022-2024",
      role: "Mobile App Developer & UI/UX Designer",
      description: "Cross-platform mobile applications featuring modern UI/UX, real-time data sync, and seamless user experiences.",
      fullDescription: "A collection of professional mobile applications built with Flutter, demonstrating mastery of modern mobile development principles, state management, and API integration. Applications range from productivity tools to industrial monitoring solutions.",
      tech: ["Flutter", "Dart", "Firebase", "REST APIs", "State Management"],
      category: "Software Development",
      image: "📱",
      features: [
        "Cross-platform compatibility (iOS & Android)",
        "Modern, intuitive user interfaces",
        "Real-time data synchronization",
        "Offline functionality with local caching",
        "Push notifications",
        "Secure authentication systems",
      ],
      goals: "Deliver high-quality, performant mobile applications that provide excellent user experiences across all platforms.",
      outcomes: "Published multiple apps with 4.5+ star ratings, thousands of downloads, and positive user feedback on performance and design.",
    },
    // "drone-design": {
    //   title: "Drone Design Project",
    //   year: "2023",
    //   role: "Robotics Engineer & Flight Systems Developer",
    //   description: "Custom quadcopter design with advanced flight control systems, GPS navigation, and payload capabilities.",
    //   fullDescription: "An advanced unmanned aerial vehicle project focusing on stable flight control, autonomous navigation, and practical payload delivery capabilities. The drone incorporates custom flight controller programming and advanced sensor fusion.",
    //   tech: ["Flight Controller", "IMU Sensors", "GPS Module", "ESC Programming", "Telemetry"],
    //   category: "Robotics & IoT",
    //   image: "",
    //   features: [
    //     "Stable autonomous flight control",
    //     "GPS waypoint navigation",
    //     "Real-time telemetry and monitoring",
    //     "Payload delivery system",
    //     "Failsafe and return-to-home functionality",
    //     "Long-range communication system",
    //   ],
    //   goals: "Design and build a reliable drone platform capable of autonomous missions for industrial inspection and delivery applications.",
    //   outcomes: "Achieved 25-minute flight time, 500m range, 1kg payload capacity, and successful completion of autonomous missions.",
    // },
    "plc-systems": {
      title: "PLC & HMI Systems",
      year: "2023-Present",
      role: "Automation Engineer & PLC Programmer",
      description: "Industrial automation control systems with intuitive HMI interfaces for process monitoring and control.",
      fullDescription: "Professional PLC programming projects implementing complete automation solutions for industrial processes. Includes SCADA integration, alarm management, and comprehensive HMI development for operator interfaces.",
      tech: ["RSLogix 5000", "Ladder Logic", "FactoryTalk", "Industrial Protocols"],
      category: "Automation & Control",
      image: "/images/gallery/hmi.PNG",
      features: [
        "Comprehensive process control logic",
        "Intuitive HMI operator interfaces",
        "Real-time monitoring and alarms",
        "Data logging and trending",
        "Remote access and diagnostics",
        "Safety interlocks and emergency stops",
      ],
      goals: "Create reliable, maintainable automation solutions that improve efficiency and safety in industrial processes.",
      outcomes: "Implemented systems controlling critical processes with 99.9% uptime, reducing manual intervention by 80%.",
    },
    // "java-apps": {
    //   title: "Java Applications",
    //   year: "2021-2023",
    //   role: "Backend Developer & Software Engineer",
    //   description: "Enterprise-grade Java applications with robust backend systems, database integration, and scalable architectures.",
    //   fullDescription: "Professional Java development projects ranging from desktop applications to backend services. Demonstrates proficiency in object-oriented programming, design patterns, and enterprise application architecture.",
    //   tech: ["Java", "Spring Framework", "MySQL", "REST APIs", "Maven"],
    //   category: "Software Development",
    //   image: "",
    //   features: [
    //     "Robust backend architecture",
    //     "Secure authentication and authorization",
    //     "Database integration and ORM",
    //     "RESTful API development",
    //     "Unit testing and quality assurance",
    //     "Scalable, maintainable codebase",
    //   ],
    //   goals: "Develop enterprise-quality Java applications that meet professional standards for reliability, security, and maintainability.",
    //   outcomes: "Delivered production-ready applications serving thousands of users with excellent performance and stability.",
    // },
  };

  const project = id ? projects[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")} className="mt-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          {/* Hero Section */}
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 border-2">
                  {project.category}
                </Badge>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground font-medium">{project.year}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                {project.title}
              </h1>
              <p className="text-lg text-primary/80 font-medium mb-4">
                {project.role}
              </p>
              <p className="text-xl text-muted-foreground animate-fade-in">
                {project.description}
              </p>
            </div>

            {/* Project Image/Banner */}
            <Card className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 flex items-center justify-center mb-12 border-2 overflow-hidden relative">
              <img 
               src={project.image}
               alt={project.title}
               className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 pointer-events-none" />
            </Card>

            {/* Tech Stack */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string, index: number) => (
                  <Badge
                    key={index}
                    className="bg-cyan/20 text-cyan border-cyan/50 border-2 px-4 py-2 hover:bg-cyan/30 transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-invert max-w-none mb-12">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature: string, index: number) => (
                  <Card key={index} className="p-4 border-2 bg-card">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-foreground">{feature}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Goals & Outcomes */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 border-2 bg-card">
                <h3 className="text-xl font-bold mb-3 text-gradient">Project Goals</h3>
                <p className="text-muted-foreground leading-relaxed">{project.goals}</p>
              </Card>
              <Card className="p-6 border-2 bg-card">
                <h3 className="text-xl font-bold mb-3 text-gradient">Outcomes</h3>
                <p className="text-muted-foreground leading-relaxed">{project.outcomes}</p>
              </Card>
            </div>

            {/* Action Buttons */}
            {project.github && (
              <div className="flex gap-4">
                <Button className="gradient-tech text-white glow-primary" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
                {/* <Button variant="outline" className="border-2">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button> */}
              </div>
            )}
          </div>
        </div>
      </div>

      
    </div>
  );
}
