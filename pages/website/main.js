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
    if (introSeq) {
        const text1 = document.getElementById('intro-text-1');
        const text2 = document.getElementById('intro-text-2');
        const text3 = document.getElementById('intro-text-3');
        const navBar = document.getElementById('main-nav');
        
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const wh = window.innerHeight;
            
            // Map scroll to 0-1 progress of the intro sequence (400vh total -> 300vh active scroll)
            const progress = Math.min(Math.max(scrollY / (wh * 3), 0), 1);
            
            // Text 1: 0% to 25%
            if (progress >= 0 && progress < 0.25) {
                const subP = progress / 0.25; // 0 to 1
                text1.style.opacity = Math.sin(subP * Math.PI);
                text1.style.transform = `translateY(${50 - subP*50}px) scale(${0.9 + subP*0.1})`;
            } else { text1.style.opacity = 0; }
            
            // Text 2: 25% to 50%
            if (progress >= 0.25 && progress < 0.5) {
                const subP = (progress - 0.25) / 0.25;
                text2.style.opacity = Math.sin(subP * Math.PI);
                text2.style.transform = `translateY(${50 - subP*50}px) scale(${0.9 + subP*0.1})`;
            } else { text2.style.opacity = 0; }
            
            // Text 3: 50% to 75%
            if (progress >= 0.5 && progress < 0.75) {
                const subP = (progress - 0.5) / 0.25;
                text3.style.opacity = Math.sin(subP * Math.PI);
                text3.style.transform = `translateY(${50 - subP*50}px) scale(${0.9 + subP*0.1})`;
            } else { text3.style.opacity = 0; }
            
            // Nav Transition: 75% to 100%
            if (progress >= 0.75 && progress < 1) {
                const subP = (progress - 0.75) / 0.25;
                // Animate from center (top 50%) to top (top 1rem/fixed)
                navBar.style.position = 'absolute';
                // Easing function for smooth snap
                const eased = 1 - Math.pow(1 - subP, 3);
                navBar.style.top = `calc(50% - ${eased * 50}% + ${eased * 1}rem)`;
                navBar.style.transform = `translate(-50%, calc(-50% + ${eased * 50}%)) scale(${1.2 - (eased * 0.2)})`;
                navBar.classList.remove('nav-scrolled');
            } else if (progress >= 1) {
                // Done with intro, pin to top natively via CSS class
                navBar.style.position = '';
                navBar.style.top = '';
                navBar.style.transform = '';
                navBar.classList.add('nav-scrolled');
            } else {
                // Reset to default absolute center
                navBar.style.position = 'absolute';
                navBar.style.top = '50%';
                navBar.style.transform = 'translate(-50%, -50%) scale(1.2)';
                navBar.classList.remove('nav-scrolled');
            }
        });
        
        // Trigger once on load
        window.dispatchEvent(new Event('scroll'));
    }
});
