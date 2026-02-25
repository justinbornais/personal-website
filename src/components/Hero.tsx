import React from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Justin Bornais",
  subtitle = "Software Developer, Musician"
}) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 lg:p-12 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800">
      <div className="text-center max-w-4xl mx-auto">
        <p className="text-lg md:text-xl text-gray-400 mb-4 tracking-wide uppercase">
          Hello, my name is
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-blue-500 to-white bg-clip-text text-transparent bg-[length:400%] animate-gradient">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="#about"
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Learn More
          </a>
          <a
            href="/personal-website/blog"
            className="px-8 py-3 border border-gray-500 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            Read Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
