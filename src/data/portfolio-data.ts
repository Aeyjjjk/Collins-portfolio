/**
 * ===========================================
 * PORTFOLIO DATA - EDIT YOUR CONTENT HERE
 * ===========================================
 * 
 * This file contains all your portfolio content.
 * Update the data below to customize your portfolio.
 * 
 * IMAGE INSTRUCTIONS:
 * 1. Place your images in the /public/images/ folder
 * 2. Reference them as "/images/your-image.jpg"
 * 3. Supported formats: .jpg, .png, .webp, .svg
 * 
 * Example: image: "/images/profile.jpg"
 */

// ===========================================
// HERO SECTION
// ===========================================
export const heroData = {
  name: "Echezonachi Collins", // TODO: Replace with your name
  title: "Engineer & Developer", // TODO: Replace with your title
  tagline: "Where engineering meets innovation.", // TODO: Your tagline
  profileImage: "/placeholder.svg", // TODO: Replace with "/images/profile.jpg"
  skills: [
    "Embedded Systems",
    "Automation",
    "Hardware Engineering",
    "PLC & HMI",
    "IoT",
    "Robotics",
    "Flutter Development",
    "Cybersecurity",
    "Kali Linux",
  ],
  socialLinks: {
    whatsapp: "https://wa.me/yourphonenumber", // TODO: Add your WhatsApp number
    linkedin: "https://linkedin.com/in/yourusername", // TODO: Add your LinkedIn
  },
  cvLink: "/cv.pdf", // TODO: Place your CV in /public/cv.pdf
};

// ===========================================
// PROJECTS SECTION
// ===========================================
export const projectsData = [
  {
    id: "gas-robot",
    title: "Gas Detecting Robot",
    description: "Autonomous mobile robot for detecting and monitoring hazardous gas levels in industrial environments.",
    tech: ["Arduino", "Gas Sensors", "Wireless", "C++"],
    image: "/placeholder.svg", // TODO: Replace with "/images/projects/gas-robot.jpg"
  },
  {
    id: "rfid-system",
    title: "RFID Attendance System",
    description: "Smart attendance tracking using RFID technology with real-time database integration.",
    tech: ["RFID", "Microcontroller", "Database", "LCD"],
    image: "/placeholder.svg", // TODO: Replace with "/images/projects/rfid-system.jpg"
  },
  {
    id: "flutter-apps",
    title: "Flutter Mobile Apps",
    description: "Cross-platform mobile applications with modern UI/UX and real-time data sync.",
    tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
    image: "/placeholder.svg", // TODO: Replace with "/images/projects/flutter-apps.jpg"
  },
  {
    id: "drone-design",
    title: "Drone Design Project",
    description: "Custom quadcopter with advanced flight control, GPS navigation, and payload capabilities.",
    tech: ["Flight Controller", "IMU", "GPS", "Telemetry"],
    image: "/placeholder.svg", // TODO: Replace with "/images/projects/drone.jpg"
  },
  {
    id: "plc-systems",
    title: "PLC & HMI Systems",
    description: "Industrial automation control systems with intuitive HMI interfaces for process monitoring.",
    tech: ["PLC", "Ladder Logic", "HMI", "SCADA"],
    image: "/placeholder.svg", // TODO: Replace with "/images/projects/plc-systems.jpg"
  },
  {
    id: "java-apps",
    title: "Java Applications",
    description: "Enterprise-grade Java applications with robust backend systems and database integration.",
    tech: ["Java", "Spring", "MySQL", "REST APIs"],
    image: "/placeholder.svg", // TODO: Replace with "/images/projects/java-apps.jpg"
  },
];

// ===========================================
// GALLERY SECTION
// ===========================================
export const galleryData = [
  {
    title: "Smart Home Controller",
    category: "IoT",
    description: "Home automation system with sensors",
    image: "/placeholder.svg", // TODO: Replace with "/images/gallery/smart-home.jpg"
    size: "large" as const,
    tools: ["ESP32", "MQTT", "Node-RED", "React"],
  },
  {
    title: "Industrial PLC System",
    category: "Automation",
    description: "Factory floor automation",
    image: "/placeholder.svg", // TODO: Replace with "/images/gallery/plc-system.jpg"
    size: "small" as const,
    tools: ["Siemens S7", "TIA Portal", "HMI"],
  },
  {
    title: "Drone Flight Controller",
    category: "Robotics",
    description: "Custom drone control system",
    image: "/placeholder.svg", // TODO: Replace with "/images/gallery/drone-controller.jpg"
    size: "medium" as const,
    tools: ["STM32", "C++", "PID Control", "PCB Design"],
  },
  {
    title: "Mobile App Interface",
    category: "Flutter",
    description: "Cross-platform mobile application",
    image: "/placeholder.svg", // TODO: Replace with "/images/gallery/mobile-app.jpg"
    size: "small" as const,
    tools: ["Flutter", "Dart", "Firebase", "REST API"],
  },
  {
    title: "SCADA Dashboard",
    category: "Industrial",
    description: "Real-time monitoring system",
    image: "/placeholder.svg", // TODO: Replace with "/images/gallery/scada.jpg"
    size: "large" as const,
    tools: ["WinCC", "Modbus", "OPC UA", "SQL"],
  },
  {
    title: "Sensor Network",
    category: "IoT",
    description: "Distributed sensor monitoring",
    image: "/placeholder.svg", // TODO: Replace with "/images/gallery/sensor-network.jpg"
    size: "medium" as const,
    tools: ["LoRa", "Arduino", "Python", "Grafana"],
  },
  {
    title: "Motor Control PCB",
    category: "Hardware",
    description: "Custom motor driver board",
    image: "/placeholder.svg", // TODO: Replace with "/images/gallery/motor-pcb.jpg"
    size: "small" as const,
    tools: ["Altium", "BLDC", "Gate Drivers", "EMC"],
  },
  {
    title: "Security System",
    category: "Cybersecurity",
    description: "Network intrusion detection",
    image: "/placeholder.svg", // TODO: Replace with "/images/gallery/security.jpg"
    size: "large" as const,
    tools: ["Kali Linux", "Python", "Wireshark", "Snort"],
  },
  {
    title: "Robotic Arm Control",
    category: "Robotics",
    description: "6-axis robotic manipulator",
    image: "/placeholder.svg", // TODO: Replace with "/images/gallery/robotic-arm.jpg"
    size: "medium" as const,
    tools: ["ROS", "Inverse Kinematics", "Servo Motors"],
  },
];

// ===========================================
// TESTIMONIALS SECTION
// ===========================================
export type Platform = "linkedin" | "whatsapp" | "twitter" | "instagram" | "facebook" | "github";

export const testimonialsData = [
  {
    id: 1,
    name: "Client Name", // TODO: Replace with client's name
    role: "Position, Company", // TODO: Replace with client's role
    quote: "Your testimonial quote here.", // TODO: Add testimonial
    rating: 5,
    image: "/placeholder.svg", // TODO: Replace with "/images/testimonials/client1.jpg"
    platform: "linkedin" as Platform,
  },
  {
    id: 2,
    name: "Client Name",
    role: "Position, Company",
    quote: "Your testimonial quote here.",
    rating: 4,
    image: "/placeholder.svg", // TODO: Replace with "/images/testimonials/client2.jpg"
    platform: "whatsapp" as Platform,
  },
  {
    id: 3,
    name: "Client Name",
    role: "Position, Company",
    quote: "Your testimonial quote here.",
    rating: 5,
    image: "/placeholder.svg", // TODO: Replace with "/images/testimonials/client3.jpg"
    platform: "twitter" as Platform,
  },
  {
    id: 4,
    name: "Client Name",
    role: "Position, Company",
    quote: "Your testimonial quote here.",
    rating: 4,
    image: "/placeholder.svg", // TODO: Replace with "/images/testimonials/client4.jpg"
    platform: "instagram" as Platform,
  },
  {
    id: 5,
    name: "Client Name",
    role: "Position, Company",
    quote: "Your testimonial quote here.",
    rating: 5,
    image: "/placeholder.svg", // TODO: Replace with "/images/testimonials/client5.jpg"
    platform: "facebook" as Platform,
  },
  {
    id: 6,
    name: "Client Name",
    role: "Position, Company",
    quote: "Your testimonial quote here.",
    rating: 4,
    image: "/placeholder.svg", // TODO: Replace with "/images/testimonials/client6.jpg"
    platform: "github" as Platform,
  },
];
