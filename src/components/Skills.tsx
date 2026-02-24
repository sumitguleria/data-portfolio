import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { 
  BarChart, 
  Database, 
  Code 
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Database,
      title: "Data Management & Storage",
      skills: [
        { name: "MySQL", level: 4.5 },
        { name: "SQL", level: 4.5 },
        { name: "Database Connectivity", level: 4.5 },
        { name: "Excel", level: 4.5 },
      ]
    },
    {
      icon: Code,
      title: "Programming",
      skills: [
        { name: "Python", level: 5 },
        { name: "Pandas", level: 4.5 },
        { name: "NumPy", level: 4.5 },
        { name: "OOP Principles", level: 4 },
      ]
    },
    {
      icon: BarChart,
      title: "Visualization",
      skills: [
        { name: "Power BI", level: 4.5 },
        { name: "Tableau", level: 4 },
        { name: "Matplotlib", level: 4.5 },
        { name: "Seaborn", level: 4.5 },
      ]
    },
    {
      icon: Code,
      title: "GUI Development",
      skills: [
        { name: "Tkinter", level: 4.5 },
        { name: "Event Handling", level: 4 },
        { name: "User Input Validation", level: 4.5 },
        { name: "UI Design", level: 4 },
      ]
    }
  ];

  const softSkills = [
    "Data Cleaning",
    "Identifying Trends", 
    "Dashboard Development",
    "Delivering Insights",
    "CRUD Operations",
    "Actionable Reporting"
  ];

  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A specialized toolkit for developing data applications, 
            extracting insights, and presenting data clearly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category) => (
            <Card key={category.title} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="h-5 w-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}/5</span>
                    </div>
                    <Progress value={skill.level * 20} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <Badge key={skill} variant="outline" className="px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}