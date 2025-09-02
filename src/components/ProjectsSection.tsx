import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "AI Chatbot Assistant",
      description: "An AI chatbot designed to assist farmers, available in 4 languages (English, Hindi, Tamil, Telugu). Features speech-to-text for prompts and text-to-speech for easy response comprehension.",
      image: "https://placehold.co/800x600/121212/9b87f5?text=Chatbot+App",
      category: "react-native",
      technologies: ["React Native", "Node.js", "NLP API", "Speech-to-Text", "Text-to-Speech"]
    },
    {
      id: 2,
      title: "Task Management System",
      description: "An app designed to assign tasks to employees, monitor attendance and daily tasks. Supports 3 user roles with distinct responsibilities, and allows high-end users to send broadcast notifications to all app users.",
      image: "https://placehold.co/800x600/121212/33C3F0?text=Task+Manager",
      category: "flutter",
      technologies: ["Flutter", "Firebase", "Material Design"]
    },
    {
      id: 3,
      title: "Employee Tracking Platform",
      description: "A Flutter-based mobile app focused on sales and call center employees. Tracks daily login/logout times, shares call history with head users, and enhances operational functionality and analysis.",
      image: "https://placehold.co/800x600/121212/D946EF?text=Employee+Tracker",
      category: "flutter",
      technologies: ["Flutter", "TypeScript", "Chart.js"]
    },
    {
      id: 4,
      title: "Diet Planner App",
      description: "A Flutter mobile app with two user types: Doctor and Patient. Doctors assign diet plans, patients receive plans, download them as PDFs, and get alarms for diet timings to ensure adherence.",
      image: "https://placehold.co/800x600/121212/F97316?text=Diet+Planner",
      category: "flutter",
      technologies: ["Flutter", "Redux", "Nutrition API"]
    },
    {
      id: 5,
      title: "Navigation Application",
      description: "A Flutter mobile app available in 4 languages (English, Hindi, Telugu, Tamil). Tracks drivers' live locations, displays from/to locations for accurate navigation, and monitors driver movements.",
      image: "https://placehold.co/800x600/121212/9b87f5?text=Navigation+App",
      category: "flutter",
      technologies: ["Flutter", "Maps API", "Geolocation"]
    },
    {
      id: 6,
      title: "Notification Service",
      description: "Initially an Angular website for notifications, quotations, and analytics, displaying daily sales, profits, and yearly sales graphs. Later converted into a mobile app.",
      image: "https://placehold.co/800x600/121212/33C3F0?text=Notification+App",
      category: "angular",
      technologies: ["Angular", "Firebase", "Push Notifications"]
    },
    {
      id: 7,
      title: "SaleDesk E-Commerce",
      description: "A customizable legacy e-commerce product for businesses, featuring real-time inventory, login-based dashboards, stock management, sale invoices, data analytics, finance management, and employee management.",
      image: "https://placehold.co/800x600/121212/22D3EE?text=SaleDesk",
      category: "angular",
      technologies: ["Angular", ".NET", "Azure", "SQL"]
    },
  ];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Check out some of my recent work across different platforms and technologies.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
              filter === "all"
                ? "bg-neon-purple text-white"
                : "bg-cyber-black text-gray-400 hover:bg-neon-purple/10 hover:text-neon-purple"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("react-native")}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
              filter === "react-native"
                ? "bg-neon-pink text-white"
                : "bg-cyber-black text-gray-400 hover:bg-neon-pink/10 hover:text-neon-pink"
            }`}
          >
            React Native
          </button>
          <button
            onClick={() => setFilter("flutter")}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
              filter === "flutter"
                ? "bg-neon-blue text-white"
                : "bg-cyber-black text-gray-400 hover:bg-neon-blue/10 hover:text-neon-blue"
            }`}
          >
            Flutter
          </button>
          <button
            onClick={() => setFilter("react")}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
              filter === "react"
                ? "bg-neon-purple text-white"
                : "bg-cyber-black text-gray-400 hover:bg-neon-purple/10 hover:text-neon-purple"
            }`}
          >
            React
          </button>
          <button
            onClick={() => setFilter("angular")}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
              filter === "angular"
                ? "bg-neon-orange text-white"
                : "bg-cyber-black text-gray-400 hover:bg-neon-orange/10 hover:text-neon-orange"
            }`}
          >
            Angular
          </button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="cyber-card group animate-on-scroll overflow-hidden">
              <div className="relative overflow-hidden mb-6 rounded-md">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className={`
                    inline-block px-3 py-1 text-xs font-semibold rounded-full
                    ${project.category === 'react-native' ? 'bg-neon-pink/20 text-neon-pink' : ''}
                    ${project.category === 'flutter' ? 'bg-neon-blue/20 text-neon-blue' : ''}
                    ${project.category === 'react' ? 'bg-neon-purple/20 text-neon-purple' : ''}
                    ${project.category === 'angular' ? 'bg-neon-orange/20 text-neon-orange' : ''}
                  `}>
                    {project.category.split('-').join(' ').toUpperCase()}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-purple transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-cyber-black px-2 py-1 rounded text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Link
                to={`/projects/${project.id}`}
                className="inline-flex items-center text-neon-purple hover:underline"
              >
                View Details <ExternalLink size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-block border-2 border-neon-purple text-neon-purple px-8 py-3 rounded-md hover:bg-neon-purple hover:text-white transition-all duration-300 animate-pulse-neon"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;