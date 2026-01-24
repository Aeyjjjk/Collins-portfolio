import { MessageCircle, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border/40">
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 py-16 relative">
        <div className="max-w-6xl mx-auto">

          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

            {/* Identity */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold tracking-tight">
                <span className="text-gradient">Echezonachi Collins</span>
              </h3>
              <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                Engineering systems where hardware meets software —
                built with intention, clarity, and long-term thinking.
              </p>
            </div>

            {/* Contact / Social */}
            <div className="flex flex-col items-start md:items-end gap-4">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Let’s connect
              </span>

              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:text-primary hover:bg-primary/10 transition"
                  asChild
                >
                  <a
                    href="https://wa.me/yourphonenumber"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:text-primary hover:bg-primary/10 transition"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:text-primary hover:bg-primary/10 transition"
                  asChild
                >
                  <a href="mailto:yourmail@example.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-border/40" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Echezonachi Collins — All rights reserved.
            </p>

            <a
              href="#top"
              className="flex items-center gap-1 hover:text-primary transition"
            >
              Back to top
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};
