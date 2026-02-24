import { Card, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Data Analyst Certification",
      institution: "Excellence Technology",
      location: "Chandigarh",
      period: "Sept 2025 - Feb 2026",
      type: "Certification",
      description: "Comprehensive training program focused on data analysis, visualization, and database management.",
      achievements: [
        "Hands-on experience with Python, SQL, Excel, Power BI, and Tableau",
        "Developed end-to-end data pipelines and visualization dashboards",
        "Completed real-world case studies in business analytics",
        "Mastered GUI development with Python and Tkinter"
      ],
      icon: Award
    },
    {
      title: "Bachelor of Computer Application",
      institution: "MCM DAV College",
      location: "Kangra",
      period: "2022 - 2025",
      type: "Degree",
      description: "Undergraduate degree focusing on computer science, programming, and software development methodologies.",
      achievements: [
        "Studied advanced programming, database management, and software engineering",
        "Developed multiple projects integrating Python, databases, and user interfaces",
        "Built a strong foundation in object-oriented programming (OOP) principles",
        "Gained practical knowledge in algorithm design and data structures"
      ],
      icon: GraduationCap
    }
  ];

  return (
    <section id="experience" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Education & Training</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A strong academic foundation combined with specialized, hands-on training in data analytics.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={exp.title + exp.institution} className="relative bg-muted/10 border-primary/20 hover:border-primary/50 transition-colors">
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-border -mb-6"></div>
              )}
              <div className="absolute left-4 top-6 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
              
              <CardHeader className="pl-14">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl text-foreground">{exp.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mt-1">
                      <div className="flex items-center gap-1 font-medium text-foreground">
                        <exp.icon className="h-4 w-4 text-primary" />
                        {exp.institution}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full border border-primary/30">
                    {exp.type}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
