import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Querying',
      skills: ['Python', 'JavaScript', 'C++', 'SQL'],
    },
    {
      title: 'AI & ML',
      skills: ['Transformers', 'LLMs', 'LSTM', 'Prompt Engineering', 'Model Evaluation', 'Fine-tuning'],
    },
    {
      title: 'Computer Vision',
      skills: ['OpenCV', 'Object Detection', 'Image Processing'],
    },
    {
      title: 'Web Development',
      skills: ['React', 'Node.js', 'Express', 'REST APIs'],
    },
    {
      title: 'Databases & Tools',
      skills: ['MongoDB', 'Git', 'Streamlit', 'Jupyter Notebook', 'Google Colab'],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Technical Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category glass-card animate-on-scroll">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
