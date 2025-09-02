
import { useState } from "react";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  
  const skillCategories = {
    frontend: [
      { name: "React Native", proficiency: 90 },
      { name: "Flutter", proficiency: 85 },
      { name: "React", proficiency: 90 },
      { name: "Angular", proficiency: 80 },
      { name: "HTML5/CSS3", proficiency: 95 },
      { name: "JavaScript/TypeScript", proficiency: 90 },
    ],
    backend: [
      { name: "Node.js", proficiency: 80 },
      { name: "Express", proficiency: 75 },
      { name: "Firebase", proficiency: 85 },
      { name: "MongoDB", proficiency: 70 },
      { name: "RESTful APIs", proficiency: 85 },
    ],
    tools: [
      { name: "Git/GitHub", proficiency: 90 },
      { name: "Figma/Adobe XD", proficiency: 75 },
      { name: "VS Code", proficiency: 95 },
      { name: "Jira/Trello", proficiency: 80 },
      { name: "NPM/Yarn", proficiency: 90 },
    ],
  };

  return (
    <section id="skills" className="py-20 px-4 bg-cyber-dark dark:bg-cyber-dark light:bg-cyber-light-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll animate-zoomIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient animate-glow">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full animate-pulse-neon"></div>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mt-6 max-w-2xl mx-auto">
            I've worked with a variety of technologies to deliver exceptional digital experiences. Here's a selection of my technical skills.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll animate-slideUp">
          <button
            onClick={() => setActiveTab("frontend")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTab === "frontend"
                ? "bg-neon-purple text-white animate-pulse-slow"
                : "bg-cyber-black text-gray-400 hover:bg-neon-purple/10 hover:text-neon-purple"
            }`}
          >
            Mobile & Frontend
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTab === "backend"
                ? "bg-neon-blue text-white animate-pulse-slow"
                : "bg-cyber-black text-gray-400 hover:bg-neon-blue/10 hover:text-neon-blue"
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveTab("tools")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTab === "tools"
                ? "bg-neon-pink text-white animate-pulse-slow"
                : "bg-cyber-black text-gray-400 hover:bg-neon-pink/10 hover:text-neon-pink"
            }`}
          >
            Tools & Software
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
          {skillCategories[activeTab as keyof typeof skillCategories].map((skill, index) => (
            <div 
              key={index} 
              className="cyber-card group" 
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: "zoomIn 0.5s ease-out forwards",
                opacity: 0 
              }}
            >
              <h4 className="text-white font-semibold mb-3 flex justify-between">
                <span>{skill.name}</span>
                <span className={`
                  ${activeTab === "frontend" ? "text-neon-purple" : ""}
                  ${activeTab === "backend" ? "text-neon-blue" : ""}
                  ${activeTab === "tools" ? "text-neon-pink" : ""}
                `}>
                  {skill.proficiency}%
                </span>
              </h4>
              <div className="w-full h-2 bg-cyber-black rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ease-out
                    ${activeTab === "frontend" ? "bg-neon-purple" : ""}
                    ${activeTab === "backend" ? "bg-neon-blue" : ""}
                    ${activeTab === "tools" ? "bg-neon-pink" : ""}
                  `}
                  style={{ 
                    width: `0%`, 
                    transition: `width 1.5s ease-in-out`,
                    animation: `slideRight 1.5s ease-out forwards ${index * 0.2}s`
                  }}
                  onAnimationEnd={(e) => {
                    (e.target as HTMLDivElement).style.width = `${skill.proficiency}%`;
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-10 text-center neon-text animate-on-scroll animate-glow-pulse">My Tech Stack</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="cyber-card group animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              <div className="text-neon-purple text-4xl font-bold mb-4 animate-float">01</div>
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-neon-purple transition-colors">Mobile Development</h4>
              <ul className="text-gray-400 space-y-2">
                <li className="animate-slideRight" style={{ animationDelay: '0.1s', opacity: 0 }}>• React Native</li>
                <li className="animate-slideRight" style={{ animationDelay: '0.2s', opacity: 0 }}>• Flutter</li>
                <li className="animate-slideRight" style={{ animationDelay: '0.3s', opacity: 0 }}>• Mobile UI/UX</li>
                <li className="animate-slideRight" style={{ animationDelay: '0.4s', opacity: 0 }}>• Cross-Platform Apps</li>
                <li className="animate-slideRight" style={{ animationDelay: '0.5s', opacity: 0 }}>• Native APIs</li>
              </ul>
            </div>
            
            <div className="cyber-card group animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="text-neon-blue text-4xl font-bold mb-4 animate-float">02</div>
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-neon-blue transition-colors">Web Development</h4>
              <ul className="text-gray-400 space-y-2">
                <li className="animate-slideRight" style={{ animationDelay: '0.2s', opacity: 0 }}>• React & Vite</li>
                <li className="animate-slideRight" style={{ animationDelay: '0.3s', opacity: 0 }}>• Angular</li>
                <li className="animate-slideRight" style={{ animationDelay: '0.4s', opacity: 0 }}>• Responsive Design</li>
                <li className="animate-slideRight" style={{ animationDelay: '0.5s', opacity: 0 }}>• Modern JavaScript</li>
                <li className="animate-slideRight" style={{ animationDelay: '0.6s', opacity: 0 }}>• CSS/SASS</li>
              </ul>
            </div>
            
            <div className="cyber-card group animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="text-neon-pink text-4xl font-bold mb-4 animate-float">03</div>
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-neon-pink transition-colors">Backend Services</h4>
              <ul className="text-gray-400 space-y-2">
                <li className="animate-slideRight" style={{ animationDelay: '0.3s', opacity: 0 }}>• Node.js</li>
                <li className="animate-slideRight" style={{ animationDelay: '0.4s', opacity: 0 }}>• Firebase</li>
                <li className="animate-slideRight" style={{ animationDelay: '0.5s', opacity: 0 }}>• RESTful APIs</li>
                <li className="animate-slideRight" style={{ animationDelay: '0.6s', opacity: 0 }}>• Database Design</li>
                <li className="animate-slideRight" style={{ animationDelay: '0.7s', opacity: 0 }}>• Authentication</li>
              </ul>
            </div>
            
            <div className="cyber-card group animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="text-neon-orange text-4xl font-bold mb-4 animate-float">04</div>
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-neon-orange transition-colors">Additional Skills</h4>
              <ul className="text-gray-400 space-y-2">
                <li className="animate-slideRight" style={{ animationDelay: '0.4s', opacity: 0 }}>• Web to Mobile Conversion</li>
                <li className="animate-slideRight" style={{ animationDelay: '0.5s', opacity: 0 }}>• App State Management</li>
                <li className="animate-slideRight" style={{ animationDelay: '0.6s', opacity: 0 }}>• CI/CD Integration</li>
                <li className="animate-slideRight" style={{ animationDelay: '0.7s', opacity: 0 }}>• Code Optimization</li>
                <li className="animate-slideRight" style={{ animationDelay: '0.8s', opacity: 0 }}>• Testing & Debugging</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* New animated section: Certifications or Recognition */}
        <div className="mt-20 animate-on-scroll">
          <h3 className="text-2xl font-bold mb-10 text-center neon-text">Latest Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4 animate-float">
            <span className="px-4 py-2 rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30 animate-pulse-slow">Blockchain</span>
            <span className="px-4 py-2 rounded-full bg-neon-blue/20 text-neon-blue border border-neon-blue/30 animate-pulse-slow" style={{animationDelay: "0.5s"}}>AR/VR</span>
            <span className="px-4 py-2 rounded-full bg-neon-pink/20 text-neon-pink border border-neon-pink/30 animate-pulse-slow" style={{animationDelay: "1s"}}>AI Integration</span>
            <span className="px-4 py-2 rounded-full bg-neon-orange/20 text-neon-orange border border-neon-orange/30 animate-pulse-slow" style={{animationDelay: "1.5s"}}>GraphQL</span>
            <span className="px-4 py-2 rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30 animate-pulse-slow" style={{animationDelay: "2s"}}>Serverless</span>
            <span className="px-4 py-2 rounded-full bg-neon-blue/20 text-neon-blue border border-neon-blue/30 animate-pulse-slow" style={{animationDelay: "2.5s"}}>PWA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
