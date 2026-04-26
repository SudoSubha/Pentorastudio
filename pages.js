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

  // ======================== PACKAGES PAGE ========================
  packages: `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">tailored solutions</span>
        <h1 class="heading-h1">Packages</h1>
        <p class="subtitle">Tailored solutions for every stage of your brand's journey.</p>
      </div>
    </section>

    <!-- Package Cards -->
    <section class="section" style="padding-top:0">
      <div class="container">
        <div class="packages-grid">

          <!-- Starter -->
          <div class="package-card reveal">
            <div class="package-card-header">
              <span class="package-index">01</span>
              <h3 class="package-name">Starter</h3>
              <div class="package-subtitle">Essential Digital Presence</div>
            </div>
            <p class="package-desc">For small businesses or individuals just getting online.</p>
            <ul class="package-services">
              <li class="included"><span class="service-check">✓</span> Full-Stack Web Development</li>
              <li class="included"><span class="service-check">✓</span> Graphic Design & Poster Making</li>
              <li class="excluded"><span class="service-cross">✕</span> Photography & Visual Production</li>
              <li class="excluded"><span class="service-cross">✕</span> Digital Marketing & Strategy</li>
            </ul>
            <div class="package-ideal">
              <span class="ideal-label">Ideal for</span>
              <p>Local shops, freelancers, early-stage startups who need a solid website + brand visuals to launch with.</p>
            </div>
            <div class="package-footer">
              <span class="package-price">Custom Pricing</span>
              <a href="#" class="btn btn-primary" data-page="contact">Get Started</a>
            </div>
          </div>

          <!-- Creator -->
          <div class="package-card reveal reveal-delay-1">
            <div class="package-card-header">
              <span class="package-index">02</span>
              <h3 class="package-name">Creator</h3>
              <div class="package-subtitle">Brand Identity + Visuals</div>
            </div>
            <p class="package-desc">For brands who already have a website but need to look great.</p>
            <ul class="package-services">
              <li class="excluded"><span class="service-cross">✕</span> Full-Stack Web Development</li>
              <li class="included"><span class="service-check">✓</span> Graphic Design & Poster Making</li>
              <li class="included"><span class="service-check">✓</span> Photography & Visual Production</li>
              <li class="excluded"><span class="service-cross">✕</span> Digital Marketing & Strategy</li>
            </ul>
            <div class="package-ideal">
              <span class="ideal-label">Ideal for</span>
              <p>Existing businesses wanting to refresh their brand — new posters, product shoots, social media assets.</p>
            </div>
            <div class="package-footer">
              <span class="package-price">Custom Pricing</span>
              <a href="#" class="btn btn-primary" data-page="contact">Get Started</a>
            </div>
          </div>

          <!-- Growth -->
          <div class="package-card reveal reveal-delay-2">
            <div class="package-card-header">
              <span class="package-index">03</span>
              <h3 class="package-name">Growth</h3>
              <div class="package-subtitle">Online Presence + Marketing</div>
            </div>
            <p class="package-desc">For businesses ready to scale and reach more people.</p>
            <ul class="package-services">
              <li class="included"><span class="service-check">✓</span> Full-Stack Web Development</li>
              <li class="included"><span class="service-check">✓</span> Graphic Design & Poster Making</li>
              <li class="excluded"><span class="service-cross">✕</span> Photography & Visual Production</li>
              <li class="included"><span class="service-check">✓</span> Digital Marketing & Strategy</li>
            </ul>
            <div class="package-ideal">
              <span class="ideal-label">Ideal for</span>
              <p>Brands who want a powerful website, strong visuals, and active marketing campaigns running together.</p>
            </div>
            <div class="package-footer">
              <span class="package-price">Custom Pricing</span>
              <a href="#" class="btn btn-primary" data-page="contact">Get Started</a>
            </div>
          </div>

          <!-- Studio (Premium) -->
          <div class="package-card package-card-premium reveal reveal-delay-3">
            <div class="package-premium-badge">Full Service</div>
            <div class="package-card-header">
              <span class="package-index">04</span>
              <h3 class="package-name">Studio</h3>
              <div class="package-subtitle">Everything, End-to-End</div>
            </div>
            <p class="package-desc">For clients who want to hand it all over and see results.</p>
            <ul class="package-services">
              <li class="included"><span class="service-check">✓</span> Full-Stack Web Development</li>
              <li class="included"><span class="service-check">✓</span> Graphic Design & Poster Making</li>
              <li class="included"><span class="service-check">✓</span> Photography & Visual Production</li>
              <li class="included"><span class="service-check">✓</span> Digital Marketing & Strategy</li>
            </ul>
            <div class="package-ideal">
              <span class="ideal-label">Ideal for</span>
              <p>New businesses launching from scratch or established brands doing a complete rebrand — total done-for-you service.</p>
            </div>
            <div class="package-footer">
              <span class="package-price">Custom Pricing</span>
              <a href="#" class="btn btn-primary btn-premium" data-page="contact">Let's Talk</a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="section comparison-section reveal">
      <div class="container">
        <span class="eyebrow">at a glance</span>
        <h2 class="heading-h2">Package Comparison</h2>
        <div class="comparison-table-wrap">
          <table class="comparison-table">
            <thead>
              <tr>
                <th></th>
                <th>Starter</th>
                <th>Creator</th>
                <th>Growth</th>
                <th class="col-premium">Studio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="row-label">Web Development</td>
                <td><span class="table-check">✓</span></td>
                <td><span class="table-cross">✕</span></td>
                <td><span class="table-check">✓</span></td>
                <td><span class="table-check">✓</span></td>
              </tr>
              <tr>
                <td class="row-label">Graphic Design</td>
                <td><span class="table-check">✓</span></td>
                <td><span class="table-check">✓</span></td>
                <td><span class="table-check">✓</span></td>
                <td><span class="table-check">✓</span></td>
              </tr>
              <tr>
                <td class="row-label">Photography</td>
                <td><span class="table-cross">✕</span></td>
                <td><span class="table-check">✓</span></td>
                <td><span class="table-cross">✕</span></td>
                <td><span class="table-check">✓</span></td>
              </tr>
              <tr>
                <td class="row-label">Digital Marketing</td>
                <td><span class="table-cross">✕</span></td>
                <td><span class="table-cross">✕</span></td>
                <td><span class="table-check">✓</span></td>
                <td><span class="table-check">✓</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq-section">
      <div class="container">
        <span class="eyebrow">common questions</span>
        <h2 class="heading-h2">Frequently Asked Questions</h2>
        <div class="faq-list">

          <div class="faq-item reveal">
            <button class="faq-question">
              <span>How do I know which package is right for me?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Start by thinking about where your brand is right now. If you're launching from scratch, Starter or Growth is a great fit. If you already have a website but need visuals and content, go with Creator. And if you want the full experience — website, design, photography, and marketing — Studio is the one. Still unsure? Reach out and we'll help you figure it out.</p>
            </div>
          </div>

          <div class="faq-item reveal reveal-delay-1">
            <button class="faq-question">
              <span>Can I customize a package?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Absolutely. Our packages are starting points, not limits. If you need a specific combination of services, we'll build a custom plan tailored to your goals. Just hit the "Let's Talk" button or head to our Contact page.</p>
            </div>
          </div>

          <div class="faq-item reveal reveal-delay-2">
            <button class="faq-question">
              <span>How does pricing work?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Every project is unique, so we do custom pricing based on your scope, timeline, and deliverables. After an initial consultation, we'll send you a detailed proposal with transparent pricing — no hidden fees, no surprises.</p>
            </div>
          </div>

          <div class="faq-item reveal reveal-delay-3">
            <button class="faq-question">
              <span>What's the typical turnaround time?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>It depends on the package and complexity. A Starter project might take 2–3 weeks, while a full Studio engagement could span 6–8 weeks. We'll always give you a clear timeline upfront.</p>
            </div>
          </div>

          <div class="faq-item reveal">
            <button class="faq-question">
              <span>Do you offer ongoing support after the project?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Yes. We offer maintenance and support plans for websites, as well as retainer options for ongoing design, content, and marketing needs. We're not a one-and-done studio — we grow with you.</p>
            </div>
          </div>

          <div class="faq-item reveal reveal-delay-1">
            <button class="faq-question">
              <span>What do I need to provide to get started?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Just your vision. We'll guide you through a brief onboarding process where we gather your brand info, goals, references, and any assets you already have. From there, we take the lead.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Custom Packages CTA -->
    <section class="cta-banner reveal">
      <div class="container">
        <div class="cta-heading">Need Something Specific?</div>
        <div class="cta-subheading">We build custom packages too.</div>
        <a href="#" class="btn btn-primary" data-page="contact">Let's Talk</a>
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
