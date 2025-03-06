import { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, Twitter, Mail, Phone, MapPin, Award, Code, Database, Server, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 300;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId || "home");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <header className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            CHAMAN
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {["home", "about", "skills", "certifications", "services", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-medium transition-colors hover:text-red-400 ${
                  activeSection === item ? "text-red-500" : "text-gray-300"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-200 hover:text-red-500 transition-colors"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
        
        <div className="md:hidden bg-slate-800 py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {["home", "about", "skills", "certifications", "services", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-medium transition-colors hover:text-red-400 ${
                  activeSection === item ? "text-red-500" : "text-gray-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section id="home" className="min-h-screen pt-28 pb-20 flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="order-2 md:order-1 md:w-1/2 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Chaman Kesani</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
                Front-End Developer | Web Developer | AI Expert
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg">
                Crafting intelligent web solutions with AI and modern technology. Let's build something smart, fast, and future-ready!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white"
                >
                  Hire Me
                </Button>
                <Button 
                  onClick={() => scrollToSection("skills")}
                  variant="outline" 
                  className="border-red-500 text-red-500 hover:bg-red-500/10"
                >
                  Explore Skills
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 md:w-1/3 animate-fade-in">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-orange-500 blur-lg opacity-70"></div>
                <img 
                  src="/lovable-uploads/0ac59c8f-c61b-4c5a-a46d-3bd42402295e.png" 
                  alt="Chaman Kesani" 
                  className="relative w-full h-full object-cover rounded-full border-4 border-slate-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
            {[
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
            ].map((item, index) => (
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

      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-300">
              Here are the technologies and skills I've mastered to deliver exceptional digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Front-End Development", level: 90 },
              { name: "React", level: 85 },
              { name: "JavaScript", level: 90 },
              { name: "HTML & CSS", level: 95 },
              { name: "Firebase", level: 80 },
              { name: "AI & ML", level: 75 },
              { name: "UI/UX Design", level: 85 },
              { name: "CSS Animations", level: 80 },
            ].map((skill, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 hover:bg-slate-700/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-red-500 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-600 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            {[
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
            ].map((cert, index) => (
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

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-300">
              Professional services tailored to meet your digital needs and business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Custom Website Development",
                description: "Tailored websites built with modern technologies to meet your specific business needs.",
              },
              {
                title: "AI-Powered Solutions",
                description: "Intelligent applications leveraging AI to automate processes and enhance user experiences.",
              },
              {
                title: "Full-Stack Development",
                description: "End-to-end web application development with seamless front-end and back-end integration.",
              },
              {
                title: "Business Branding & Digital Solutions",
                description: "Comprehensive digital identity creation and strategic online presence development.",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden group hover:shadow-xl transition-all hover:shadow-red-500/10">
                <div className="p-6">
                  <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-orange-500 mb-4 group-hover:w-20 transition-all"></div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Contact Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-300">
              Let's connect and discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                  <p className="text-white">ck017713@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Phone</h4>
                  <p className="text-white">+92 343 125593</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Location</h4>
                  <p className="text-white">Kesani Colony, Mithi, Tharparkar</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="text-sm text-gray-400 mb-3">Connect With Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/chanderkesani" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-700 p-3 rounded-full hover:bg-red-500 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/chander-kumar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-700 p-3 rounded-full hover:bg-red-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://instagram.com/chaman_kesani" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-700 p-3 rounded-full hover:bg-red-500 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://twitter.com/chamankesani" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-700 p-3 rounded-full hover:bg-red-500 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <Card className="bg-slate-700/30 border-slate-600">
                <Tabs defaultValue="contact" className="w-full">
                  <TabsList className="w-full bg-slate-800">
                    <TabsTrigger value="contact" className="flex-1">Contact Form</TabsTrigger>
                    <TabsTrigger value="hire" className="flex-1">Hire Me</TabsTrigger>
                  </TabsList>
                  <TabsContent value="contact" className="p-6">
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Name</label>
                          <input 
                            type="text" 
                            id="name" 
                            className="w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Your Name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
                          <input 
                            type="email" 
                            id="email" 
                            className="w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm text-gray-400 mb-1">Subject</label>
                        <input 
                          type="text" 
                          id="subject" 
                          className="w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="Subject"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Message</label>
                        <textarea 
                          id="message" 
                          rows={4} 
                          className="w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white">
                        Send Message
                      </Button>
                    </form>
                  </TabsContent>
                  <TabsContent value="hire" className="p-6">
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="client-name" className="block text-sm text-gray-400 mb-1">Name</label>
                          <input 
                            type="text" 
                            id="client-name" 
                            className="w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Your Name"
                          />
                        </div>
                        <div>
                          <label htmlFor="client-email" className="block text-sm text-gray-400 mb-1">Email</label>
                          <input 
                            type="email" 
                            id="client-email" 
                            className="w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="project-type" className="block text-sm text-gray-400 mb-1">Project Type</label>
                        <select 
                          id="project-type" 
                          className="w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          <option value="">Select Project Type</option>
                          <option value="website">Website Development</option>
                          <option value="ai">AI Solution</option>
                          <option value="fullstack">Full-Stack Development</option>
                          <option value="branding">Business Branding</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm text-gray-400 mb-1">Budget Range</label>
                        <select 
                          id="budget" 
                          className="w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          <option value="">Select Budget Range</option>
                          <option value="small">$500 - $1,000</option>
                          <option value="medium">$1,000 - $5,000</option>
                          <option value="large">$5,000+</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="project-details" className="block text-sm text-gray-400 mb-1">Project Details</label>
                        <textarea 
                          id="project-details" 
                          rows={4} 
                          className="w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="Describe your project requirements"
                        ></textarea>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white">
                        Request Quote
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                CHAMAN
              </span>
              <p className="text-gray-400 mt-2">Front-End Developer | Web Developer | AI Expert</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Chaman Kesani. All rights reserved.</p>
              <p className="text-gray-500 text-xs mt-1">
                Built with React, Tailwind CSS & Modern Web Technologies
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
