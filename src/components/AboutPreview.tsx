import React from 'react';

const AboutPreview: React.FC = () => (
  <section className="max-w-2xl mx-auto my-16 text-center px-4">
    <h3 className="text-2xl font-semibold mb-4 text-blue-700">About IIC</h3>
    <p className="text-slate-700 mb-4">
      The Innovation & Incubation Center (IIC) is dedicated to fostering a culture of creativity, entrepreneurship, and research among students and faculty. We provide resources, mentorship, and a collaborative environment to turn innovative ideas into impactful solutions.
    </p>
    <a href="#" className="inline-block text-blue-600 font-medium hover:underline transition-colors duration-200">
      Read More
    </a>
  </section>
);

export default AboutPreview; 