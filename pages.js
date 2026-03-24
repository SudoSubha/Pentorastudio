// ============================================
// CREDENCE CODE — Page Content Templates
// ============================================

const PAGE_CONTENT = {

  // ======================== SERVICES PAGE ========================
  services: `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">our expertise</span>
        <h1 class="heading-h1">Our Services</h1>
        <p class="subtitle">Everything your brand needs, under one roof.</p>
      </div>
    </section>

    <div class="service-detail reveal">
      <div class="container service-detail-inner">
        <div>
          <span class="service-detail-bg-index">01</span>
          <h3 class="service-detail-title">Full-Stack Web Development</h3>
          <p class="service-detail-desc">We architect and deliver complete web solutions — from pixel-perfect interfaces to robust, scalable backends. Every line of code is written with performance, accessibility, and long-term maintainability in mind.</p>
          <div class="deliverables-title">Deliverables</div>
          <ul class="deliverables-list">
            <li>Frontend Development</li>
            <li>Backend & API Architecture</li>
            <li>Database Design</li>
            <li>CMS Integration</li>
            <li>API Integration</li>
            <li>Deployment & DevOps</li>
          </ul>
          <a href="#" class="btn btn-primary" data-page="contact">Inquire About This</a>
        </div>
        <div></div>
      </div>
    </div>

    <div class="service-detail reveal">
      <div class="container service-detail-inner">
        <div>
          <span class="service-detail-bg-index">02</span>
          <h3 class="service-detail-title">Graphic Design & Poster Making</h3>
          <p class="service-detail-desc">From brand systems to campaign posters, we design with intention. Every visual asset is crafted to communicate your message with clarity, impact, and unmistakable style.</p>
          <div class="deliverables-title">Deliverables</div>
          <ul class="deliverables-list">
            <li>Brand Identity Systems</li>
            <li>Poster & Print Design</li>
            <li>Social Media Assets</li>
            <li>Print-Ready Files</li>
          </ul>
          <a href="#" class="btn btn-primary" data-page="contact">Inquire About This</a>
        </div>
        <div></div>
      </div>
    </div>

    <div class="service-detail reveal">
      <div class="container service-detail-inner">
        <div>
          <span class="service-detail-bg-index">03</span>
          <h3 class="service-detail-title">Photography & Visual Production</h3>
          <p class="service-detail-desc">We don't just take photos — we tell stories through lenses. Whether it's products, portraits, or events, every shot is composed with cinematic precision and editorial sensibility.</p>
          <div class="deliverables-title">Deliverables</div>
          <ul class="deliverables-list">
            <li>Product Photography</li>
            <li>Portrait Sessions</li>
            <li>Event Coverage</li>
            <li>Editing & Retouching</li>
          </ul>
          <a href="#" class="btn btn-primary" data-page="contact">Inquire About This</a>
        </div>
        <div></div>
      </div>
    </div>

    <div class="service-detail reveal">
      <div class="container service-detail-inner">
        <div>
          <span class="service-detail-bg-index">04</span>
          <h3 class="service-detail-title">Digital Marketing & Strategy</h3>
          <p class="service-detail-desc">Growth isn't accidental — it's engineered. We build data-driven marketing strategies that amplify your brand's reach, optimize your spend, and deliver measurable results.</p>
          <div class="deliverables-title">Deliverables</div>
          <ul class="deliverables-list">
            <li>SEO Optimization</li>
            <li>Social Media Management</li>
            <li>Ad Campaign Strategy</li>
            <li>Analytics & Reporting</li>
          </ul>
          <a href="#" class="btn btn-primary" data-page="contact">Inquire About This</a>
        </div>
        <div></div>
      </div>
    </div>

    <div class="service-detail service-placeholder reveal">
      <div class="container service-detail-inner">
        <div>
          <span class="service-detail-bg-index">05</span>
          <h3 class="service-detail-title" style="color:var(--color-text-muted)">More Coming Soon</h3>
          <p class="service-detail-desc">We're constantly expanding our capabilities. New services are on the horizon — stay tuned.</p>
        </div>
        <div></div>
      </div>
    </div>
  `,

  // ======================== TEAM PAGE ========================
  team: `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">5 friends, one mission</span>
        <h1 class="heading-h1">Meet the Team</h1>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="team-grid">

          <div class="team-card reveal reveal-delay-1">
            <div class="team-card-photo" style="background-image:url('images/soumyadip.jpg')"></div>
            <div class="team-card-overlay-details">
              <div class="team-card-name">Soumyadip Das</div>
              <div class="team-card-role">Full-Stack Developer</div>
              <div class="team-card-skills">
                <span class="skill-pill">React</span>
                <span class="skill-pill">HTML-CSS-JS</span>
                <span class="skill-pill">PHP</span>
                <span class="skill-pill">Vue</span>
                <span class="skill-pill">MongoDB</span>
                <span class="skill-pill">MySQL</span>
                <span class="skill-pill">Git</span>
              </div>
              <p class="team-card-bio">100% Arabica coffee — 100% Focused.</p>
            </div>
          </div>

          <div class="team-card reveal reveal-delay-2">
            <div class="team-card-photo" style="background-image:url('images/hiranmay_d.jpg')"></div>
            <div class="team-card-overlay-details">
              <div class="team-card-name">Hiranmay Das</div>
              <div class="team-card-role">Backend Developer</div>
              <div class="team-card-skills">
                <span class="skill-pill">PHP</span>
                <span class="skill-pill">MySQL</span>
                <span class="skill-pill">MongoDB</span>
                <span class="skill-pill">React</span>
                <span class="skill-pill">Tailwind</span>
                <span class="skill-pill">JavaScript</span>
              </div>
              <p class="team-card-bio">Supervising even the semicolons(;).</p>
            </div>
          </div>

          <div class="team-card reveal reveal-delay-3">
            <div class="team-card-photo" style="background-image:url('images/soumyanil.jpg')"></div>
            <div class="team-card-overlay-details">
              <div class="team-card-name">Soumyanil Biswas</div>
              <div class="team-card-role">Frontend & Creative Director</div>
              <div class="team-card-skills">
                <span class="skill-pill">React</span>
                <span class="skill-pill">HTML-CSS-JS</span>
                <span class="skill-pill">Illustrator</span>
                <span class="skill-pill">Figma</span>
                <span class="skill-pill">Canva</span>
                <span class="skill-pill">Adobe XD</span>
              </div>
              <p class="team-card-bio">Frontend. Design. Words. Motion. — He's the whole creative stack, and it shows.</p>
            </div>
          </div>

          <div class="team-card reveal reveal-delay-4">
            <div class="team-card-photo" style="background-image:url('images/hiranmay_s.jpg')"></div>
            <div class="team-card-overlay-details">
              <div class="team-card-name">Hiranmay Sarkar</div>
              <div class="team-card-role">UI/UX & Visual Design Lead</div>
              <div class="team-card-skills">
                <span class="skill-pill">Figma</span>
                <span class="skill-pill">Photoshop</span>
                <span class="skill-pill">Illustrator</span>
                <span class="skill-pill">Da Vinci</span>
                <span class="skill-pill">Premiere Pro</span>
                <span class="skill-pill">Adobe XD</span>
              </div>
              <p class="team-card-bio">Multidisciplinary creative. One obsession — making the world look as alive as it is.</p>
            </div>
          </div>

          <div class="team-card reveal reveal-delay-4">
            <div class="team-card-photo" style="background-image:url('images/sanjay.jpg')"></div>
            <div class="team-card-overlay-details">
              <div class="team-card-name">Sanjay Mandal</div>
              <div class="team-card-role">Full-Stack Developer</div>
              <div class="team-card-skills">
                <span class="skill-pill">React</span>
                <span class="skill-pill">Tailwind</span>
                <span class="skill-pill">HTML-CSS-JS</span>
                <span class="skill-pill">MongoDB</span>
                <span class="skill-pill">MySQL</span>
                <span class="skill-pill">PHP</span>
                <span class="skill-pill">Git</span>
              </div>
              <p class="team-card-bio">Builds the whole thing. Then breaks it. Then makes it bulletproof.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="cta-banner reveal">
      <div class="container">
        <div class="cta-heading">Want to Join Us?</div>
        <div class="cta-subheading">We're always looking.</div>
        <a href="#" class="btn btn-primary" data-page="contact">Get in Touch</a>
      </div>
    </section>
  `,

  // ======================== PORTFOLIO PAGE ========================
  work: `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">our portfolio</span>
        <h1 class="heading-h1">Selected Work</h1>
      </div>
    </section>

    <section class="section" style="padding-top:0">
      <div class="container">
        <div class="filter-strip" id="filterStrip">
          <button class="filter-pill active" data-filter="all">All</button>
          <button class="filter-pill" data-filter="webdev">Web Dev</button>
          <button class="filter-pill" data-filter="design">Design</button>
          <button class="filter-pill" data-filter="photography">Photography</button>
          <button class="filter-pill" data-filter="marketing">Marketing</button>
        </div>

        <div class="portfolio-grid" id="portfolioGrid">
          <div class="portfolio-card reveal" data-category="design">
            <div class="portfolio-card-image" style="background-image:url('images/work/brand-reimagined.jpg')"><span class="plus-icon">+</span></div>
            <div class="portfolio-card-overlay">
              <div class="portfolio-card-overlay-title">Brand Reimagined</div>
              <div class="portfolio-card-overlay-cat">Design</div>
              <a href="#" class="portfolio-card-overlay-link" data-page="contact">Contact Us →</a>
            </div>
            <div class="portfolio-card-info">
              <span class="portfolio-card-num">01</span>
              <span class="portfolio-card-name">Brand Reimagined</span>
            </div>
          </div>
          <div class="portfolio-card reveal reveal-delay-1" data-category="webdev">
            <div class="portfolio-card-image" style="background-image:url('images/work/ecommerce-platform.jpg')"><span class="plus-icon">+</span></div>
            <div class="portfolio-card-overlay">
              <div class="portfolio-card-overlay-title">E-Commerce Platform</div>
              <div class="portfolio-card-overlay-cat">Web Dev</div>
              <a href="#" class="portfolio-card-overlay-link" data-page="contact">Contact Us →</a>
            </div>
            <div class="portfolio-card-info">
              <span class="portfolio-card-num">02</span>
              <span class="portfolio-card-name">E-Commerce Platform</span>
            </div>
          </div>
          <div class="portfolio-card reveal reveal-delay-2" data-category="photography">
            <div class="portfolio-card-image" style="background-image:url('images/work/product-shoot.jpg')"><span class="plus-icon">+</span></div>
            <div class="portfolio-card-overlay">
              <div class="portfolio-card-overlay-title">Product Shoot Series</div>
              <div class="portfolio-card-overlay-cat">Photography</div>
              <a href="#" class="portfolio-card-overlay-link" data-page="contact">Contact Us →</a>
            </div>
            <div class="portfolio-card-info">
              <span class="portfolio-card-num">03</span>
              <span class="portfolio-card-name">Product Shoot Series</span>
            </div>
          </div>
          <div class="portfolio-card reveal reveal-delay-3" data-category="marketing">
            <div class="portfolio-card-image" style="background-image:url('images/work/social-growth.jpg')"><span class="plus-icon">+</span></div>
            <div class="portfolio-card-overlay">
              <div class="portfolio-card-overlay-title">Social Growth Engine</div>
              <div class="portfolio-card-overlay-cat">Marketing</div>
              <a href="#" class="portfolio-card-overlay-link" data-page="contact">Contact Us →</a>
            </div>
            <div class="portfolio-card-info">
              <span class="portfolio-card-num">04</span>
              <span class="portfolio-card-name">Social Growth Engine</span>
            </div>
          </div>
          <div class="portfolio-card reveal reveal-delay-2" data-category="webdev">
            <div class="portfolio-card-image" style="background-image:url('images/work/portfolio-cms.jpg')"><span class="plus-icon">+</span></div>
            <div class="portfolio-card-overlay">
              <div class="portfolio-card-overlay-title">Portfolio CMS</div>
              <div class="portfolio-card-overlay-cat">Web Dev</div>
              <a href="#" class="portfolio-card-overlay-link" data-page="contact">Contact Us →</a>
            </div>
            <div class="portfolio-card-info">
              <span class="portfolio-card-num">05</span>
              <span class="portfolio-card-name">Portfolio CMS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

  // ======================== CONTACT PAGE ========================
  contact: `
    <section class="page-hero">
      <div class="container">
        <h1 class="heading-h1">Let's Build Together.</h1>
        <p class="subtitle">Tell us about your project. We'll get back within 24 hours.</p>
      </div>
    </section>

    <section class="section" style="padding-top:0">
      <div class="container">
        <div class="contact-layout">
          <form id="contactForm" onsubmit="return false;">
            <div class="form-group">
              <label class="form-label" for="fullName">Full Name</label>
              <input class="form-input" type="text" id="fullName" placeholder="Your name" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="email">Email</label>
              <input class="form-input" type="email" id="email" placeholder="you@company.com" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="company">Company / Brand <span style="opacity:0.5">(optional)</span></label>
              <input class="form-input" type="text" id="company" placeholder="Your company name">
            </div>
            <div class="form-group">
              <label class="form-label" for="serviceNeeded">Service Needed</label>
              <select class="form-select" id="serviceNeeded">
                <option value="">Select a service</option>
                <option value="webdev">Web Development</option>
                <option value="design">Graphic Design</option>
                <option value="photography">Photography</option>
                <option value="marketing">Digital Marketing</option>
                <option value="all">All of the Above</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="brief">Project Brief</label>
              <textarea class="form-textarea" id="brief" rows="5" placeholder="Tell us about your project..."></textarea>
            </div>
            <div class="form-group">
              <label class="form-label" for="budget">Budget Range</label>
              <select class="form-select" id="budget">
                <option value="">Select a range</option>
                <option value="under50k">Under ₹50K</option>
                <option value="50k-2l">₹50K – ₹2L</option>
                <option value="2l-plus">₹2L+</option>
                <option value="discuss">Let's Discuss</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary btn-submit">Send Inquiry</button>
          </form>

          <div class="contact-info">
            <div class="contact-email">hello@pentorastudio.co</div>
            <div class="contact-social-list">
              <a href="#"><i class="fab fa-github"></i> GitHub</a>
              <a href="#"><i class="fab fa-instagram"></i> Instagram</a>
              <a href="#"><i class="fab fa-linkedin-in"></i> LinkedIn</a>
              <a href="#"><i class="fab fa-behance"></i> Behance</a>
            </div>
            <p class="contact-tagline">Built with obsession.</p>
          </div>
        </div>
      </div>
    </section>
  `
};
