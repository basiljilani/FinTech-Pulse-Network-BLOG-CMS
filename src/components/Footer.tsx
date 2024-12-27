import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1E] text-gray-300 relative">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-blue-950/10" />
      
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '3rem 3rem',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Activity className="h-8 w-8 text-[#8B5CF6]" />
              <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Fintech Pulse Network</span>
              <span className="ml-2 text-xs text-gray-400">Powered by Basil Consulting</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Leading the revolution in AI-powered financial content automation. Transform your content creation process with cutting-edge technology.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-[#8B5CF6] transform hover:scale-110 transition-all duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#8B5CF6] transform hover:scale-110 transition-all duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#8B5CF6] transform hover:scale-110 transition-all duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#8B5CF6] transform hover:scale-110 transition-all duration-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center group cursor-pointer transition-all duration-300 hover:translate-x-2">
                <Mail className="h-5 w-5 mr-3 text-[#8B5CF6] group-hover:text-[#9F7AEA] transition-colors duration-300" />
                <span className="group-hover:text-[#9F7AEA] transition-colors duration-300">info@basilconsulting.net</span>
              </li>
              <li className="flex items-center group cursor-pointer transition-all duration-300 hover:translate-x-2">
                <Phone className="h-5 w-5 mr-3 text-[#8B5CF6] group-hover:text-[#9F7AEA] transition-colors duration-300" />
                <span className="group-hover:text-[#9F7AEA] transition-colors duration-300">+92 51 89 55 777</span>
              </li>
              <li className="flex items-start group cursor-pointer transition-all duration-300 hover:translate-x-2">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-[#8B5CF6] group-hover:text-[#9F7AEA] transition-colors duration-300" />
                <span className="group-hover:text-[#9F7AEA] transition-colors duration-300">Evacuee Trust Complex, Agha Khan Rd, F-5/1, Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              {new Date().getFullYear()} Fintech Pulse Network. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-[#9F7AEA] transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#9F7AEA] transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#9F7AEA] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
