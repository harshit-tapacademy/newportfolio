import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Send, Check, Search } from 'lucide-react';
import TechIcon from './components/TechIcon';
import BangaloreIllustration from './components/BangaloreIllustration';
import ThreeDCard from './components/ThreeDCard';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Terminal search interaction state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Skills library data for search terminal
  const skillsLibrary = [
    { name: 'React.js', category: 'Frontend Development', description: 'Interactive single-page client views, State Management, Hooks.' },
    { name: 'Java Boot', category: 'Backend Engineering', description: 'Enterprise-grade microservices, REST APIs, Dependency Injection.' },
    { name: 'Spring Framework', category: 'Backend Engineering', description: 'MVC web APIs, database transaction controls, Spring Security.' },
    { name: 'Hibernate ORM', category: 'Database Persistence', description: 'Relational data models mapped directly to Java entity classes.' },
    { name: 'Docker Containers', category: 'Cloud DevOps', description: 'Stateless, portable package containers for microservice deployments.' },
    { name: 'Kubernetes', category: 'Cloud DevOps', description: 'Orchestrating server nodes, self-healing clusters, auto-scaling.' },
    { name: 'MySQL Schema', category: 'Database Persistence', description: 'Transactional database configurations, optimized queries.' },
    { name: 'MongoDB', category: 'Database Persistence', description: 'Document-based flexible NoSQL database schemas.' },
  ];

  // Handle navbar transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter skills dynamically for terminal query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = skillsLibrary.filter(skill => 
        skill.name.toLowerCase().includes(query) || 
        skill.category.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query)
      );
      setSearchResults(filtered);
    }
  }, [searchQuery]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  return (
    <>
      {/* Fixed Sticky Header Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Left links: Left-aligned as in the video */}
          <div className="nav-left">
            <a href="#about" className="nav-item">About</a>
            <a href="#skills" className="nav-item">Solutions</a>
            <a href="#projects" className="nav-item">Projects</a>
            <a href="#contact" className="nav-item">Contact</a>
          </div>

          {/* Centered Brand Logo */}
          <a href="#home" className="nav-logo">
            Harshit
          </a>

          {/* Right actions: Right-aligned as in the video */}
          <div className="nav-right">
            <a href="#" onClick={(e) => e.preventDefault()} className="btn-nav-ghost">
              Resume.pdf
            </a>
            <a href="#contact" className="btn-primary-outline">
              Contact Me
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn btn-ghost"
            aria-label="Toggle Navigation Menu"
            style={{ display: 'none' }}
          >
            {mobileMenuOpen ? <X size={20} style={{ color: scrolled ? 'var(--color-midnight-ink)' : '#ffffff' }} /> : <Menu size={20} style={{ color: scrolled ? 'var(--color-midnight-ink)' : '#ffffff' }} />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-menu-dropdown animate-fade-in-up">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">About</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Solutions</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Projects</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Contact</a>
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Resume.pdf</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary-outline" style={{ marginTop: 'var(--spacing-12)', width: '100%' }}>Contact Me</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
          <ThreeDCard 
            className="hero-text-card"
            showShadow={false}
            style={{
              padding: 'var(--spacing-32) var(--spacing-48)',
              borderRadius: 'var(--radius-cards)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              width: '100%',
              maxWidth: '480px',
              background: 'transparent',
              border: 'none',
              boxShadow: 'none'
            }}
          >
            <h1 className="hero-title-cursive" style={{ transform: 'translateZ(50px)', transformStyle: 'preserve-3d', margin: 0, fontSize: '32px', color: 'var(--color-midnight-ink)' }}>
              Creative logic.<br />Enterprise scale.
            </h1>
            
            <a href="#about" className="hero-btn-white-ghost" style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d', marginTop: 'var(--spacing-24)' }}>
              Get some Air
            </a>
          </ThreeDCard>
        </div>
      </header>

      {/* Big Display Text Section with search terminal */}
      <section className="display-banner">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ThreeDCard 
            className="display-banner-card frosted-glass"
            style={{
              width: '100%',
              maxWidth: '440px',
              padding: 'var(--spacing-20) var(--spacing-20)',
              borderRadius: 'var(--radius-cards)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            <h2 className="display-banner-title font-compressed" style={{ 
              transform: 'translateZ(60px)', 
              transformStyle: 'preserve-3d', 
              marginBottom: 'var(--spacing-16)',
              fontSize: '24px',
              lineHeight: '1.2',
              color: 'var(--color-cloud-white)',
              letterSpacing: '-1px'
            }}>
              BUILD IT ONCE.<br />RUN IT EVERYWHERE.
            </h2>
            
            <div className="terminal-search-wrapper" style={{ transform: 'translateZ(80px)', transformStyle: 'preserve-3d', width: '100%', maxWidth: '100%' }}>
              <div className="terminal-search-bar">
                <Search size={18} style={{ opacity: 0.5 }} />
                <input 
                  type="text" 
                  placeholder="Query skills... (e.g. spring, docker, react)" 
                  className="terminal-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    style={{ background: 'transparent', border: 'none', color: '#ffffff', opacity: 0.5, cursor: 'pointer', fontSize: '12px' }}
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Live Search dropdown overlay */}
              {searchResults.length > 0 && (
                <div className="terminal-results-dropdown" style={{ transform: 'translateZ(100px)' }}>
                  {searchResults.map((skill, index) => (
                    <div 
                      key={index} 
                      className="terminal-result-item"
                      onClick={() => {
                        setSearchQuery(skill.name);
                        const target = '#skills';
                        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <div className="skill-icon-wrapper" style={{ color: 'var(--color-action-blue)' }}>
                        <TechIcon name={skill.name.toLowerCase().split(' ')[0]} size={16} />
                      </div>
                      <div>
                        <strong className="font-tnt" style={{ fontSize: '13px', color: 'var(--color-midnight-ink)' }}>{skill.name}</strong>
                        <span style={{ fontSize: '11px', color: 'rgba(0,0,0,0.4)', marginLeft: '10px' }}>({skill.category})</span>
                        <p style={{ fontSize: '12px', color: 'var(--color-charcoal-text)', marginTop: '2px' }}>{skill.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </ThreeDCard>
        </div>
      </section>

      {/* About Me Section on Level 3 Surface (Cloud White background) */}
      <section id="about" className="neutral-section-white section-spacing">
        <div className="container">
          <div className="section-header-tnt">My Origin</div>
          <h2 className="section-title-cursive-dark">Synthesizing Architecture & Craft</h2>
          
          <div className="about-grid">
            <div className="about-text-content">
              <h3>Harshit — Software Engineer</h3>
              <p>
                Based in the high-density tech capital of Bengaluru, India, I build clean software systems that balance robust backend data flows with elegant client interfaces. 
              </p>
              <p>
                My background is built on a solid foundation of computer science disciplines. I focus on developing clean, well-tested CRUD operations and modular microservice components. 
              </p>
              <p>
                Whether designing transactional schema representations, organizing service-to-service communication paths, or crafting responsive browser layouts, I aim for structural stability.
              </p>
            </div>
            
            <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)', background: 'var(--color-haze-grey)' }}>
              <strong className="font-tnt" style={{ fontSize: '13px', color: 'var(--color-midnight-ink)' }}>CREDENTIAL OUTLINE</strong>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                  <Check size={14} style={{ color: 'var(--color-action-blue)' }} /> Full Stack Java Web Engineer
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                  <Check size={14} style={{ color: 'var(--color-action-blue)' }} /> Specialized in React & Spring
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                  <Check size={14} style={{ color: 'var(--color-action-blue)' }} /> Containerized Deployment Workflows
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                  <Check size={14} style={{ color: 'var(--color-action-blue)' }} /> Based in Bengaluru Hub
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature & Skills Section on Cloud White background */}
      <section id="skills" className="neutral-section-white section-spacing" style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div className="section-header-tnt">Engineering Solutions</div>
          <h2 className="section-title-cursive-dark">Harshit unblocks development at scale.</h2>

          <div className="feature-columns">
            {/* Feature stack cards representing solutions */}
            <div className="feature-cards-stack">
              {/* Feature 1 */}
              <div className="feature-card">
                <strong className="font-tnt" style={{ fontSize: '14px', color: 'var(--color-midnight-ink)', display: 'block', marginBottom: '8px' }}>
                  Canvas — React Client
                </strong>
                <p style={{ fontSize: '13px', color: 'var(--color-charcoal-text)', lineHeight: '1.5' }}>
                  Make it once. Run it everywhere. Fluid browser layout systems crafted using React components, modular structures, and responsive media controls.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="feature-card">
                <strong className="font-tnt" style={{ fontSize: '14px', color: 'var(--color-midnight-ink)', display: 'block', marginBottom: '8px' }}>
                  Conversational REST APIs
                </strong>
                <p style={{ fontSize: '13px', color: 'var(--color-charcoal-text)', lineHeight: '1.5' }}>
                  Predictable transactions and secure endpoints. Spring Boot controllers tied to entity schemas using Hibernate ORM for structured database operations.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="feature-card">
                <strong className="font-tnt" style={{ fontSize: '14px', color: 'var(--color-midnight-ink)', display: 'block', marginBottom: '8px' }}>
                  Deploy Sync — DevOps
                </strong>
                <p style={{ fontSize: '13px', color: 'var(--color-charcoal-text)', lineHeight: '1.5' }}>
                  Autonomic clustering. Packaging code structures inside Docker containers, managed locally and orchestrated via Kubernetes.
                </p>
              </div>
            </div>

            {/* Skills categorization sub-grid */}
            <div className="skills-grid">
              <ThreeDCard className="skill-card">
                <h4>Frontend Stack</h4>
                <ul className="skill-list-items">
                  <li className="skill-list-item"><TechIcon name="react" size={14} /> React.js</li>
                  <li className="skill-list-item"><TechIcon name="javascript" size={14} /> JavaScript</li>
                  <li className="skill-list-item"><TechIcon name="html" size={14} /> HTML5</li>
                  <li className="skill-list-item"><TechIcon name="code" size={14} /> Vanilla CSS</li>
                </ul>
              </ThreeDCard>

              <ThreeDCard className="skill-card">
                <h4>Backend Stack</h4>
                <ul className="skill-list-items">
                  <li className="skill-list-item"><TechIcon name="java" size={14} /> Java SE</li>
                  <li className="skill-list-item"><TechIcon name="spring" size={14} /> Spring Boot</li>
                  <li className="skill-list-item"><TechIcon name="hibernate" size={14} /> Hibernate</li>
                  <li className="skill-list-item"><TechIcon name="jdbc" size={14} /> JDBC API</li>
                </ul>
              </ThreeDCard>

              <ThreeDCard className="skill-card">
                <h4>Databases</h4>
                <ul className="skill-list-items">
                  <li className="skill-list-item"><TechIcon name="mysql" size={14} /> MySQL</li>
                  <li className="skill-list-item"><TechIcon name="mongodb" size={14} /> MongoDB</li>
                  <li className="skill-list-item"><TechIcon name="jdbc" size={14} /> SQL Query</li>
                  <li className="skill-list-item"><TechIcon name="code" size={14} /> Schemas</li>
                </ul>
              </ThreeDCard>

              <ThreeDCard className="skill-card">
                <h4>DevOps & Arch</h4>
                <ul className="skill-list-items">
                  <li className="skill-list-item"><TechIcon name="docker" size={14} /> Docker</li>
                  <li className="skill-list-item"><TechIcon name="kubernetes" size={14} /> Kubernetes</li>
                  <li className="skill-list-item"><TechIcon name="rest" size={14} /> REST APIs</li>
                  <li className="skill-list-item"><TechIcon name="microservices" size={14} /> Microservices</li>
                </ul>
              </ThreeDCard>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase on Level 2 Surface (Haze Grey background) */}
      <section id="projects" className="neutral-section-grey section-spacing">
        <div className="container">
          <div className="section-header-tnt">Product Demonstrations</div>
          <h2 className="section-title-cursive-dark">Featured Project Integrations</h2>

          <div className="projects-showcase-grid">
            {/* Project 1: E-Commerce */}
            <article className="project-card-air">
              <div className="project-card-header" style={{ overflow: 'hidden', height: '200px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                  alt="E-Commerce System preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">Retail Application CRUD</h3>
                <p className="project-card-description">
                  An end-to-end transaction-based online shop incorporating user catalogs, interactive shopping cart actions, secure backend JPA/Hibernate mappings, and containerized Docker layers.
                </p>
                <div className="project-card-techbar">
                  <span className="project-card-badge">React</span>
                  <span className="project-card-badge">Spring Boot</span>
                  <span className="project-card-badge">MySQL</span>
                  <span className="project-card-badge">Docker</span>
                </div>
                <div className="project-links">
                  <a href="#contact" className="btn-primary-outline" style={{ fontSize: '12px', padding: '4px 12px' }}>
                    Request Demo <ExternalLink size={12} style={{ marginLeft: '4px' }} />
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} className="btn-nav-ghost" style={{ fontSize: '12px', padding: '4px 12px' }}>
                    GitHub Repo
                  </a>
                </div>
              </div>
            </article>

            {/* Project 2: TAPYFood */}
            <article className="project-card-air">
              <div className="project-card-header" style={{ overflow: 'hidden', height: '200px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1526367790999-015078648c7e?w=800&q=80" 
                  alt="TAPY Food App screenshot"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
                />
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">TAPY Food Delivery Web App</h3>
                <p className="project-card-description">
                  A high-fidelity landing page for a street food brand, implementing tab-based categorization filtering, interactive ordering forms, and smooth scroll reveal animations.
                </p>
                <div className="project-card-techbar">
                  <span className="project-card-badge">HTML5</span>
                  <span className="project-card-badge">Vanilla CSS</span>
                  <span className="project-card-badge">JavaScript</span>
                  <span className="project-card-badge">TAPY Theme</span>
                </div>
                <div className="project-links">
                  {/* DIRECT STATIC PATH LINK */}
                  <a href="/TAPYFOOD/index.html" target="_blank" rel="noopener noreferrer" className="btn-primary-outline" style={{ fontSize: '12px', padding: '4px 12px' }}>
                    Open App Live <ExternalLink size={12} style={{ marginLeft: '4px' }} />
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} className="btn-nav-ghost" style={{ fontSize: '12px', padding: '4px 12px' }}>
                    GitHub Repo
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Form Section on Level 3 Surface (Cloud White) */}
      <section id="contact" className="neutral-section-white section-spacing">
        <div className="container">
          <div className="section-header-tnt">Say Hello</div>
          <h2 className="section-title-cursive-dark">One Developer. Every Stack.</h2>

          <div className="contact-form-card">
            <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--color-charcoal-text)', marginBottom: 'var(--spacing-24)', lineHeight: '1.6' }}>
              Have an enterprise project, a backend architecture, or a fluid frontend application that needs assembly? Reach out via the form below.
            </p>

            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: 'var(--spacing-24)', color: 'var(--color-action-blue)' }}>
                <Check size={36} style={{ marginBottom: '8px' }} />
                <h4 className="font-tnt" style={{ color: 'var(--color-midnight-ink)' }}>Message Sent Successfully!</h4>
                <p style={{ fontSize: '12px', color: 'var(--color-charcoal-text)', marginTop: '4px' }}>Thank you, Harshit will contact you back as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe" 
                    className="input-field"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com" 
                    className="input-field"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What would you like to build together?" 
                    className="input-field form-textarea"
                    required
                  ></textarea>
                </div>

                <div className="contact-submit-wrapper">
                  <button type="submit" className="btn-primary-outline" style={{ padding: '10px 32px', fontSize: '15px' }}>
                    Send Message <Send size={14} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-air">
        <div className="container">
          <div className="footer-nav-links">
            <a href="#home" className="footer-nav-link">Home</a>
            <a href="#about" className="footer-nav-link">About</a>
            <a href="#skills" className="footer-nav-link">Solutions</a>
            <a href="#projects" className="footer-nav-link">Projects</a>
            <a href="#contact" className="footer-nav-link">Contact</a>
          </div>

          <div className="footer-social-icons">
            <a href="#" onClick={(e) => e.preventDefault()} className="footer-social-btn" aria-label="GitHub">
              <TechIcon name="github" size={16} />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="footer-social-btn" aria-label="LinkedIn">
              <TechIcon name="linkedin" size={16} />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="footer-social-btn" aria-label="Email">
              <TechIcon name="mail" size={16} />
            </a>
          </div>

          <div className="footer-copy">
            © {new Date().getFullYear()} Harshit. Realized in compliance with the Air UI design standards.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
