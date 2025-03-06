
import { Award, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Web Development",
      issuer: "Hunar IT Company",
      details: "Comprehensive web development certification covering front-end and back-end technologies."
    },
    {
      title: "ChatGPT Course",
      issuer: "Great Learning",
      details: "Advanced training in leveraging AI and Large Language Models for practical applications."
    },
    {
      title: "AI & Technology",
      issuer: "Forage",
      details: "Specialized training in artificial intelligence technologies and implementations."
    },
    {
      title: "Accenture UK Developer & Technology Virtual Experience",
      issuer: "Forage - March 2025",
      details: [
        "Gained a complete understanding of the Software Development Lifecycle",
        "Researched Emerging Tech Trends & DevOps",
        "Analyzed Waterfall vs Agile Methodologies",
        "Designed an Algorithm with Pseudocode & Flowchart"
      ]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-300">
            Continuous learning and professional development are key to staying at the cutting edge of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-slate-700/50 border-slate-600 p-6 hover:shadow-xl transition-all hover:shadow-red-500/5">
              <div className="flex items-start gap-4">
                <Award className="w-10 h-10 text-red-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-orange-400 mb-3">{cert.issuer}</p>
                  {Array.isArray(cert.details) ? (
                    <ul className="text-gray-400 space-y-2">
                      {cert.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400">{cert.details}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
