import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { BarChart3, Database, TrendingUp, Users } from "lucide-react";

export function About() {
  const stats = [
    { icon: BarChart3, value: "3+", label: "Projects Completed" },
    { icon: Database, value: "5+", label: "Tools Mastered" },
    { icon: TrendingUp, value: "100%", label: "Passion for Data" },
    { icon: Users, value: "1", label: "Ready for Teams" },
  ];

  const certifications = [
    "Data Analyst | Excellence Technology (Sept 2025 - Feb 2026)",
    "Bachelor of Computer Application | MCM DAV College (2022-2025)"
  ];

  return (
    <section id="about" className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An aspiring data analyst skilled in data cleaning, dashboard development, and analytical problem-solving using tools like Python, SQL, Excel, Power BI, and Tableau.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey in data analytics began during my Bachelor of Computer Application at MCM DAV College, Kangra, where I discovered my passion for analyzing data and identifying trends to deliver meaningful insights.
              </p>
              <p>
                I have developed multiple GUI-based applications and analytical dashboards, integrating persistent databases with clean user interfaces to showcase my skills in practical environments.
              </p>
              <p>
                Currently seeking an entry-level opportunity, I am eager to apply my technical expertise in a professional setting and help drive business growth through data-driven decision-making.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Education & Certifications</h3>
            <div className="flex flex-col gap-3">
              {certifications.map((cert) => (
                <Badge key={cert} variant="secondary" className="text-sm w-fit py-1.5 px-3">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}