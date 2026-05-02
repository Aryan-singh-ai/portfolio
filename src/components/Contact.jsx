import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info animate-on-scroll">
            <h3 className="contact-heading">Let's talk about everything!</h3>
            <p className="contact-text">
              Feel free to reach out for collaborations, opportunities, or just to say hi. I'll try my best to get back to you!
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <FiPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91-9936821586</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FiMail />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>aryan.singh@example.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiMapPin />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Gurugram, Haryana</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form glass-card animate-on-scroll" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="your@email.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="How can I help you?" required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <FiSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
