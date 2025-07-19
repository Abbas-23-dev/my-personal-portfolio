const Skills = () => {
  const skills = [
    { name: 'React.js', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 85, icon: '🟨' },
    { name: 'Tailwind CSS', level: 88, icon: '💨' },
    { name: 'Node.js', level: 75, icon: '🟢' },
    { name: 'Supabase', level: 80, icon: '🔥' },
    { name: 'Git/GitHub', level: 85, icon: '🔧' },
    { name: 'Responsive Design', level: 90, icon: '📱' },
    { name: 'API Integration', level: 82, icon: '🔗' }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-orange-500 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <div className="relative">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400 mt-2 block">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;