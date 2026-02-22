"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const fullText = "Software Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Anushree N</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
            <span className="border-r-2 border-purple-400 pr-1">{text}</span>
            <span className="text-purple-400">  MERN</span>
          </div>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I build powerful, scalable web applications with modern design, clean architecture, and real-world impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-purple-400 text-purple-300 rounded-full font-semibold hover:bg-purple-400 hover:text-white transform hover:scale-105 transition-all duration-300">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in the MERN stack. 
              I love creating innovative web solutions that combine beautiful design with powerful functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Technical Skills</h2>
          
          {/* Programming Languages */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">Programming Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['C', 'C++', 'Python', 'JavaScript (ES6+)'].map((skill) => (
                <div key={skill} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <h4 className="text-white font-semibold text-center">{skill}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend Development */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">Frontend Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Web Design'].map((skill) => (
                <div key={skill} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <h4 className="text-white font-semibold text-center">{skill}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Development */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">Backend Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Node.js', 'Express.js', 'RESTful APIs', 'Authentication (JWT)', 'Middleware Integration'].map((skill) => (
                <div key={skill} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <h4 className="text-white font-semibold text-center">{skill}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">Database</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['MongoDB (NoSQL)', 'SQL', 'Data Modeling', 'CRUD Operations'].map((skill) => (
                <div key={skill} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <h4 className="text-white font-semibold text-center">{skill}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">DevOps & Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Git', 'GitHub', 'Docker', 'Jenkins', 'AWS (Basics)', 'VS Code'].map((skill) => (
                <div key={skill} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <h4 className="text-white font-semibold text-center">{skill}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Computer Science Fundamentals */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">Computer Science Fundamentals</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Data Structures & Algorithms (DSA)', 'OOP', 'Operating Systems', 'Computer Networks', 'Cloud Computing', 'MVC Architecture'].map((skill) => (
                <div key={skill} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <h4 className="text-white font-semibold text-center">{skill}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Team Collaboration', 'Leadership', 'Communication', 'Adaptability', 'Analytical Thinking'].map((skill) => (
                <div key={skill} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <h4 className="text-white font-semibold text-center">{skill}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Campus Connect */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-2">CampusConnect</h3>
              <p className="text-gray-300 mb-4">Dynamic platform that keeps students informed about placement interviews with real-time updates, schedules, and insights.</p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-500/30 text-purple-300 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-500/30 text-blue-300 rounded-full text-sm">Node.js</span>
              </div>
              <a href="https://github.com/ANUSHREE52/Campus-Connect" target="_blank" className="text-purple-400 hover:text-purple-300 transition-colors">
                View on GitHub →
              </a>
            </div>

            {/* Agri Market */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="h-40 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-2">AgriMarket</h3>
              <p className="text-gray-300 mb-4">Connects farmers directly to markets, enabling better pricing and increased profitability without middlemen.</p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-green-500/30 text-green-300 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-500/30 text-blue-300 rounded-full text-sm">MongoDB</span>
              </div>
              <a href="https://github.com/ANUSHREE52/Agri-Market" target="_blank" className="text-purple-400 hover:text-purple-300 transition-colors">
                View on GitHub →
              </a>
            </div>

            {/* EduPing */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-2">EduPing</h3>
              <p className="text-gray-300 mb-4">Automatically extracts key information from long emails and reminds students about deadlines, venues, and events.</p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/30 text-blue-300 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-yellow-500/30 text-yellow-300 rounded-full text-sm">Node.js</span>
              </div>
              <a href="https://github.com/ANUSHREE52/Full-Stack" target="_blank" className="text-purple-400 hover:text-purple-300 transition-colors">
                View on GitHub →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Experience</h2>
          <div className="space-y-8">
            
            {/* Software Engineer Intern */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Software Engineer Intern (MERN Stack)</h3>
                  <p className="text-purple-300 mb-4">Current</p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Developing scalable full-stack web applications using MongoDB, Express.js, React.js, and Node.js</li>
                    <li>• Designing and implementing RESTful APIs and backend services with structured database schemas</li>
                    <li>• Collaborating in Git-based workflows, contributing to feature development, bug fixes, and performance optimization</li>
                    <li>• Writing clean, maintainable, and production-ready code following best engineering practices</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Web Development Intern */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Web Development Intern – Intrainz</h3>
                  <p className="text-purple-300 mb-4">March 2023 – June 2023</p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Built responsive web applications and implemented frontend and backend functionalities</li>
                    <li>• Improved user experience through optimized UI design and structured development practices</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Frontend Web Development Intern */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Frontend Web Development Intern – IBM SkillsBuild</h3>
                  <p className="text-purple-300 mb-4">June 2024 – August 2024</p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Developed interactive and responsive user interfaces using modern frontend technologies</li>
                    <li>• Strengthened understanding of UI/UX principles and client-side performance optimization</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Hack Kshetra 2024 */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-white font-semibold mb-2">Hack Kshetra 2024</h3>
              <p className="text-gray-300 text-sm">Attended hackathon held in Vidhyavardhaka college of engineering</p>
            </div>

            {/* EDGE AI 2024 */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-white font-semibold mb-2">EDGE AI 2024</h3>
              <p className="text-gray-300 text-sm">Participated in the artificial intelligence competition</p>
            </div>

            {/* Additional placeholder achievements */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl mb-3">🌟</div>
              <h3 className="text-white font-semibold mb-2">Full Stack Developer</h3>
              <p className="text-gray-300 text-sm">MERN Stack Specialist</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-white font-semibold mb-2">Open Source Contributor</h3>
              <p className="text-gray-300 text-sm">Active GitHub contributor</p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Get In Touch</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <p className="text-gray-300 mb-6">I'm always interested in hearing about new opportunities and exciting projects.</p>
            <div className="flex justify-center gap-4 mb-6">
              <a href="mailto:anushreenwork@gmail.com" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Email Me
              </a>
              <a href="https://github.com/ANUSHREE52" className="px-6 py-3 border-2 border-purple-400 text-purple-300 rounded-full font-semibold hover:bg-purple-400 hover:text-white transform hover:scale-105 transition-all duration-300">
                GitHub
              </a>
            </div>
            <p className="text-gray-400">anushreenwork@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400"> 2024 Anushree N. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/ANUSHREE52" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
