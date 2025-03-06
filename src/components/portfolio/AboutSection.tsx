
import { Code, Database, Server } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-red-500" />,
      title: "Web Development",
      description: "Expert in creating modern, responsive websites using HTML, CSS, JavaScript, React, and Firebase."
    },
    {
      icon: <Database className="w-12 h-12 text-red-500" />,
      title: "AI & Machine Learning",
      description: "Building intelligent applications using AI and Machine Learning technologies to solve complex problems."
    },
    {
      icon: <Server className="w-12 h-12 text-red-500" />,
      title: "Professional Design",
      description: "Crafting visually appealing and user-friendly UI/UX designs with advanced CSS & JavaScript animations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg">
            I am a passionate Front-End Developer, Web Developer, and AI Expert with expertise in building advanced, 
            high-performance websites and AI-powered solutions. With hands-on experience in React, JavaScript, Firebase, 
            and AI applications, I provide professional and innovative digital services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <Card key={index} className="bg-slate-700/50 border-slate-600 p-6 hover:shadow-xl transition-all hover:shadow-red-500/5 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
