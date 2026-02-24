import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary fill-current" />
            <span>by Sumit Guleria</span>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/sumitguleria" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://www.linkedin.com/in/sumit-guleria-005a75260" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:sumitguleria666@gmail.com">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}