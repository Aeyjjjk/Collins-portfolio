import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, ArrowRight, X } from "lucide-react";

export const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  
  const blogPosts = [
    {
      title: "Getting Started with IoT: A Practical Guide",
      excerpt: "Learn the fundamentals of IoT systems, from sensor selection to cloud integration, with real-world examples.",
      fullContent: "The Internet of Things (IoT) has revolutionized how we interact with technology. This comprehensive guide covers everything you need to know to get started with IoT development. We'll explore sensor selection, microcontroller programming, wireless communication protocols, cloud integration, and real-world implementation strategies. Whether you're building a smart home system or an industrial monitoring solution, understanding these fundamentals is crucial. Learn about MQTT protocols, REST APIs, data visualization, and security best practices that will help you build robust and scalable IoT solutions.",
      date: "March 15, 2024",
      category: "IoT",
      readTime: "8 min read",
    },
    {
      title: "PLC Programming Best Practices",
      excerpt: "Essential tips and techniques for writing efficient, maintainable PLC code in industrial automation.",
      fullContent: "Writing effective PLC code requires more than just understanding ladder logic. This article explores industry best practices for creating maintainable, efficient, and safe automation systems. We cover proper code organization, naming conventions, documentation standards, and debugging techniques. Learn about structured programming approaches, function blocks, and how to implement robust error handling. Discover optimization strategies that reduce scan times and improve system performance. We also discuss safety considerations, emergency stop implementations, and regulatory compliance requirements that are essential in industrial automation.",
      date: "March 10, 2024",
      category: "Automation",
      readTime: "6 min read",
    },
    {
      title: "Embedded Systems Security Fundamentals",
      excerpt: "Understanding security principles in embedded devices and how to implement them effectively.",
      fullContent: "Security in embedded systems is more critical than ever as devices become increasingly connected. This comprehensive guide covers essential security principles including secure boot processes, encryption implementation, secure communication protocols, and vulnerability assessment. Learn about common attack vectors such as buffer overflows, side-channel attacks, and firmware manipulation. We explore hardware security modules, secure element integration, and best practices for protecting sensitive data. Discover how to implement secure firmware updates, certificate management, and authentication mechanisms that protect your embedded devices from modern threats.",
      date: "March 5, 2024",
      category: "Security",
      readTime: "10 min read",
    },
    {
      title: "Building Robots: From Concept to Reality",
      excerpt: "A step-by-step journey through the process of designing and building a functional robot.",
      fullContent: "Robotics combines mechanical engineering, electronics, and software into one exciting field. This detailed guide takes you through the entire robot development process, from initial concept and requirements analysis to final testing and deployment. Learn about mechanical design considerations, actuator selection, sensor integration, and control systems. We cover kinematics, motion planning, and autonomous navigation algorithms. Discover practical tips for prototyping, power management, and system integration. Whether you're building a simple line-following robot or a complex autonomous system, this guide provides the knowledge you need to bring your robotic vision to life.",
      date: "February 28, 2024",
      category: "Robotics",
      readTime: "12 min read",
    },
    {
      title: "Flutter for Industrial Applications",
      excerpt: "How to leverage Flutter's cross-platform capabilities for industrial monitoring and control apps.",
      fullContent: "Flutter has emerged as a powerful framework for building industrial monitoring and control applications. This article explores how to leverage Flutter's cross-platform capabilities to create robust, performant applications for industrial environments. Learn about real-time data visualization, MQTT integration for industrial protocols, offline-first architecture, and secure authentication. We cover state management strategies for complex industrial applications, custom widget development for specialized interfaces, and integration with backend systems. Discover best practices for building responsive, reliable applications that meet the demanding requirements of industrial operations.",
      date: "February 20, 2024",
      category: "Development",
      readTime: "7 min read",
    },
    {
      title: "Safety Systems in Modern Engineering",
      excerpt: "Exploring QHSE principles and their implementation in engineering projects.",
      fullContent: "Quality, Health, Safety, and Environmental (QHSE) principles are fundamental to modern engineering practice. This comprehensive guide explores how to implement effective safety systems in engineering projects. Learn about risk assessment methodologies, hazard identification, safety instrumented systems (SIS), and emergency response planning. We cover regulatory compliance requirements, safety culture development, and continuous improvement processes. Discover best practices for incident investigation, safety training programs, and creating a proactive safety environment. Whether you're working in manufacturing, construction, or process industries, understanding and implementing QHSE principles is essential for project success.",
      date: "February 15, 2024",
      category: "Safety",
      readTime: "9 min read",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Engineering <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing knowledge and experiences from the world of engineering and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30 bg-card group flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20 border-2">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group/btn"
                    onClick={() => setSelectedPost(post)}
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-primary/10 text-primary border-primary/20 border-2">
                {selectedPost?.category}
              </Badge>
              <span className="text-sm text-muted-foreground">{selectedPost?.readTime}</span>
            </div>
            <DialogTitle className="text-3xl font-bold">{selectedPost?.title}</DialogTitle>
            <DialogDescription className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4" />
              {selectedPost?.date}
            </DialogDescription>
          </DialogHeader>
          <div className="prose prose-invert max-w-none mt-4">
            <p className="text-foreground leading-relaxed text-base">
              {selectedPost?.fullContent}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
