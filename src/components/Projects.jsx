import { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Smart Tourist Monitoring System',
      description: 'An AI-powered system for real-time tourist monitoring, safety alerts, and crowd analysis. Features behavior analysis and data-driven visualization.',
      techStack: ['AI', 'ML', 'Web Technologies'],
      category: 'AI',
      github: 'https://github.com/Aryan-singh-ai/smart-tourist-monitoring-system',
    },
    {
      title: 'Smart Attendance System',
      description: 'Automated attendance system using face recognition and LBPH algorithm. Features a GUI using Tkinter and generates timestamped reports.',
      techStack: ['Python', 'OpenCV', 'NumPy', 'Pandas'],
      category: 'ML',
      github: 'https://github.com/Aryan-singh-ai/Attendance-System',
    },
    {
      title: 'Student Placement Predictor',
      description: 'ML models to predict student placements using academic and skill-based features. Built with a Streamlit web app for real-time predictions.',
      techStack: ['Scikit-learn', 'Pandas', 'Streamlit', 'ML'],
      category: 'ML',
      github: 'https://github.com/Aryan-singh-ai/student_placement_predictor',
    },
    {
      title: 'SAFAI (Dry Cleaning Website)',
      description: 'A modern, responsive web platform for a dry cleaning service business, featuring clean UI and interactive components.',
      techStack: ['Web Dev', 'React', 'CSS'],
      category: 'Web',
      github: 'https://github.com/Aryan-singh-ai/SAFAI-Quick-dry-cleaning-website-',
    },
    {
      title: 'Daily Reflection Tree',
      description: 'An interactive web application designed to help users track their daily reflections and mental well-being over time.',
      techStack: ['JavaScript', 'HTML/CSS', 'Web Dev'],
      category: 'Web',
      github: 'https://github.com/Aryan-singh-ai/daily-reflection-tree',
    },
  ];

  const categories = ['All', 'AI', 'ML', 'Web'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter || p.techStack.includes(filter));

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Featured Projects</h2>
        
        <div className="project-filters animate-on-scroll">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card glass-card animate-on-scroll">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <FiGithub /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
