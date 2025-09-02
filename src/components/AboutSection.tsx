
import { Code, Rocket, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 neon-text">Who I Am</h3>
            <p className="text-gray-300 mb-4">
              I'm a passionate Software Developer specializing in mobile and web application development, with a strong foundation in Computer Science from Avanthi Institute of Engineering and Technology, class of 2024.
            </p>
            <p className="text-gray-300 mb-4">
              With 1 year of hands-on experience, I've honed my skills in creating innovative, user-friendly applications across multiple platforms and frameworks. My expertise spans React Native, Flutter, React with Vite, and Angular, allowing me to build seamless experiences across both mobile and web platforms.
            </p>
            <p className="text-gray-300 mb-4">
              I'm particularly skilled at converting websites into fully functional mobile applications, bridging the gap between web and mobile experiences for businesses.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center px-4 py-2 rounded-full bg-cyber-black border border-neon-purple/30">
                <Code size={16} className="text-neon-blue mr-2" />
                <span className="text-gray-300">React Native</span>
              </div>
              <div className="flex items-center px-4 py-2 rounded-full bg-cyber-black border border-neon-purple/30">
                <Code size={16} className="text-neon-pink mr-2" />
                <span className="text-gray-300">Flutter</span>
              </div>
              <div className="flex items-center px-4 py-2 rounded-full bg-cyber-black border border-neon-purple/30">
                <Code size={16} className="text-neon-purple mr-2" />
                <span className="text-gray-300">React</span>
              </div>
              <div className="flex items-center px-4 py-2 rounded-full bg-cyber-black border border-neon-purple/30">
                <Code size={16} className="text-neon-orange mr-2" />
                <span className="text-gray-300">Angular</span>
              </div>
            </div>
          </div>
          
          <div className="order-first lg:order-last animate-on-scroll">
            <div className="bg-cyber-black border border-neon-purple/30 rounded-lg p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-neon-purple/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-neon-blue/10 rounded-full filter blur-3xl"></div>
              
              <div className="relative z-10 space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-neon-purple/10 rounded-lg">
                    <Star className="text-neon-purple" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Professional Excellence</h4>
                    <p className="text-gray-400">Committed to delivering high-quality, performant applications that exceed client expectations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-neon-blue/10 rounded-lg">
                    <Code className="text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Technical Expertise</h4>
                    <p className="text-gray-400">Proficient in multiple frameworks with a strong foundation in computer science principles.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-neon-pink/10 rounded-lg">
                    <Rocket className="text-neon-pink" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Innovation Focused</h4>
                    <p className="text-gray-400">Always learning and implementing cutting-edge technologies to create modern solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 animate-on-scroll">
          <h3 className="text-2xl font-bold mb-8 text-center neon-text">My Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute h-full w-0.5 bg-neon-purple/30 left-1/2 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="grid grid-cols-1 gap-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h4 className="text-xl font-bold mb-2 neon-blue-text">Education</h4>
                  <p className="text-gray-300 mb-1">B.Tech in Computer Science</p>
                  <p className="text-gray-400 mb-2">Avanthi Institute of Engineering and Technology</p>
                  <p className="text-gray-500">2020 - 2024</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-neon-purple/20 border-2 border-neon-purple flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-neon-purple rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left mt-8 md:mt-0">
                  <p className="text-gray-400">
                    Completed my Computer Science degree with a focus on mobile and web application development. Gained strong fundamentals in algorithms, data structures, and software engineering principles.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0 md:order-1 order-2">
                  <p className="text-gray-400">
                    Started professional development work creating mobile applications using React Native and Flutter. Built multiple projects including chatbots, task management systems, and more.
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-neon-purple/20 border-2 border-neon-purple flex items-center justify-center z-10 md:order-2 order-1">
                  <div className="w-3 h-3 bg-neon-purple rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left mt-8 md:mt-0 order-3">
                  <h4 className="text-xl font-bold mb-2 neon-pink-text">Professional Experience</h4>
                  <p className="text-gray-300 mb-1">Mobile & Web Developer</p>
                  <p className="text-gray-500">2023 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
