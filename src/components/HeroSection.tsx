import React from 'react';

const HeroSection: React.FC = () => (
  <section className="flex flex-col items-center justify-center min-h-[70vh] pt-24 pb-12 text-center">
    <div className="mb-6">
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">
        Innovate
      </h1>
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        Create Transform
      </h2>
    </div>
    <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
      Empowering the next generation of innovators through cutting-edge technology, collaborative research, and entrepreneurial excellence.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
        Join Us
      </button>
      <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-full font-medium hover:bg-white/50 transition-all duration-300">
        Explore Events
      </button>
    </div>
  </section>
);

export default HeroSection; 