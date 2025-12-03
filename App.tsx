import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <ContentSection
          id="features"
          subtitle="Capabilities"
          title="Designed for Performance"
          content="Our navigation system utilizes the latest React hooks to ensure 60fps animations. By leveraging CSS transitions combined with state-driven class switching, we achieve buttery smooth effects without layout thrashing."
          bgColor="bg-white"
        />
        
        <ContentSection
          id="services"
          subtitle="Services"
          title="Adaptive User Interfaces"
          content="We specialize in creating interfaces that respond intuitively to user behavior. Whether it is a scroll-triggered header transformation or a complex mega-menu interaction, our components are built to delight."
          bgColor="bg-slate-50"
        />

        <ContentSection
          id="about"
          subtitle="About Us"
          title="Crafting Digital Experiences"
          content="Founded on the principles of clarity and usability, our team is dedicated to pushing the boundaries of what is possible on the web. We believe navigation is not just a utility, but the backbone of user experience."
          bgColor="bg-white"
        />
        
         <ContentSection
          id="contact"
          subtitle="Get in Touch"
          title="Start Your Project"
          content="Ready to implement a high-performance navigation system in your next project? Reach out to us for consultation and custom development services tailored to your specific needs."
          bgColor="bg-indigo-50"
        />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
                <span className="text-white text-2xl font-bold block mb-4">Lumina</span>
                <p className="max-w-sm">Building the future of web interaction, one component at a time.</p>
            </div>
            <div>
                <h4 className="text-white font-semibold mb-4">Links</h4>
                <ul className="space-y-2">
                    <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                    <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                    <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-semibold mb-4">Social</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Lumina UI. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed with Tailwind CSS & React</p>
        </div>
      </footer>
    </div>
  );
};

export default App;