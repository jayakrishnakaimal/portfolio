import React from 'react';
import './Skills.css';
import { Skill } from '../../types';

const skills: Skill[] = [
  { name: 'React', level: 'Expert', category: 'Frontend' },
  { name: 'TypeScript', level: 'Advanced', category: 'Frontend' },
  { name: 'JavaScript', level: 'Expert', category: 'Frontend' },
  { name: 'HTML & CSS', level: 'Expert', category: 'Frontend' },
  { name: 'Node.js', level: 'Advanced', category: 'Backend' },
  { name: 'Express', level: 'Intermediate', category: 'Backend' },
  { name: 'PostgreSQL', level: 'Intermediate', category: 'Backend' },
  { name: 'MongoDB', level: 'Intermediate', category: 'Backend' },
  { name: 'Git', level: 'Advanced', category: 'Tools' },
  { name: 'Docker', level: 'Intermediate', category: 'DevOps' },
  { name: 'AWS', level: 'Intermediate', category: 'DevOps' },
  { name: 'REST APIs', level: 'Expert', category: 'Backend' },
];

const categories = ['Frontend', 'Backend', 'DevOps', 'Tools'] as const;

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
