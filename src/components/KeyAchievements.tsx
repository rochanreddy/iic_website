import React from 'react';

const achievements = [
  { label: 'Startups Incubated', value: 24 },
  { label: 'Events Conducted', value: 58 },
  { label: 'Patents Filed', value: 12 },
  { label: 'Awards Won', value: 9 },
];

const KeyAchievements: React.FC = () => (
  <section className="max-w-4xl mx-auto my-16 px-4">
    <h3 className="text-2xl font-semibold mb-8 text-purple-700 text-center">Key Achievements</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {achievements.map((item, idx) => (
        <div key={idx} className="bg-white/70 rounded-lg shadow p-6 flex flex-col items-center border border-slate-200/40 backdrop-blur-sm">
          <span className="text-3xl font-bold text-blue-700 mb-2">{item.value}</span>
          <span className="text-slate-700 text-sm font-medium text-center">{item.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default KeyAchievements; 