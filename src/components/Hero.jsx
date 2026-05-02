import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content animate-on-scroll is-visible">
          <h2 className="greeting">Hi, I'm</h2>
          <h1 className="name">Aryan Singh</h1>
          <h3 className="role">AI/ML Developer</h3>
          <p className="tagline">
            Building intelligent AI solutions for real-world problems.
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects <FiArrowRight />
            </a>
            <a href="/resume.pdf" download="Aryan_Singh_Resume.pdf" className="btn btn-outline" style={{ border: '2px solid var(--accent-primary)', color: 'var(--accent-primary)' }}>
              Download Resume <FiDownload />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/Aryan-singh-ai" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/aryan-singh-9b1b7230a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:aryan.singh@example.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper animate-on-scroll is-visible">
          <div className="hero-image-glow"></div>
          {/* Ensure the user's provided profile picture is placed in the public folder and named profile.jpeg */}
          <img src="/profile.jpeg" alt="Aryan Singh" className="hero-image" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x400?text=Aryan+Singh' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
