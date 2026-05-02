import { FiBriefcase, FiAward, FiBookOpen } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Experience & Education</h2>
        
        <div className="timeline-container">
          
          <div className="timeline-item animate-on-scroll">
            <div className="timeline-icon">
              <FiBriefcase />
            </div>
            <div className="timeline-content glass-card">
              <span className="timeline-date">May 2025 – Aug 2025</span>
              <h3 className="timeline-title">AI Intern</h3>
              <h4 className="timeline-subtitle">IBM (Gurugram, Haryana)</h4>
              <ul className="timeline-list">
                <li>Developed a rule-based chatbot using Python to simulate human-like conversations and handle user queries.</li>
                <li>Designed structured conversation flows and implemented intent-based responses to enhance interaction.</li>
                <li>Built a chatbot for university enquiry system handling admissions, courses, and campus information.</li>
                <li>Improved response accuracy through testing and optimization across multiple user scenarios.</li>
                <li>Applied NLP concepts and chatbot architecture in real-world use cases.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item animate-on-scroll">
            <div className="timeline-icon">
              <FiBookOpen />
            </div>
            <div className="timeline-content glass-card">
              <span className="timeline-date">Sep 2023 – Aug 2027</span>
              <h3 className="timeline-title">B.Tech (Computer Science Engineering - AIML)</h3>
              <h4 className="timeline-subtitle">G.D. Goenka University, Gurugram</h4>
              <p className="timeline-text">
                Focusing on cutting-edge technologies in Artificial Intelligence and Machine Learning. 
                <br /><strong>CGPA: 8.01</strong>
              </p>
            </div>
          </div>

          <div className="timeline-item animate-on-scroll">
            <div className="timeline-icon" style={{ background: 'var(--accent-primary)', color: 'white' }}>
              <FiAward />
            </div>
            <div className="timeline-content glass-card highlight-card">
              <span className="timeline-date">Achievement</span>
              <h3 className="timeline-title">3rd Place – Hackathon</h3>
              <h4 className="timeline-subtitle">Maharishi Markandeshwar University</h4>
              <p className="timeline-text">
                Demonstrated strong problem-solving and teamwork skills under time constraints to deliver an innovative solution.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
