(function() {
    // ===== CANVAS NETWORK =====
    const canvas = document.getElementById('canvas-network');
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let mouseX = -1000, mouseY = -1000;
    let mouseInside = false;

    const PARTICLE_COUNT = 80;
    const CONNECT_DIST = 180;
    const MOUSE_REPEL_RADIUS = 140;
    const REPEL_FORCE = 0.4;

    function initParticles(w, h) {
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: 2 + Math.random() * 4
            });
        }
    }

    function resizeCanvas() {
        width = window.innerWidth;
        height = document.getElementById('hero').offsetHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles(width, height);
    }

    window.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseCanvasX = e.clientX - rect.left;
        const mouseCanvasY = e.clientY - rect.top;
        if (mouseCanvasX >= 0 && mouseCanvasX <= rect.width && mouseCanvasY >= 0 && mouseCanvasY <= rect.height) {
            mouseX = mouseCanvasX;
            mouseY = mouseCanvasY;
            mouseInside = true;
        } else {
            mouseInside = false;
        }
    });

    window.addEventListener('mouseleave', () => { mouseInside = false; });

    function animate() {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);

        for (let p of particles) {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) { p.x = 0; p.vx *= -0.8; }
            if (p.x > width) { p.x = width; p.vx *= -0.8; }
            if (p.y < 0) { p.y = 0; p.vy *= -0.8; }
            if (p.y > height) { p.y = height; p.vy *= -0.8; }

            if (mouseInside) {
                const dx = p.x - mouseX;
                const dy = p.y - mouseY;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < MOUSE_REPEL_RADIUS) {
                    const force = (1 - dist / MOUSE_REPEL_RADIUS) * REPEL_FORCE;
                    const angle = Math.atan2(dy, dx);
                    p.vx += Math.cos(angle) * force;
                    p.vy += Math.sin(angle) * force;
                }
            }

            const maxSpeed = 1.2;
            let sp = Math.sqrt(p.vx*p.vx + p.vy*p.vy);
            if (sp > maxSpeed) {
                p.vx = (p.vx / sp) * maxSpeed;
                p.vy = (p.vy / sp) * maxSpeed;
            }
        }

        ctx.strokeStyle = '#4fc4cb';
        ctx.lineWidth = 1;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i+1; j < particles.length; j++) {
                const p1 = particles[i];
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < CONNECT_DIST) {
                    const opacity = 1 - (dist / CONNECT_DIST);
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(79, 196, 203, ${opacity * 0.35})`;
                    ctx.stroke();
                }
            }
        }

        for (let p of particles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 0.8, 0, Math.PI*2);
            ctx.fillStyle = '#4fc4cb';
            ctx.shadowColor = '#4fc4cb';
            ctx.shadowBlur = 12;
            ctx.fill();
        }
        ctx.shadowBlur = 0;

        requestAnimationFrame(animate);
    }

    setTimeout(() => {
        resizeCanvas();
        animate();
    }, 100);

    window.addEventListener('resize', resizeCanvas);

    // ===== SCROLL REVEAL =====
    const fadeElements = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });

    // ===== TABS (SERVICES) =====
    const tabBtns = document.querySelectorAll('.tab-btn');
    const serviceDetails = document.querySelectorAll('.service-detail');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            serviceDetails.forEach(d => d.classList.remove('active'));
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });

    // ===== COURSE TABS =====
    const courseTabs = document.querySelectorAll('.course-tab');
    const coursePanels = document.querySelectorAll('.course-panel');
    courseTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            courseTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            coursePanels.forEach(p => p.classList.remove('active'));
            document.getElementById(tab.dataset.course).classList.add('active');
        });
    });

    // ===== FAQ ACCORDION =====
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(q => {
        q.addEventListener('click', () => {
            const answer = q.nextElementSibling;
            const icon = q.querySelector('i');
            answer.classList.toggle('open');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });

    // ===== ACTIVE NAV LINK ON SCROLL =====
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
})();
