
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 cyber-grid-animated">
      <div className="container mx-auto px-4">
        <div className="mb-8 animate-slideLeft">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-neon-purple transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
        
        <div className="text-center mb-16 animate-zoomIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Contact Me</span>
          </h1>
          <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full animate-pulse-neon"></div>
        </div>
      </div>
      
      <ContactSection />
    </div>
  );
};

export default Contact;
