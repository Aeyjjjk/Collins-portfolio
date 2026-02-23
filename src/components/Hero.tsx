import React, { useEffect, useState, useRef, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Download, ChevronRight } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { heroData } from "@/data/portfolio-data";

/* ===============================
   Move Static Data Outside Component
================================= */

const techStack = [
  "Embedded Systems Development",
  "IoT Solutions & Integration",
  "Industrial Automation",
  "Flutter Mobile Applications",
  "PLC & HMI Programming",
  "Cybersecurity Implementation",
  "Robotics & Control Systems",
  "PCB Design & Hardware",
];

export const Hero = React.memo(() => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const isDataReady =
    heroData &&
    heroData.name &&
    heroData.profileImage &&
    heroData.skills?.length > 0;

  /* ===============================
     Precompute Floating Elements ONCE
  ================================= */

  const floatingElements = useMemo(() => {
    if (typeof window === "undefined") return [];

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 4 : 8;

    return [...Array(count)].map((_, i) => ({
      id: i,
      width: Math.random() * 80 + 40,
      height: Math.random() * 80 + 40,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 20 + Math.random() * 10,
      delay: i * 1.5,
    }));
  }, []);

  /* ===============================
     Pause when Tab Hidden
  ================================= */

  useEffect(() => {
    const handleVisibility = () => {
      setIsAutoPlaying(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  /* ===============================
     Carousel Interval (Only When Visible)
  ================================= */

  useEffect(() => {
    if (!isAutoPlaying || !isDataReady || !isInView) return;

    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % techStack.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isDataReady, isInView]);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Floating Elements (GPU Accelerated) */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingElements.map((el) => (
            <motion.div
              key={el.id}
              className="absolute rounded-full bg-gradient-to-r from-primary/5 to-accent/5 will-change-transform"
              style={{
                width: el.width,
                height: el.height,
                left: el.left,
                top: el.top,
              }}
              animate={{
                y: [0, 30, 0],
                x: [0, 20, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: el.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: el.delay,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <span className="text-sm font-semibold text-primary">
                  {heroData?.title}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-foreground/90">Hello, I'm</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-accent">
                  {heroData?.name}
                </span>
              </h1>

              <p className="text-xl text-muted-foreground">
                {heroData?.tagline}
              </p>
            </div>

            {/* Tech Carousel */}
            <div className="h-20 relative overflow-hidden">
              {isDataReady && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTechIndex}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <div className="h-full flex flex-col justify-center">
                      <h4 className="text-2xl md:text-3xl font-bold mb-3 text-primary">
                        {techStack[currentTechIndex]}
                      </h4>
                      <div className="w-full h-1.5 bg-muted/30 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 4, ease: "linear" }}
                          className="h-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="rounded-xl px-8 py-6 text-base font-semibold bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/20"
              >
                <span className="flex items-center gap-2">
                  See My Works
                  <ChevronRight className="h-5 w-5" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-8 py-6 text-base font-semibold border-2 hover:bg-primary/5"
                asChild
              >
                <a
                  href={heroData?.cvLink}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  View Full CV
                </a>
              </Button>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10" />

              <div className="absolute inset-8 rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                {isDataReady && (
                  <img
                    src={heroData.profileImage}
                    alt={heroData.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {!prefersReducedMotion && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 border border-dashed border-primary/20 rounded-3xl will-change-transform"
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});