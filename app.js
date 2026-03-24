// ============================================
// CREDENCE CODE — Main Application Script
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // === Preloader ===
    const preloader = document.getElementById('preloader');
    const counter = document.getElementById('preloader-counter');
    let count = 0;
    const preloadInterval = setInterval(() => {
        count += Math.floor(Math.random() * 8) + 2;
        if (count >= 100) {
            count = 100;
            clearInterval(preloadInterval);
            counter.textContent = '100';
            setTimeout(() => preloader.classList.add('hidden'), 400);
        }
        counter.textContent = count;
    }, 25);

    // === Custom Cursor ===
    const cursor = document.getElementById('cursor');
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    (function moveCursor() {
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
        requestAnimationFrame(moveCursor);
    })();

    // Scale cursor on hover over interactive elements
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('a, button, .service-row, .portfolio-card, .team-card, .team-preview-card, .filter-pill')) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('a, button, .service-row, .portfolio-card, .team-card, .team-preview-card, .filter-pill')) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    });

    // === Navbar Scroll ===
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    // === Mobile Nav Toggle ===
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // === SPA Navigation ===
    function loadPage(pageName) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        // Inject content if needed
        const target = document.getElementById('page-' + pageName);
        if (target) {
            if (pageName !== 'home' && PAGE_CONTENT[pageName] && !target.dataset.loaded) {
                target.innerHTML = PAGE_CONTENT[pageName];
                target.dataset.loaded = 'true';
            }
            target.classList.add('active');
        }
        // Update active nav link
        document.querySelectorAll('.navbar-links a').forEach(a => {
            a.classList.toggle('active', a.dataset.page === pageName);
        });
        // Close mobile nav
        navLinks.classList.remove('open');
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'instant' });
        // Re-init scroll reveals for new content
        initScrollReveal();
        // Re-init portfolio filter if on work page
        if (pageName === 'work') initPortfolioFilter();
    }

    // Bind all navigation links
    document.addEventListener('click', (e) => {
        const link = e.target.closest('[data-page]');
        if (link) {
            e.preventDefault();
            const page = link.dataset.page;
            loadPage(page);
            history.pushState({ page }, '', '#' + page);
        }
    });

    // Handle back/forward
    window.addEventListener('popstate', (e) => {
        const page = e.state?.page || 'home';
        loadPage(page);
    });

    // Handle initial hash
    const initHash = window.location.hash.replace('#', '');
    if (initHash && PAGE_CONTENT[initHash]) {
        setTimeout(() => loadPage(initHash), 1500);
    }

    // === Scroll-Triggered Reveal (IntersectionObserver) ===
    function initScrollReveal() {
        const reveals = document.querySelectorAll('.reveal:not(.visible)');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        reveals.forEach(el => observer.observe(el));
    }
    initScrollReveal();

    // === Hero Text Character Animation ===
    const heroHeadline = document.querySelector('.hero-headline');
    if (heroHeadline) {
        const lines = heroHeadline.querySelectorAll('.line');
        let charIndex = 0;
        lines.forEach(line => {
            const html = line.innerHTML;
            // Wrap text nodes in char spans (preserve <em> tags)
            const wrapper = document.createElement('span');
            wrapper.innerHTML = html;
            let newHtml = '';
            wrapper.childNodes.forEach(node => {
                if (node.nodeType === 3) {
                    // Text node
                    node.textContent.split('').forEach(ch => {
                        if (ch === ' ') {
                            newHtml += ' ';
                        } else {
                            newHtml += `<span class="hero-char" style="animation-delay:${charIndex * 0.03 + 1.6}s">${ch}</span>`;
                            charIndex++;
                        }
                    });
                } else {
                    // Element node (e.g. <em>)
                    let inner = '';
                    node.textContent.split('').forEach(ch => {
                        if (ch === ' ') {
                            inner += ' ';
                        } else {
                            inner += `<span class="hero-char" style="animation-delay:${charIndex * 0.03 + 1.6}s">${ch}</span>`;
                            charIndex++;
                        }
                    });
                    newHtml += `<${node.tagName.toLowerCase()}>${inner}</${node.tagName.toLowerCase()}>`;
                }
            });
            line.innerHTML = newHtml;
        });
    }

    // === Portfolio Filter ===
    function initPortfolioFilter() {
        const filterStrip = document.getElementById('filterStrip');
        const grid = document.getElementById('portfolioGrid');
        if (!filterStrip || !grid) return;

        filterStrip.addEventListener('click', (e) => {
            const pill = e.target.closest('.filter-pill');
            if (!pill) return;
            const filter = pill.dataset.filter;

            // Update active pill
            filterStrip.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            // Filter cards
            grid.querySelectorAll('.portfolio-card').forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // === Contact Form Submission ===
    document.addEventListener('submit', (e) => {
        if (e.target.id === 'contactForm') {
            e.preventDefault();
            const btn = e.target.querySelector('.btn-submit');
            btn.textContent = 'SENT ✓';
            btn.style.background = 'var(--color-accent)';
            btn.style.color = 'var(--color-bg)';
            btn.style.borderColor = 'var(--color-accent)';
            setTimeout(() => {
                btn.textContent = 'SEND INQUIRY';
                btn.style.background = '';
                btn.style.color = '';
                btn.style.borderColor = '';
                e.target.reset();
            }, 3000);
        }
    });

});
