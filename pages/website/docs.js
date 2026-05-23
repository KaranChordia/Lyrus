const docsData = {
  overview: {
    title: "Company Overview",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    content: `
      <h2>Genesis & Evolution</h2>
      <p>Lyrus Life Sciences is a research-driven, global specialty pharmaceutical company headquartered in Bengaluru, India. It was formally incorporated in 2015 and began scaled operations in 2016.</p>
      
      <div class="highlight-box">
        <strong>The Medreich Legacy:</strong> Lyrus was founded by Mr. C.P. Bothra following the successful acquisition of his previous venture, Medreich Limited, by Meiji Seika Pharma. This provided the substantial promoter funding that drives Lyrus today.
      </div>
      
      <h2>Core Business Model</h2>
      <p>Lyrus operates primarily as a Contract Research and Development Organization (CRDO). It focuses on developing differentiated pharmaceutical products, complex generics, and innovative drug delivery solutions for highly regulated global markets. Rather than focusing on the domestic Indian market, Lyrus targets export corridors including the UK, Australia, EU, and South Africa.</p>
      
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-value">2016</span>
          <span class="stat-label">Year Established</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">60+</span>
          <span class="stat-label">Commercial Products</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">150+</span>
          <span class="stat-label">Global SKUs</span>
        </div>
      </div>
    `
  },
  leadership: {
    title: "Leadership & Team",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    content: `
      <h2>Executive Consortium</h2>
      <p>The strategic direction at Lyrus is governed by a leadership team bringing over 300 years of cumulative experience in pharmaceutical formulation and global commercialization.</p>
      
      <div class="profile-grid">
        <div class="profile-card">
          <h3>Rajesh Goel</h3>
          <p class="role">Chief Executive Officer (CEO)</p>
          <p>A highly seasoned corporate governance and finance professional with 15+ years of experience at Teva and Apotex. He holds triple degrees as a CA, CS, and Cost Accountant.</p>
        </div>
        <div class="profile-card">
          <h3>C.P. Bothra</h3>
          <p class="role">Chairman</p>
          <p>A veteran with over 40 years of experience. He is the founder and former Managing Director of Medreich Ltd, having scaled it to a massive enterprise before its exit.</p>
        </div>
        <div class="profile-card">
          <h3>Hemanth Kumar Bothra</h3>
          <p class="role">Managing Director & Co-Founder</p>
          <p>Brings 17 years of experience in the pharmaceutical industry and concurrently leads the South Indian retail chain, Trust Chemists and Druggists.</p>
        </div>
        <div class="profile-card">
          <h3>Uma Maheshwari</h3>
          <p class="role">VP – Global Compliance</p>
          <p>24 years of rigorous experience spanning QA, Regulatory Affairs, pharmacovigilance, and complex tech transfers.</p>
        </div>
      </div>
    `
  },
  research: {
    title: "R&D Capabilities",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3H15"></path><path d="M10 3V11L4 20C3.7 20.4 4 21 4.5 21H19.5C20 21 20.3 20.4 20 20L14 11V3"></path></svg>`,
    content: `
      <h2>Infrastructure & Capabilities</h2>
      <p>The operational core of Lyrus is a highly sophisticated, <strong>75,000 sq ft R&D facility</strong> located in Hoskote, Bengaluru. This cGMP-equipped site houses over 65 specialized research scientists.</p>
      
      <h3>Agile Manufacturing Strategy</h3>
      <p>Lyrus employs an asset-light strategy, maintaining an in-house pilot plant for scale-up while utilizing <strong>11 top-tier global CMOs</strong> for commercial manufacturing. These CMOs hold stringent approvals from the US FDA, MHRA, EU GMP, and TGA.</p>
      
      <h3>Novel Drug Delivery Systems (NDDS)</h3>
      <div class="tech-feature">
        <h4>Nanonization Expertise</h4>
        <p>Lyrus excels in reducing raw hydrophobic materials to an ultra-fine nanoparticle range of <strong>40 to 157 nanometers</strong>. This massive increase in surface area radically improves dissolution rates and bioavailability, utilizing Brookhaven Nano analyzers for precise measurement.</p>
      </div>
      <div class="tech-feature">
        <h4>Buffer-Free Solubilization</h4>
        <p>Engineered water-soluble formulations (e.g., curcuminoids) that remain stable without harsh pH buffering agents, eliminating gastrointestinal irritation.</p>
      </div>
    `
  },
  products: {
    title: "Products & Pipeline",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    content: `
      <h2>Therapeutic Segments</h2>
      <ul class="feature-list">
        <li>Nervous System & Cardiovascular System</li>
        <li>Diabetes and Endocrinology</li>
        <li>Urology & Gastroenterology</li>
        <li>Pain Management & Anti-infectives</li>
      </ul>
      
      <h2>Landmark Approvals</h2>
      <div class="highlight-box success">
        <strong>First-Cycle US FDA Approval (Dec 2023)</strong>
        <p>Approved for <em>Methenamine Hippurate Tablets USP</em> (generic Hiprex®), a critical urological intervention for UTI prophylaxis, capitalizing on global efforts to combat antimicrobial resistance.</p>
      </div>
      
      <div class="highlight-box">
        <strong>Global Footprint Expansion</strong>
        <p>Secured Marketing Authorizations in the UK for complex Metformin XR, and acquired 46 existing MAs directly from Sandoz Australia, transitioning them without supply chain disruption.</p>
      </div>
    `
  },
  analysis: {
    title: "Business Analysis",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
    content: `
      <h2>Strategic Posture</h2>
      <p>Lyrus utilizes a specialized B2B out-licensing model, focusing entirely on dossier compilation and contract manufacturing rather than direct retail.</p>
      
      <h3>Operational Challenges</h3>
      <div class="alert-box warning">
        <strong>Client Concentration Risk</strong>
        <p>Approximately 68% of total gross sales are linked to a single multinational entity (the Noumed Group), primarily driving high-volume paracetamol-related exports.</p>
      </div>
      <div class="alert-box warning">
        <strong>The Milestone Billing Trap</strong>
        <p>The lengthy R&D process creates massive unbilled receivables, extending the Gross Current Asset (GCA) cycle to ~424 days, trapping working capital.</p>
      </div>

      <h3>Digital Transformation Opportunities</h3>
      <ul class="feature-list">
        <li><strong>AI Dossier Automation:</strong> NLP agents to automate eCTD preparation and collapse the GCA cycle.</li>
        <li><strong>Next-Gen LIMS:</strong> Cloud-native systems integrated with deep learning for 'in silico' formulation predictions.</li>
        <li><strong>Treasury Automation:</strong> Algorithmic hedging to protect thin export margins against unhedged foreign exchange volatility.</li>
      </ul>
    `
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
  const contentArea = document.getElementById('docs-content-area');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');
  const themeToggle = document.getElementById('theme-toggle');
  
  // Theme functionality (reuse from main)
  if (themeToggle) {
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark');
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
    }
    
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      if (newTheme === 'dark') {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
      } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
      }
    });
  }

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('mobile-open');
    });
  }
  
  // Navigation active state and content rendering
  function renderContent(category) {
    const data = docsData[category];
    if (!data) return;
    
    // Fade out
    contentArea.style.opacity = 0;
    
    setTimeout(() => {
      contentArea.innerHTML = `
        <div class="docs-header">
          <div class="docs-icon-large">${data.icon}</div>
          <h1>${data.title}</h1>
        </div>
        <div class="docs-body">
          ${data.content}
        </div>
      `;
      // Fade in
      contentArea.style.opacity = 1;
    }, 200);
  }

  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Update active state
      sidebarLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      // Render content
      const category = link.getAttribute('data-category');
      renderContent(category);
      
      // On mobile, close sidebar (simulated via scroll to top)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Initial render
  renderContent('overview');
});
