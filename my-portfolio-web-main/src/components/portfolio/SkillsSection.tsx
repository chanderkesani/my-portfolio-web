
const SkillsSection = () => {
  const skills = [
    { name: "Front-End Development", level: 90 },
    { name: "React", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "HTML & CSS", level: 95 },
    { name: "Firebase", level: 80 },
    { name: "AI & ML", level: 75 },
    { name: "UI/UX Design", level: 85 },
    { name: "CSS Animations", level: 80 },
  ];

  return (
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
          {skills.map((skill, index) => (
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
  );
};

export default SkillsSection;
