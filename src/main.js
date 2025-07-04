import './style.css'

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Add pulsing animation to CTA buttons
  const ctaButtons = document.querySelectorAll('.cta-button');
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // Add floating animation to AI brain
  const brain = document.querySelector('.ai-brain');
  if (brain) {
    let position = 0;
    setInterval(() => {
      position += 0.5;
      brain.style.transform = `translateY(${Math.sin(position) * 10}px) rotateY(${position * 2}deg)`;
    }, 50);
  }

  // Add scroll reveal animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
});

document.getElementById('app').innerHTML = `
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-line-1">Dominate Marketing</span>
          <span class="title-line-2">with AI Mastery</span>
        </h1>
        <h2 class="hero-subtitle">
          Skyrocket Your Success with ViralNeuralPro's AI Marketing Course
        </h2>
        <p class="hero-description">
          Envision a marketing strategy that anticipates trends, captivates audiences, and converts effortlessly. ViralNeuralPro's AI Marketing Course, designed for ambitious marketers and small businesses, leverages artificial intelligence to make this a reality. Our expertise in mega-attractive landing pages sets the standard for success.
        </p>
        <button class="cta-button cta-primary">
          <span class="cta-text">Claim Your Spot Now</span>
          <span class="cta-pulse"></span>
        </button>
        <p class="urgency-text">Limited Availability!</p>
      </div>
      <div class="hero-visual">
        <div class="ai-brain">
          <div class="brain-core"></div>
          <div class="brain-ring ring-1"></div>
          <div class="brain-ring ring-2"></div>
          <div class="brain-ring ring-3"></div>
          <div class="neural-connections">
            <div class="connection connection-1"></div>
            <div class="connection connection-2"></div>
            <div class="connection connection-3"></div>
            <div class="connection connection-4"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits Section -->
  <section class="benefits-section reveal">
    <div class="container">
      <h3 class="section-title">Unmatched Benefits</h3>
      <div class="benefits-grid">
        <div class="benefit-item">
          <div class="benefit-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
          </div>
          <div class="benefit-content">
            <h4 class="benefit-title">Viral Content with <strong>NLP</strong></h4>
            <p class="benefit-description">Craft campaigns that emotionally engage and go viral.</p>
          </div>
        </div>
        
        <div class="benefit-item">
          <div class="benefit-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
          </div>
          <div class="benefit-content">
            <h4 class="benefit-title">AI-Optimized <strong>SEO</strong></h4>
            <p class="benefit-description">Achieve top rankings with adaptive algorithms.</p>
          </div>
        </div>
        
        <div class="benefit-item">
          <div class="benefit-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
          </div>
          <div class="benefit-content">
            <h4 class="benefit-title"><strong>24/7</strong> Automation</h4>
            <p class="benefit-description">Save time with intelligent, always-on systems.</p>
          </div>
        </div>
        
        <div class="benefit-item">
          <div class="benefit-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
          </div>
          <div class="benefit-content">
            <h4 class="benefit-title">Hyper-Personalized <strong>Strategies</strong></h4>
            <p class="benefit-description">Target audiences with AI-driven precision.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonial Section -->
  <section class="testimonial-section reveal">
    <div class="container">
      <div class="testimonial-card">
        <div class="stars">
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
        </div>
        <blockquote class="testimonial-quote">
          "My revenue tripled with ViralNeuralPro's AI insights!"
        </blockquote>
        <cite class="testimonial-author">– John, Entrepreneur</cite>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section reveal">
    <div class="container">
      <h3 class="cta-title">ViralNeuralPro leads the industry in AI-powered marketing.</h3>
      <p class="cta-subtitle">Start your journey today.</p>
      <button class="cta-button cta-secondary">
        <span class="cta-text">Enroll Today</span>
        <span class="cta-pulse"></span>
      </button>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p class="footer-contact">Contact: <a href="mailto:viralneuralpro@gmail.com">viralneuralpro@gmail.com</a></p>
        <button class="cta-button cta-footer">
          <span class="cta-text">Enroll Today</span>
        </button>
      </div>
    </div>
  </footer>
`