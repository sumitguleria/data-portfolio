import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-6 flex flex-col items-center">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
              Open to entry-level opportunities
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              Sumit Guleria<br />
              <span className="text-primary mt-2 block">Data Analyst</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mt-6">
              Aspiring Data Analyst passionate about analyzing data, identifying trends, and delivering insights that drive business growth using Python, SQL, Power BI, and Tableau.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                View My Work 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <a href="/CV.pdf" download>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            </a>
          </div>

          <div className="flex justify-center space-x-4 pt-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/sumitguleria" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://www.linkedin.com/in/sumit-guleria-005a75260" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:sumitguleria666@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}