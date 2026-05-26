import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const courseData = {
  fullstack: {
    badge: 'Full Stack Developer Career Pathway',
    badgeClass: 'blue-badge',
    title: 'Full Stack Development',
    subtitle: 'End-to-end web engineering mastery using Java, HTML, CSS, JavaScript, databases, APIs, and cloud services.',
    overview: 'This comprehensive pathway prepares you to think like a systems architect. You\'ll progress from building responsive client-facing interfaces to designing enterprise-grade APIs and data layers. The program focuses on standard Java backend systems along with flexible Javascript interfaces to match enterprise and startup stack architectures.',
    shortTermPrice: '3,999',
    shortTermDuration: '4-5 Weeks • 3-4 hrs/week',
    shortTermFeatures: [
      'Live Interactive Frontend Labs',
      'JavaScript & DOM Automation',
      'Standard Certification',
      'Discord Community Support'
    ],
    longTermPrice: '14,999',
    longTermDuration: '12-16 Weeks • 6-8 hrs/week',
    longTermFeatures: [
      'Full Web Architecture & DB Design',
      'Spring Boot & PostgreSQL APIs',
      '1-on-1 Mentor Code Audits',
      'Placement Referrals & Career Help'
    ],
    skills: [
      'HTML5 & CSS3',
      'JavaScript (ES6+)',
      'Java Core & Spring Boot',
      'SQL & PostgreSQL',
      'RESTful APIs',
      'Git & GitHub',
      'Docker',
      'AWS Cloud & CI/CD'
    ],
    outcomes: [
      'Architect and deploy production-ready web apps from scratch.',
      'Build robust backend architectures in Java with secure REST APIs.',
      'Design relational database schemas and write complex SQL queries.',
      'Implement authentication protocols (JWT, OAuth) and handle security.'
    ],
    syllabus: [
      {
        module: 'Module 1: Front-End Basics (HTML, CSS, JS)',
        desc: 'Responsive design, modern layouts (Flexbox/Grid), JavaScript DOM manipulation, asynchronous programming (Promises/Fetch).'
      },
      {
        module: 'Module 2: Server-side & Java Backend',
        desc: 'Object-Oriented Programming (OOP) in Java, Spring Boot MVC framework, database communication with Hibernate/JPA.'
      },
      {
        module: 'Module 3: Database Architectures & APIs',
        desc: 'PostgreSQL schema design, indexing, transaction management, writing scalable APIs, API documentation with Swagger.'
      },
      {
        module: 'Module 4: Security, Testing & Cloud Deployment',
        desc: 'JWT Auth, unit/integration testing (JUnit, Postman), containerization with Docker, deploy to AWS (EC2/RDS).'
      }
    ]
  },
  python: {
    badge: 'Automation & Scripting Pathway',
    badgeClass: 'purple-badge',
    title: 'Python Automation',
    subtitle: 'Eliminate manual work by writing scripts, scraping web portals, interacting with APIs, and orchestrating server tasks.',
    overview: 'Learn how to harness Python to automate repetitive daily workflows. This course is highly hands-on and teaches practical scripting, web scraping, and scheduled tasks. Perfect for system admins, office workers, business developers, and software developers seeking productivity boosts.',
    shortTermPrice: '1,999',
    shortTermDuration: '4-5 Weeks • 3-4 hrs/week',
    shortTermFeatures: [
      'Python File & OS Scripting',
      'BeautifulSoup Web Scraping',
      'Basic API Requests',
      'Discord Community Support'
    ],
    longTermPrice: '7,999',
    longTermDuration: '12-16 Weeks • 6-8 hrs/week',
    longTermFeatures: [
      'Playwright & Selenium Testing',
      'Cloud Task Scheduling & Cron',
      'Pandas for Advanced Excel Automation',
      '1-on-1 Portfolio Mentorship'
    ],
    skills: [
      'Python Scripting',
      'Web Scraping (BeautifulSoup/Playwright)',
      'API Integration',
      'Selenium WebDriver',
      'Task Scheduling (Cron/Task Scheduler)',
      'File System Automation',
      'Error Handling & Logging',
      'Pandas for Excel Automation'
    ],
    outcomes: [
      'Write robust Python scripts to handle files, emails, and desktop activities.',
      'Collect structured data from complex interactive web pages.',
      'Create automations that interact with Slack, Gmail, and Google Sheets.',
      'Troubleshoot and log automation scripts running headlessly in the cloud.'
    ],
    syllabus: [
      {
        module: 'Module 1: Python Essentials & File Manipulation',
        desc: 'Variables, control flow, functions, file reading/writing (JSON, CSV, Excel), interacting with the local OS.'
      },
      {
        module: 'Module 2: Advanced Web Scraping',
        desc: 'Scraping static websites with BeautifulSoup, handling dynamic pages with Selenium and Playwright, extracting text/images, avoiding blocking filters.'
      },
      {
        module: 'Module 3: APIs and App Connectors',
        desc: 'Using the requests library, consuming public and private REST APIs, sending notifications (Slack, Discord, Emails), building custom micro-webhooks.'
      },
      {
        module: 'Module 4: Deployment & Scheduling',
        desc: 'Packaging scripts, running background jobs on Linux (Cron) and Windows (Task Scheduler), deploying headlessly to AWS Lambda or PythonAnywhere.'
      }
    ]
  },
  ai: {
    badge: 'Artificial Intelligence Specialization',
    badgeClass: 'pink-badge',
    title: 'Full Stack AI',
    subtitle: 'Build intelligent systems: from AI core algorithms and LLMs to deploying real-world agentic applications.',
    overview: 'Go beyond prompt engineering. This program trains you to design, build, and run applications driven by artificial intelligence. You will learn the mathematics behind machine learning, fine-tune models, implement RAG (Retrieval-Augmented Generation), and orchestrate complex autonomous agent networks.',
    shortTermPrice: '2,999',
    shortTermDuration: '4-5 Weeks • 3-4 hrs/week',
    shortTermFeatures: [
      'LLM Prompt Engineering & APIs',
      'Simple Retrieval-Augmented Gen (RAG)',
      'Vector Store Integration',
      'Discord Community Support'
    ],
    longTermPrice: '11,999',
    longTermDuration: '12-16 Weeks • 6-8 hrs/week',
    longTermFeatures: [
      'Custom LangChain/LlamaIndex Agents',
      'Model Fine-Tuning Foundations',
      'FastAPI AI Backend Deployment',
      '1-on-1 Capstone Project Reviews'
    ],
    skills: [
      'Machine Learning Core',
      'LLM Integration (OpenAI, Anthropic)',
      'Retrieval Augmented Generation (RAG)',
      'Vector Databases (Pinecone/Chroma)',
      'LangChain & LlamaIndex',
      'Model Fine-Tuning Basics',
      'FastAPI AI Services',
      'Hugging Face Ecosystem'
    ],
    outcomes: [
      'Deploy custom RAG systems using vector databases for contextual query retrieval.',
      'Build complex chat interfaces with memory and agentic tool call integration.',
      'Fine-tune open-source models (like Llama/Mistral) on custom datasets.',
      'Analyze performance metrics, manage token costs, and deploy AI APIs.'
    ],
    syllabus: [
      {
        module: 'Module 1: AI Fundamentals & Machine Learning Core',
        desc: 'Supervised and unsupervised learning, regression/classification, using Scikit-Learn, data preprocessing, and evaluation metrics.'
      },
      {
        module: 'Module 2: Large Language Models (LLMs) & Prompt Engineering',
        desc: 'API connections to model providers, token structures, context limits, few-shot prompting, and structured output formatting (JSON schemas).'
      },
      {
        module: 'Module 3: RAG & Semantic Vector Search',
        desc: 'Creating text embeddings, vector similarity calculations, Pinecone/Chroma indexing, structuring source document ingestion pipelines.'
      },
      {
        module: 'Module 4: Agents, Fine-tuning, & Hosting',
        desc: 'Orchestrating autonomous agents with tools, LangChain graphs, model fine-tuning with LoRA/QLoRA, deploying AI pipelines using FastAPI and Docker.'
      }
    ]
  },
  growth: {
    badge: 'Product growth & Experiments',
    badgeClass: 'green-badge',
    title: 'Growth Engineering',
    subtitle: 'Accelerate customer acquisition, retention, and funnel optimization using analytics, experimentation, and tech automation.',
    overview: 'Bridge the gap between product development, marketing, and data. Growth engineers build the instrumentation, pipelines, and interactive loops that make product loops viral. You will learn to configure analytics tracking, manage automated messaging systems, and deploy rapid A/B experiments.',
    shortTermPrice: '2,499',
    shortTermDuration: '4-5 Weeks • 3-4 hrs/week',
    shortTermFeatures: [
      'Zapier & Make Automations',
      'Landing Page CRO & Forms',
      'Basic A/B Experiment Setup',
      'Discord Community Support'
    ],
    longTermPrice: '9,999',
    longTermDuration: '12-16 Weeks • 6-8 hrs/week',
    longTermFeatures: [
      'Segment & Mixpanel Event Tracking',
      'Advanced Outbound Funnel Tech',
      'Technical SEO & Performance Audits',
      '1-on-1 Project Review & Referrals'
    ],
    skills: [
      'Funnel Analytics',
      'A/B Testing Methodology',
      'Marketing Automation (HubSpot/Klaviyo)',
      'Segment & Mixpanel Tracking',
      'SEO Technical Optimization',
      'Zapier & Make Automations',
      'Landing Page Conversion (CRO)',
      'Web Hook Integrations'
    ],
    outcomes: [
      'Design and execute statistically significant A/B test experiments on landing pages.',
      'Implement user event tracking across web pages using modern Tag Managers and SDKs.',
      'Automate onboarding and checkout flows via API integrations and transactional emails.',
      'Optimize web page speeds and structured schema markup for search engines (SEO).'
    ],
    syllabus: [
      {
        module: 'Module 1: Growth Metrics & Funnel Mapping',
        desc: 'Understanding Pirate Metrics (AARRR), identifying bottleneck drop-offs in the funnel, tracking user navigation events.'
      },
      {
        module: 'Module 2: Web Experimentation & CRO',
        desc: 'Designing landing pages optimized for action, setting up A/B tests using Optimizely/VWO, analyzing statistical significance (p-values).'
      },
      {
        module: 'Module 3: Trigger-Based Engagement & Lifecycle Marketing',
        desc: 'Integrating customer data platforms (CDPs like Segment), setting up real-time email/push triggers, automated nurturing paths.'
      },
      {
        module: 'Module 4: Viral Loops & Referral Systems',
        desc: 'Engineering features that drive referrals, building dynamic promo code generators, scraping competitor trends, and reporting growth loops.'
      }
    ]
  },
  analytics: {
    badge: 'Business Strategy & Data Analytics',
    badgeClass: 'orange-badge',
    title: 'Data Analytics & Business Development',
    subtitle: 'Leverage database queries, interactive BI dashboards, sales pipelines, and outreach models to drive growth.',
    overview: 'Data-driven strategy is standard in high-performing companies. This course teaches you to extract business data, construct interactive visualizations, analyze customer trends, and deploy systems to optimize modern business development (B2B sales and lead generation) operations.',
    shortTermPrice: '2,499',
    shortTermDuration: '4-5 Weeks • 3-4 hrs/week',
    shortTermFeatures: [
      'Basic SQL Query Writing',
      'Excel Data Wrangling',
      'Hubspot CRM Pipeline Basics',
      'Discord Community Support'
    ],
    longTermPrice: '9,999',
    longTermDuration: '12-16 Weeks • 6-8 hrs/week',
    longTermFeatures: [
      'PowerBI & Tableau Dashboards',
      'Pandas for Data Aggregation',
      'Automated CRM Sales Outbound',
      '1-on-1 Case Studies & Referrals'
    ],
    skills: [
      'SQL Database Queries',
      'BI Tools (PowerBI / Tableau)',
      'Python (Pandas / Matplotlib)',
      'B2B Outbound Lead Gen',
      'Sales CRM (Salesforce / HubSpot)',
      'Market Analysis Frameworks',
      'Data Cleaning & Wrangling',
      'LinkedIn Sales Navigator Automation'
    ],
    outcomes: [
      'Write SQL queries to join tables, aggregate metrics, and clean real-world transactional data.',
      'Construct and deploy dynamic KPI dashboards to inform business stakeholders.',
      'Automate lead generation pipelines using scraping tools and CRM webhooks.',
      'Formulate business pitch proposals backed by thorough cohort analysis.'
    ],
    syllabus: [
      {
        module: 'Module 1: Advanced SQL & Data Architecture',
        desc: 'SELECT query structures, JOINS, window functions, aggregating transaction logs, data warehousing schemas.'
      },
      {
        module: 'Module 2: Visual Storytelling & BI Dashboards',
        desc: 'Connecting data sources to PowerBI/Tableau, defining KPIs, building interactive dashboards, user permission management.'
      },
      {
        module: 'Module 3: Business Development & CRM Operations',
        desc: 'Mapping sales funnels, CRM configuration, configuring automated pipelines, setting up outreach templates and lead scores.'
      },
      {
        module: 'Module 4: Outbound Campaigns & Market Metrics',
        desc: 'Data prospecting, building verified target lists, launching automated email outreach, analyzing cohort conversion rates.'
      }
    ]
  }
}

export default function Courses() {
  const { courseKey } = useParams()
  const navigate = useNavigate()

  // Default to fullstack if key is invalid or not provided
  const activeKey = courseData[courseKey] ? courseKey : 'fullstack'
  const activeCourse = courseData[activeKey]

  const handleEnroll = () => {
    // Navigate to contact and pass the selected course key in router state
    navigate('/contact', { state: { selectedCourse: activeKey } })
  }

  return (
    <section id="courses" className="page-section active">
      <div className="course-detail-layout">
        {/* Course Left Sidebar Navigation */}
        <aside className="course-sidebar">
          <h3 className="sidebar-title">Select Program</h3>
          <ul className="sidebar-links">
            <li>
              <button 
                className={`sidebar-btn ${activeKey === 'fullstack' ? 'active' : ''}`} 
                onClick={() => navigate('/courses/fullstack')}
              >
                Full Stack Development
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeKey === 'python' ? 'active' : ''}`} 
                onClick={() => navigate('/courses/python')}
              >
                Python Automation
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeKey === 'ai' ? 'active' : ''}`} 
                onClick={() => navigate('/courses/ai')}
              >
                Full Stack AI
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeKey === 'growth' ? 'active' : ''}`} 
                onClick={() => navigate('/courses/growth')}
              >
                Growth Engineering
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-btn ${activeKey === 'analytics' ? 'active' : ''}`} 
                onClick={() => navigate('/courses/analytics')}
              >
                Data Analytics & BD
              </button>
            </li>
          </ul>
        </aside>

        {/* Course Main Content Area */}
        <div className="course-main-content">
          <div className="course-tab-content active">
            <div className="course-header">
              <span className={`badge ${activeCourse.badgeClass}`}>{activeCourse.badge}</span>
              <h2 className="course-title">{activeCourse.title}</h2>
              <p className="course-subtitle">{activeCourse.subtitle}</p>
            </div>

            {/* Goal Programs & Pricing */}
            <div className="goals-pricing-container">
              <div className="goal-pricing-card short-term">
                <div className="goal-header">
                  <span className={`goal-tag ${activeCourse.badgeClass}`}>Short-Term Goal</span>
                  <h3>Crash Course Program</h3>
                  <div className="goal-duration">{activeCourse.shortTermDuration}</div>
                </div>
                <div className="goal-amount">
                  <span className="currency">₹</span>
                  <span className="price">{activeCourse.shortTermPrice}</span>
                </div>
                <ul className="goal-features">
                  {activeCourse.shortTermFeatures.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="goal-btn" onClick={handleEnroll}>Join Now</button>
              </div>

              <div className="goal-pricing-card long-term">
                <div className="goal-header">
                  <span className={`goal-tag ${activeCourse.badgeClass}`}>Long-Term Goal</span>
                  <h3>Comprehensive Coaching</h3>
                  <div className="goal-duration">{activeCourse.longTermDuration}</div>
                </div>
                <div className="goal-amount">
                  <span className="currency">₹</span>
                  <span className="price">{activeCourse.longTermPrice}</span>
                </div>
                <ul className="goal-features">
                  {activeCourse.longTermFeatures.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="goal-btn premium" onClick={handleEnroll}>Join Now</button>
              </div>
            </div>

            {/* Detailed Panels */}
            <div className="course-grid-panels">
              <div className="panel-left">
                <h3>Course Overview</h3>
                <p>{activeCourse.overview}</p>
                
                <h3>Key Skills You Will Acquire</h3>
                <div className="skills-badges">
                  {activeCourse.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>

                <h3>Learning Outcomes</h3>
                <ul className="outcomes-list">
                  {activeCourse.outcomes.map((outcome, idx) => (
                    <li key={idx}>{outcome}</li>
                  ))}
                </ul>
              </div>

              <div className="panel-right">
                <h3>Syllabus & Curriculum</h3>
                <div className="timeline">
                  {activeCourse.syllabus.map((item, idx) => (
                    <div key={idx} className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h4>{item.module}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
