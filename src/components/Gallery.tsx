import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData } from "@/data/portfolio-data";

export const Gallery = () => {
  const [activeToolsIndex, setActiveToolsIndex] = useState<number | null>(null);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-1 md:row-span-2";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  const getAspectRatio = (size: string) => {
    switch (size) {
      case "large":
        return "aspect-[16/10]";
      case "medium":
        return "aspect-[4/5]";
      default:
        return "aspect-[4/3]";
    }
  };

  const handleCategoryClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setActiveToolsIndex(activeToolsIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Project <span className="text-gradient">Gallery</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visual showcase of engineering projects and hardware builds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-auto">
            {galleryData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className={getSizeClasses(item.size)}
              >
                <Card
                  className="group h-full overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/10 bg-card"
                >
                  <div 
                    className={`relative overflow-hidden bg-muted ${getAspectRatio(item.size)}`}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badge - clickable */}
                    <Badge 
                      onClick={(e) => handleCategoryClick(e, index)}
                      className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm border border-border/30 text-foreground text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {item.category}
                    </Badge>

                    {/* Tools popup - shows on category click */}
                    <AnimatePresence>
                      {activeToolsIndex === index && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-12 right-3 bg-card/95 backdrop-blur-md rounded-lg border border-border shadow-xl p-3 z-10 max-w-[200px]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <p className="text-xs text-muted-foreground mb-2 font-medium">Tools Used:</p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.tools.map((tool, toolIndex) => (
                              <Badge 
                                key={toolIndex}
                                variant="secondary"
                                className="bg-primary/20 text-primary border border-primary/30 text-xs"
                              >
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Click outside to close tools popup */}
      {activeToolsIndex !== null && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setActiveToolsIndex(null)}
        />
      )}
    </section>
  );
};
