
import { Github, Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
