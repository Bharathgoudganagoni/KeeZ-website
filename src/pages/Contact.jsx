import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Contact() {
  const location = useLocation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [course, setCourse] = useState('fullstack')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (location.state?.selectedCourse) {
      setCourse(location.state.selectedCourse)
    }
  }, [location.state])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for registering! We will contact you shortly.')
    setName('')
    setEmail('')
    setCourse('fullstack')
    setMessage('')
  }

  return (
    <section id="contact" className="page-section active">
      <div className="section-header-centered">
        <span className="badge">Join Now</span>
        <h2 className="section-title">Get in Touch & Start Learning</h2>
        <p className="section-subtitle-centered">Have questions or ready to enroll? Reach out to us, and our team will get back to you within 24 hours.</p>
      </div>

      <div className="contact-grid">
        {/* Contact Info Card */}
        <div className="contact-card info-card">
          <h3>Contact Information</h3>
          <p className="contact-intro">Reach out to us directly or visit our center in Hyderabad's tech hub.</p>
          
          <div className="contact-details-list">
            <div className="contact-detail-item">
              <span className="contact-icon">📍</span>
              <div className="contact-text">
                <strong>Location</strong>
                <span>HITEC City, Hyderabad, India</span>
              </div>
            </div>
            <div className="contact-detail-item">
              <span className="contact-icon">📞</span>
              <div className="contact-text">
                <strong>Phone</strong>
                <a href="tel:+919704399488">+91 97043 99488</a>
              </div>
            </div>
            <div className="contact-detail-item">
              <span className="contact-icon">✉️</span>
              <div className="contact-text">
                <strong>Email</strong>
                <a href="mailto:Srikanth@Keezenix.com">Srikanth@Keezenix.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Registration / Contact Form */}
        <div className="contact-card form-card">
          <h3>Send a Message / Registration</h3>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input 
                  type="text" 
                  id="contact-name" 
                  className="form-control" 
                  placeholder="Enter your name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
              </div>
              <div className="form-group" style={{ marginTop: 0 }}>
                <label htmlFor="contact-email">Email Address</label>
                <input 
                  type="email" 
                  id="contact-email" 
                  className="form-control" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-course">Program of Interest</label>
              <select 
                id="contact-course" 
                className="form-control"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                <option value="fullstack">Full Stack Development</option>
                <option value="python">Python Automation</option>
                <option value="ai">Full Stack AI</option>
                <option value="growth">Growth Engineering</option>
                <option value="analytics">Data Analytics & BD</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message (Optional)</label>
              <textarea 
                id="contact-message" 
                className="form-control" 
                rows="3" 
                placeholder="Tell us about your learning goals..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="cta-btn submit-btn" style={{ width: '100%' }}>Join Now</button>
          </form>
        </div>
      </div>
    </section>
  )
}
