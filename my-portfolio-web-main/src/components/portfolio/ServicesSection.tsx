
import { Card } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
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
  ];

  return (
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
          {services.map((service, index) => (
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
  );
};

export default ServicesSection;
