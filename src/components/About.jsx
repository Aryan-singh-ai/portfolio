import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title animate-on-scroll">About Me</h2>
        
        <div className="about-content animate-on-scroll">
          <div className="about-text">
            <p>
              I am a Computer Science (AIML) student with hands-on experience in Artificial Intelligence, Machine Learning, and full-stack development. I am passionate about building intelligent systems using NLP, Computer Vision, and predictive modeling.
            </p>
            <p>
              My goal is to create scalable systems and real-world AI applications that make a tangible difference. I enjoy tackling complex problems and transforming them into simple, elegant, and intelligent solutions.
            </p>
          </div>

          <div className="about-stats glass-card">
            <div className="stat-item">
              <h3 className="stat-number">5+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="stat-number">3rd</h3>
              <p className="stat-label">Place - Hackathon (MMU)</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="stat-number">8.01</h3>
              <p className="stat-label">CGPA (B.Tech CSE - AIML)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
