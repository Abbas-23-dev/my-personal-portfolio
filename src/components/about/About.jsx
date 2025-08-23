import { MapPin, GraduationCap, Briefcase, Code, Award } from 'lucide-react';
import { motion } from 'framer-motion';

// Reusable animation variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.17, 0.67, 0.83, 0.67], // smooth custom easing
    },
  },
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-900"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible" // 🔥 triggers only when scrolled into view
      viewport={{ once: true, amount: 0.2 }} // once=true ensures it won't replay on refresh
    >
      <div className="container mx-auto px-4">
        <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm Muhammad Abbas, a passionate React.js developer with a strong foundation in modern web development. Currently working at Pixel Square Digital Pvt Ltd, where I'm developing innovative buy-and-sell platforms that connect people and businesses.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My journey in software development began at Post Graduate Jahanzeb College, where I developed a deep appreciation for clean code, user experience, and innovative solutions. I specialize in creating responsive, scalable applications using React.js, Tailwind CSS, and modern development practices. As part of my final year project, I developed <span className='bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'>Easy Home Solutions</span> — a home maintenance and repair service app designed to address real-life challenges in remote areas, combining intuitive design with practical functionality.
              </p>

              <div className="space-y-4">
                <motion.div className="flex items-center space-x-3" variants={fadeInUp}>
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-300">Pakistan, KPK Qambar Swat</span>
                </motion.div>
                <motion.div className="flex items-center space-x-3" variants={fadeInUp}>
                  <GraduationCap className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-300">Post Graduate Jahanzeb College ( Saidu Sharif Swat )</span>
                </motion.div>
                <motion.div className="flex items-center space-x-3" variants={fadeInUp}>
                  <Briefcase className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-300">Pixel Square Digital Pvt Ltd ( Islamabad, Bahria Town )</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="space-y-6" variants={fadeInUp}>
              <motion.div
                className="bg-black/50 p-6 rounded-lg border border-gray-800"
                variants={fadeInUp}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Code className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-white">Technical Focus</h3>
                </div>
                <p className="text-gray-300">
                  Specializing in React.js ecosystem, modern JavaScript, and creating seamless user experiences with responsive design principles.
                </p>
              </motion.div>

              <motion.div
                className="bg-black/50 p-6 rounded-lg border border-gray-800"
                variants={fadeInUp}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-white">Mission</h3>
                </div>
                <p className="text-gray-300">
                  To build innovative digital solutions that make a positive impact on businesses and users worldwide.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
