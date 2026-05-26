import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  const courses = [
    {
      key: 'fullstack',
      tag: 'Full Stack',
      tagClass: 'tech',
      duration: '12-16 Weeks',
      title: 'Full Stack Development',
      desc: 'Master web architecture, database design, backend services in Java/Spring, modern JavaScript frameworks, and cloud deployment pipelines.',
      skills: ['HTML/CSS', 'JavaScript', 'Java', 'APIs'],
      glowStyle: { background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15), transparent 70%)' }
    },
    {
      key: 'python',
      tag: 'Automation',
      tagClass: 'python',
      duration: '4-12 Weeks',
      title: 'Python Automation',
      desc: 'Automate tedious tasks, build web scrapers, write scripting tools, integrate third-party APIs, and manage scheduled system tasks.',
      skills: ['Python', 'Web Scraping', 'Selenium', 'APIs'],
      glowStyle: { background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.15), transparent 70%)' }
    },
    {
      key: 'ai',
      tag: 'AI & ML',
      tagClass: 'ai',
      duration: '12-16 Weeks',
      title: 'Full Stack AI Development',
      desc: 'Build and deploy smart applications. Integrate Large Language Models (LLMs), machine learning foundations, vector stores, and custom agents.',
      skills: ['LLMs', 'Machine Learning', 'PyTorch', 'LangChain'],
      glowStyle: { background: 'radial-gradient(circle at 50% 0%, rgba(236, 72, 153, 0.15), transparent 70%)' }
    },
    {
      key: 'growth',
      tag: 'Engineering',
      tagClass: 'marketing',
      duration: '4-12 Weeks',
      title: 'Growth Engineering',
      desc: 'Bridge marketing and engineering. Build analytics instrumentation, run complex A/B experiments, and automate outbound client funnels.',
      skills: ['A/B Testing', 'Analytics', 'Funnel Optimization', 'Zapier'],
      glowStyle: { background: 'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.15), transparent 70%)' }
    },
    {
      key: 'analytics',
      tag: 'Analytics & Sales',
      tagClass: 'business',
      duration: '12-16 Weeks',
      title: 'Data Analytics & Business Development',
      desc: 'Utilize data queries, build interactive BI dashboards, optimize modern CRM sales pipelines, and design business outreach campaigns.',
      skills: ['SQL', 'PowerBI', 'CRM Strategy', 'Sales Funnels'],
      glowStyle: { background: 'radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.15), transparent 70%)' }
    }
  ]

  return (
    <section id="dashboard" className="page-section active">
      <div className="hero-section">
        <span className="badge">Next-Gen Upskilling Portal</span>
        <h1 className="hero-title">Accelerate Your Career with <br/><span className="gradient-text">Short-Term Technical Labs</span></h1>
        <p className="hero-desc">Explore practical modular curriculum pathways at KeeZ CAMPUS, and simulate program budgets focused on low-fee, high-impact short-term courses.</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5V3.5A2.5 2.5 0 0 1 6.5 1M20 3.5V17m0-13.5A2.5 2.5 0 0 0 17.5 1H6.5"/>
            </svg>
          </div>
          <div className="stat-info">
            <span className="stat-num">5</span>
            <span className="stat-label">Core Programs</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-wrapper purple">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
          <div className="stat-info">
            <span className="stat-num">4-16</span>
            <span className="stat-label">Weeks Duration</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-wrapper pink">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
          <div className="stat-info">
            <span className="stat-num">₹1,999</span>
            <span className="stat-label">Starting Fee</span>
          </div>
        </div>
      </div>

      {/* Course Grid Section */}
      <h2 className="section-heading">Browse Our Taught Programs</h2>
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.key} className="course-card" onClick={() => navigate(`/courses/${course.key}`)}>
            <div className="card-glow" style={course.glowStyle}></div>
            <div className="course-meta">
              <span className={`tag ${course.tagClass}`}>{course.tag}</span>
              <span className="duration">{course.duration}</span>
            </div>
            <h3 className="course-card-title">{course.title}</h3>
            <p className="course-card-desc">{course.desc}</p>
            <div className="skills-preview">
              {course.skills.map((skill, idx) => (
                <span key={idx} className="skill-chip">{skill}</span>
              ))}
            </div>
            <div className="card-footer">
              <span className="view-details">
                Explore Curriculum{' '}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
