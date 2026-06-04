document.addEventListener('DOMContentLoaded', () => {
    // Khởi tạo Lenis (Smooth Scroll)
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing mượt mà
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Đăng ký GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Tích hợp ScrollTrigger với Lenis
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0, 0);

    // Fade up animations cơ bản cho Bento Cards
    gsap.utils.toArray('.bento-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%", 
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: i * 0.1 
        });
    });

    // Cinematic Text Reveal cho Hero Section
    const cinematicTexts = gsap.utils.toArray('.cinematic-text');
    if (cinematicTexts.length > 0) {
        gsap.from(cinematicTexts, {
            y: 30,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2, // Từng dòng hiện lên cách nhau 0.2s
            ease: "power3.out",
            delay: 0.2
        });
    }

    // Parallax Effect cho Hero Background
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        gsap.to(heroBg, {
            yPercent: 30, // Di chuyển xuống 30% khi cuộn
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "top top", // Bắt đầu khi hero ở đỉnh
                end: "bottom top", // Kết thúc khi hero rời khỏi view
                scrub: true // Cuộn theo thanh scroll
            }
        });
    }

    // Xử lý Mobile Menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('ph-list');
                icon.classList.add('ph-x');
            } else {
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            }
        });
    }
});
