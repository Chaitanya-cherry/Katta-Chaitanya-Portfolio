import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import myImage from "../assets/images/myimage.jpg"; // Explicitly import the image

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col animate-slideRight">
            <p className="text-neon-blue text-sm md:text-base uppercase tracking-wider mb-2">Welcome to my portfolio</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="neon-text">Chaitnaya</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              Mobile & Web Developer
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Specialized in <span className="neon-pink-text">React Native</span>, <span className="neon-blue-text">Flutter</span>, <span className="neon-text">React</span>, and <span className="neon-orange-text">Angular</span>. Crafting innovative digital experiences one line of code at a time.
            </p>
           
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="bg-neon-purple text-white px-8 py-3 rounded-md hover:bg-neon-purple/80 transition-all duration-300 animate-pulse-neon"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="border border-neon-blue text-neon-blue px-8 py-3 rounded-md hover:bg-neon-blue/10 transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
         
          <div className="relative order-first lg:order-last">
            <div className="w-full h-[400px] relative animate-slideLeft">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/30 via-neon-blue/20 to-neon-pink/30 rounded-lg animate-pulse-neon">
                <div className="absolute inset-1 bg-cyber-black rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBmaWxsPSIjMTIxMjEyIj48L3JlY3Q+CjxwYXRoIGQ9Ik0yOCA2NkwwIDUwTDAgMTZMMjggMEw1NiAxNkw1NiA1MEwyOCA2NkwyOCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzliODdmNSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+CjxwYXRoIGQ9Ik0yOCAwTDI4IDY2TDAgNTBMMDAgNTBMMjggNjZMMjggNjZMNTEgNTBMMzYgNTBMMjggMEwyOCAwIiBmZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzNDM0YwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={myImage}
                      alt="Developer Portrait"
                      className="w-full h-full object-contain object-center rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="flex justify-center mt-12">
          <a
            href="#about"
            className="flex flex-col items-center text-gray-400 hover:text-neon-purple transition-colors duration-300"
          >
            <span className="text-sm mb-2">Explore More</span>
            <ArrowDown className="animate-float" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;