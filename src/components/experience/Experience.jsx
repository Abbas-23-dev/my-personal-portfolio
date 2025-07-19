import { Briefcase, Calendar, Star } from 'lucide-react';
const Experience = () => {
  const experiences = [
    {
      title: "React.js Developer",
      company: "Pixel Square Digital Pvt Ltd",
      period: "2025 - Present",
      description: "Developing buy-and-sell platforms with modern React.js architecture. Responsible for creating responsive user interfaces, implementing state management, and optimizing application performance.",
      achievements: [
        "Built scalable e-commerce solutions",
        "Implemented responsive design systems",
        "Optimized application performance by 40%"
      ]
    },
    // {
    //   title: "Student Developer",
    //   company: "Post Graduate Jahanzeb College",
    //   period: "2021 - 2025",
    //   description: "Focused on learning modern web development technologies and building personal projects. Gained expertise in React.js, JavaScript, and responsive design principles.",
    //   achievements: [
    //     "Completed advanced React.js coursework",
    //     "Built multiple portfolio projects",
    //     "Collaborated on team-based development projects"
    //   ]
    // },

    {
  title: "Student Developer",
  company: "Post Graduate Jahanzeb College",
  period: "2021 - 2025",
  description: "Focused on learning modern web development technologies and building personal projects. Developed Easy Home Solutions, a smart home repair app using React and Supabase",
  achievements: [
    "Completed advanced React.js coursework",
    "Built multiple portfolio projects",
    "Created Easy Home Solutions using Supabase"
  ]
}
,
    {
  title: "Frontend Developer Intern",
  company: "Ford9 Solutions",
  period: "Aug 2024 - Mar 2025",
  description: "Completed a 6-month internship focusing on frontend development. Gained hands-on experience in React.js, Tailwind CSS, and modern UI/UX best practices by working on real-world client projects.",
  achievements: [
    "Developed and optimized responsive user interfaces using React.js & Supabase",
    "Implemented clean, reusable components with Tailwind CSS",
    "Collaborated with senior developers in Agile team environments"
  ]
}

  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1 bg-black/50 p-6 rounded-lg border border-gray-800">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <span className="text-orange-500 font-semibold flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </span>
                  </div>
                  
                  <h4 className="text-xl text-orange-400 mb-4">{exp.company}</h4>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-orange-500" />
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {index < experiences.length - 0 && (
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-red-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;