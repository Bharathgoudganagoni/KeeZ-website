import React from 'react'

export default function About() {
  return (
    <section id="about" className="page-section active">
      <div className="hero-section">
        <span className="badge">Who We Are</span>
        <h2 className="hero-title">Empowering Students Through <br/><span className="gradient-text">Practical Learning</span></h2>
        <p className="hero-desc">KeeZ CAMPUS is dedicated to bridging the gap between academic theory and industry demands. We offer affordable, highly structured, mentor-led programs designed to help you land your dream tech role.</p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <div className="about-icon-wrapper blue-bg">🚀</div>
          <h3>Our Mission</h3>
          <p>To provide high-quality, practical upskilling opportunities at student-friendly prices. We believe money should never be a barrier to education.</p>
        </div>
        <div className="about-card">
          <div className="about-icon-wrapper purple-bg">💻</div>
          <h3>Practical Focus</h3>
          <p>Forget passive video watching. Our courses are structured around live labs, real-world templates, and hands-on automations.</p>
        </div>
        <div className="about-card">
          <div className="about-icon-wrapper pink-bg">👥</div>
          <h3>Mentorship</h3>
          <p>Get your code reviewed, projects audited, and resume optimized by experienced engineers from top organizations.</p>
        </div>
      </div>
    </section>
  )
}
