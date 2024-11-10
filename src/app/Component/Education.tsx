import React from 'react';
import '../Component/Education.css';

interface EducationItem {
  degree: string;
  institution: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    degree: 'Intermediate in Computer Science',
    institution: 'Govt Degree College, Malir Cantt',
    description: 'Focused on software development, algorithms, and data structures.',
  },
  {
    degree: 'Matriculation in Computer Science',
    institution: 'Oxford English Public School',
    description: 'Specialized in advanced software engineering principles and practices.',
  },
];

const Education: React.FC = () => {
  return (
    <section className="education-section">
      <div className="education-container">
        <div className="education-title-wrapper">
          <h1 className="education-title">Education</h1>
        </div>
        <div className="education-grid">
          {educationData.map((item, index) => (
            <div key={index} className="education-card">
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
