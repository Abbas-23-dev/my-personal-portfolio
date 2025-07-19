import { MapPin, GraduationCap, Briefcase, Code, Award } from 'lucide-react';
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm Muhammad Abbas, a passionate React.js developer with a strong foundation in modern web development. Currently working at Pixel Square Digital Pvt Ltd, where I'm developing innovative buy-and-sell platforms that connect people and businesses.
              </p>
              {/* <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My journey in software development began at Post Graduate Jahanzeb College, where I developed a deep appreciation for clean code, user experience, and innovative solutions. I specialize in creating responsive, scalable applications using React.js, Tailwind CSS, and modern development practices.
              </p> */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
  My journey in software development began at Post Graduate Jahanzeb College, where I developed a deep appreciation for clean code, user experience, and innovative solutions. I specialize in creating responsive, scalable applications using React.js, Tailwind CSS, and modern development practices. As part of my final year project, I developed <span className='bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'>Easy Home Solutions</span> — a home maintenance and repair service app designed to address real-life challenges in remote areas, combining intuitive design with practical functionality.
</p>

              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-300">Pakistan, KPK Qambar Swat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-300">Post Graduate Jahanzeb College ( Saidu Sharif Swat )</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-300">Pixel Square Digital Pvt Ltd ( Islamabad, Bahria Town )</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center space-x-3 mb-3">
                  <Code className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-white">Technical Focus</h3>
                </div>
                <p className="text-gray-300">
                  Specializing in React.js ecosystem, modern JavaScript, and creating seamless user experiences with responsive design principles.
                </p>
              </div>
              
              <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-white">Mission</h3>
                </div>
                <p className="text-gray-300">
                  To build innovative digital solutions that make a positive impact on businesses and users worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;