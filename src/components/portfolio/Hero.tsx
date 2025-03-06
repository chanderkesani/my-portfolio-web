
import { Button } from "@/components/ui/button";

interface HeroProps {
  onSectionChange: (section: string) => void;
}

const Hero = ({ onSectionChange }: HeroProps) => {
  return (
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
                onClick={() => onSectionChange("contact")}
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white"
              >
                Hire Me
              </Button>
              <Button 
                onClick={() => onSectionChange("skills")}
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
  );
};

export default Hero;
