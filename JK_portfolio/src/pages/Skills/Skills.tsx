import React from 'react';
import './Skills.css';
import { Skill } from '../../types';

const skills: Skill[] = [
  { name: 'Problem framing', level: 'Expert', category: 'Strategy' },
  { name: 'Research & discovery', level: 'Advanced', category: 'Strategy' },
  { name: 'Metrics & ROI storytelling', level: 'Advanced', category: 'Strategy' },
  { name: 'Design systems', level: 'Expert', category: 'Systems' },
  { name: 'Design tokens', level: 'Advanced', category: 'Systems' },
  { name: 'Governance & adoption', level: 'Expert', category: 'Systems' },
  { name: 'Team building & mentorship', level: 'Expert', category: 'Leadership' },
  { name: 'Cross-functional influence', level: 'Expert', category: 'Leadership' },
  { name: 'DesignOps', level: 'Advanced', category: 'Leadership' },
  { name: 'Prototyping & usability testing', level: 'Advanced', category: 'Craft' },
  { name: 'Accessibility', level: 'Advanced', category: 'Craft' },
];

const categories = ['Strategy', 'Systems', 'Leadership', 'Craft'] as const;

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My <span>Skills</span></h2>
        {categories.map((cat) => {
          const catSkills = skills.filter((s) => s.category === cat);
          if (catSkills.length === 0) return null;
          return (
            <div key={cat} className="skills__group">
              <h3 className="skills__category">{cat}</h3>
              <div className="skills__grid">
                {catSkills.map((skill) => (
                  <div key={skill.name} className="skills__card">
                    <span className="skills__name">{skill.name}</span>
                    <span className={`skills__level skills__level--${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
