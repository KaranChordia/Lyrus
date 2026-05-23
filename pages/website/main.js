// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('lyrus-theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('lyrus-theme', theme);
    if (theme === 'dark') {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
};

setTheme(getPreferredTheme()); 

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Advanced Scroll Choreography
document.addEventListener('DOMContentLoaded', () => {
    // 3. Scroll Reveal (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-scroll');
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.hidden-scroll').forEach(el => observer.observe(el));

    // 4. Mobile Menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 5. Scrollytelling Intro Logic (Only on Index page)
    const introSeq = document.getElementById('intro-sequence');
    const isHomePage = document.body.getAttribute('data-page') === 'home';
    const navBar = document.getElementById('main-nav');
    
    // Default show nav on non-home pages
    if (!isHomePage && navBar) {
        navBar.style.opacity = '1';
        navBar.style.pointerEvents = 'all';
    }

    if (introSeq && isHomePage) {
        const step1 = document.getElementById('intro-step-1');
        const step2 = document.getElementById('intro-step-2');
        const step3 = document.getElementById('intro-step-3');
        const step4 = document.getElementById('intro-step-4');
        
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const wh = window.innerHeight;
            
            // Map scroll to 0-1 progress of the intro sequence (400vh total -> 300vh active scroll)
            const progress = Math.min(Math.max(scrollY / (wh * 3), 0), 1);
            
            const animateStep = (stepElem, start, end) => {
                if (!stepElem) return;
                if (progress >= start && progress < end) {
                    const subP = (progress - start) / (end - start); // 0 to 1
                    stepElem.style.opacity = Math.sin(subP * Math.PI);
                    stepElem.style.transform = `translate(-50%, calc(-50% + ${50 - subP*50}px)) scale(${0.9 + subP*0.1})`;
                } else {
                    stepElem.style.opacity = 0;
                }
            };

            animateStep(step1, 0, 0.25);
            animateStep(step2, 0.25, 0.5);
            animateStep(step3, 0.5, 0.75);
            animateStep(step4, 0.75, 1.0);
            
            // Nav Transition: Show nav after intro
            if (progress >= 1) {
                navBar.style.opacity = '1';
                navBar.style.pointerEvents = 'all';
            } else {
                navBar.style.opacity = '0';
                navBar.style.pointerEvents = 'none';
            }
        });
        
        // Trigger once on load
        window.dispatchEvent(new Event('scroll'));
    }
});
