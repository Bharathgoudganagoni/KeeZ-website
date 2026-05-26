import React from 'react'
import { Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Courses from './pages/Courses'
import Contact from './pages/Contact'

export default function App() {
  const navigate = useNavigate()

  return (
    <>
      {/* Background glow shapes for design aesthetics */}
      <div className="glow-sphere glow-1"></div>
      <div className="glow-sphere glow-2"></div>
      <div className="glow-sphere glow-3"></div>

      {/* Header Navigation */}
      <header className="navbar">
        <div className="logo" onClick={() => navigate('/')}>
          <img src="/logo.png" alt="KeeZ CAMPUS Logo" className="logo-icon" style={{ objectFit: 'contain', width: '44px', height: '44px', borderRadius: '4px' }} />
          <span className="logo-text">KeeZ<span className="gradient-text">CAMPUS</span></span>
        </div>
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>About</NavLink>
          <div className="nav-dropdown">
            <NavLink to="/courses" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>
              Courses 
              <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavLink>
            <div className="dropdown-menu">
              <Link to="/courses/fullstack" className="dropdown-item">Full Stack Development</Link>
              <Link to="/courses/python" className="dropdown-item">Python Automation</Link>
              <Link to="/courses/ai" className="dropdown-item">Full Stack AI</Link>
              <Link to="/courses/growth" className="dropdown-item">Growth Engineering</Link>
              <Link to="/courses/analytics" className="dropdown-item">Data Analytics & BD</Link>
            </div>
          </div>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Contact</NavLink>
        </nav>
        <div className="header-actions">
          <button className="cta-btn" onClick={() => navigate('/contact')}>Join Now</button>
        </div>
      </header>

      <main className="content-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseKey" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="main-footer">
        <p>&copy; 2026 KeeZ CAMPUS. All rights reserved. Crafted for visual excellence & premium interactive training.</p>
      </footer>
    </>
  )
}
