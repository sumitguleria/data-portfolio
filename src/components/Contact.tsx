import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sumitguleria666@gmail.com",
      link: "mailto:sumitguleria666@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7807497030",
      link: "tel:+917807497030"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chandigarh, India",
      link: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "sumit-guleria-005a75260",
      link: "https://www.linkedin.com/in/sumit-guleria-005a75260"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "sumitguleria",
      link: "https://github.com/sumitguleria"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSendEmail = () => {
    if (!formData.name || !formData.message) {
      toast.error("Please fill in your name and message");
      return;
    }
    
    const subject = encodeURIComponent(formData.subject || "New Contact from Portfolio");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:sumitguleria666@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSendWhatsApp = () => {
    if (!formData.name || !formData.message) {
      toast.error("Please fill in your name and message");
      return;
    }

    const text = encodeURIComponent(
      `*New Contact from Portfolio*\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`
    );
    
    window.open(`https://wa.me/917807497030?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to explore entry-level opportunities or collaborate on a data project? 
            Let's connect and discuss how my skills can bring value to your team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Let's Connect</h3>
            <p className="text-muted-foreground">
              I am actively seeking an entry-level opportunity to begin a career in data analytics.
              Whether you have a full-time position or a project, I'd love to hear from you.
            </p>

            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.link}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group border border-transparent hover:border-primary/20"
                >
                  <contact.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium">{contact.label}</div>
                    <div className="text-sm text-muted-foreground">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="font-medium mb-3">Available for:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.8)]"></div>
                  Entry-level positions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.8)]"></div>
                  Internships
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.8)]"></div>
                  Freelance data projects
                </li>
              </ul>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="What would you like to discuss?" 
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project or how I can help..."
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  onClick={handleSendEmail} 
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Email
                </Button>
                <Button 
                  onClick={handleSendWhatsApp} 
                  variant="outline" 
                  className="w-full border-primary/20 hover:bg-primary/10 text-primary"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}