import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Github, Database, Layout, BarChart3 } from "lucide-react";
import todoImage from "figma:asset/47acdfae38f5f9606f3a495ca1213db720d2aa3c.png";
import instaImage from "figma:asset/ab884342265513d5f2a748c05ef2cb505018a9f6.png";
import salesImage from "figma:asset/ea25c90c8d9a006b9ce4419ef9dfce17714b7098.png";

export function Projects() {
  const projects = [
    {
      title: "Todo List Application",
      description: "Developed a GUI-based Todo List application using Python and Tkinter that allows users to add, mark as completed, and delete tasks. Implemented file handling using CSV for local storage and integrated a MySQL database for persistent task management. Applied CRUD operations, event handling, and database connectivity. Focused on user-friendly interface design and data synchronization.",
      technologies: ["Python", "Tkinter", "MySQL", "mysql.connector", "CSV"],
      icon: Layout,
      image: todoImage,
      sourceUrl: "https://github.com/sumitguleria/To-do-list/blob/main/todo.py",
      showSource: true
    },
    {
      title: "Instagram Login System",
      description: "Developed a GUI-based Instagram Login System using Python and Tkinter, replicating a modern authentication interface. Implemented user input validation, event handling, and secure credential storage using a MySQL database. Integrated backend connectivity to perform database operations for user login data. Focused on clean UI design, structured layout management, and OOP principles.",
      technologies: ["Python", "Tkinter", "MySQL", "OOP"],
      icon: Database,
      image: instaImage,
      sourceUrl: "https://github.com/sumitguleria/Instagram-login-page/blob/main/insta.py",
      showSource: true
    },
    {
      title: "Sales Dashboard",
      description: "Designed an interactive Power BI dashboard that analyzes profit, sales, and regional performance using KPIs, charts, and maps. The dashboard enables users to filter data, identify trends, compare regions, and gain quick, actionable business insights.",
      technologies: ["Power BI", "Data Analysis", "KPIs", "Dashboard Design"],
      icon: BarChart3,
      image: salesImage,
      sourceUrl: "",
      showSource: false
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Analytical tools, database applications, and interactive dashboards showcasing practical skills in Python, SQL, and Power BI.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-6 p-8">
                <div className="flex flex-col justify-center order-2 lg:order-1">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-6 mt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-background/50 border-primary/20">{tech}</Badge>
                      ))}
                    </div>

                    {project.showSource && (
                      <div className="flex gap-3 pt-4">
                        <Button size="sm" variant="default" className="w-full sm:w-auto" asChild>
                          <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </div>
                
                <div className="order-1 lg:order-2 bg-background/50 border border-primary/10 rounded-xl overflow-hidden flex items-center justify-center min-h-[300px] w-full">
                  <ImageWithFallback 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}