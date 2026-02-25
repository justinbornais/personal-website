import React from 'react';
import Education from './Education';
import FeaturedProjects from './FeaturedProjects';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        {/* About Me Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            About Me
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed flex-1">
              <p>
                I'm currently working at <a className="text-amber-400 font-semibold" href="https://tessonics.com" target="_blank" rel="noopener noreferrer">Tessonics</a>{' '}
                as a Software Developer, where I build robust applications using a diverse tech stack including{' '}
                <span className="text-blue-400">C++</span>,{' '}
                <span className="text-cyan-400">Golang</span>,{' '}
                <span className="text-red-400">Delphi</span>,{' '}
                <span className="text-sky-400">React</span>,{' '}
                <span className="text-blue-500">TypeScript</span>,{' '}
                <span className="text-purple-400">Hugo</span>, and{' '}
                <span className="text-teal-400">Flutter</span>.
              </p>
              
              <p>
                Beyond software development, I'm a passionate musician. I play piano, organ, and guitar, and I also sing. 
                I taught piano for 7 years, helping over 20 students of all ages discover their musical potential.
              </p>
              <p>
                For the past 4 years, I've had the honor of performing at weddings and funerals, 
                providing impactful musical experiences during life's most significant occasions.
              </p>
            </div>

            <div className="lg:w-60 w-64 flex-shrink-0 mx-auto lg:mx-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-blue-500 rounded-lg transform rotate-3"></div>
                <img
                  src="/me.webp"
                  alt="Justin Bornais"
                  className="relative rounded-lg shadow-2xl w-full h-auto object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <FeaturedProjects />
        <Education />
      </div>
    </section>
  );
};

export default About;
