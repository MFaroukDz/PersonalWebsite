/*
 * Custom script to populate the portfolio with content from profileData and
 * implement interactive behaviors such as theme switching. The contents of
 * profileData are defined in data/profile.js.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle implementation
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');

  // Initialize theme from localStorage or default to light
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    body.setAttribute('data-theme', storedTheme);
  } else {
    body.setAttribute('data-theme', 'light');
  }
  updateThemeIcon();

  themeToggle.addEventListener('click', () => {
    const current = body.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon();
  });

  function updateThemeIcon() {
    if (body.getAttribute('data-theme') === 'dark') {
      themeToggle.textContent = '☀️';
    } else {
      themeToggle.textContent = '🌙';
    }
  }

  // Populate hero section
  if (profileData) {
    document.getElementById('heroName').textContent = profileData.name || '';
    document.getElementById('heroTagline').textContent = profileData.tagline || '';
    if (profileData.highlight) {
      document.getElementById('heroHighlight').textContent = profileData.highlight;
    }
    document.getElementById('heroDescription').textContent = profileData.bio || '';
    // Roles
    const rolesEl = document.getElementById('heroRoles');
    rolesEl.innerHTML = '';
    if (Array.isArray(profileData.roles)) {
      profileData.roles.forEach((role) => {
        const span = document.createElement('span');
        span.className = 'role-item';
        span.textContent = role;
        rolesEl.appendChild(span);
      });
    }
    // Photo
    const heroPhoto = document.getElementById('heroPhoto');
    if (profileData.photo) {
      heroPhoto.src = profileData.photo;
    }
  }

  // Social bar
  const socialBar = document.getElementById('socialBar');
  socialBar.innerHTML = '';
  if (profileData && profileData.links) {
    const iconMap = {
      email: '✉️',
      github: '🐙',
      linkedin: '🔗',
      scholar: '🎓',
      orcid: '🧬',
      cv: '📄'
    };
    Object.keys(profileData.links).forEach((key) => {
      const url = profileData.links[key];
      if (url) {
        const a = document.createElement('a');
        // Mailto links should remain as is
        a.href = url;
        a.target = url.startsWith('http') ? '_blank' : '';
        a.rel = url.startsWith('http') ? 'noopener' : '';
        a.className = 'social-link';
        a.title = key;
        a.textContent = iconMap[key] || key;
        socialBar.appendChild(a);
      }
    });
  }

  // About section
  const aboutContainer = document.getElementById('aboutContent');
  aboutContainer.innerHTML = '';
  if (profileData && profileData.bio) {
    // Split on newline or double newline to form paragraphs
    profileData.bio.split(/\n+/).forEach((para) => {
      const p = document.createElement('p');
      p.textContent = para.trim();
      p.classList.add('animate');
      aboutContainer.appendChild(p);
    });
  }
  if (profileData && profileData.affiliations) {
    const ul = document.createElement('ul');
    ul.className = 'affiliations-list';
    profileData.affiliations.forEach((aff) => {
      const li = document.createElement('li');
      li.textContent = aff;
      li.classList.add('animate');
      ul.appendChild(li);
    });
    aboutContainer.appendChild(ul);
  }

  // Experience timeline
  const expTimeline = document.getElementById('experienceTimeline');
  expTimeline.innerHTML = '';
  (profileData.experiences || []).forEach((exp) => {
    const item = document.createElement('div');
    item.className = 'timeline-item animate';
    item.innerHTML = `
      <div class="timeline-date">${exp.start} – ${exp.end}</div>
      <h3 class="timeline-title">${exp.title}</h3>
      <p class="timeline-meta">${exp.company} • ${exp.location}</p>
      <p class="timeline-desc">${exp.description}</p>
    `;
    expTimeline.appendChild(item);
  });

  // Education timeline
  const eduTimeline = document.getElementById('educationTimeline');
  eduTimeline.innerHTML = '';
  (profileData.education || []).forEach((edu) => {
    const item = document.createElement('div');
    item.className = 'timeline-item animate';
    item.innerHTML = `
      <div class="timeline-date">${edu.start} – ${edu.end}</div>
      <h3 class="timeline-title">${edu.degree}</h3>
      <p class="timeline-meta">${edu.institution} • ${edu.location}</p>
      <p class="timeline-desc">${edu.description}</p>
    `;
    eduTimeline.appendChild(item);
  });

  // Skills
  const skillsContainer = document.getElementById('skillsContainer');
  skillsContainer.innerHTML = '';
  (profileData.skills || []).forEach((cat) => {
    const section = document.createElement('div');
    section.className = 'skills-category animate';
    const heading = document.createElement('h3');
    heading.className = 'skills-category-title';
    heading.textContent = cat.category;
    section.appendChild(heading);
    cat.list.forEach((skill) => {
      const skillDiv = document.createElement('div');
      skillDiv.className = 'skill-item';
      skillDiv.innerHTML = `
        <div class="skill-label">${skill.name}</div>
        <div class="skill-bar"><div class="skill-bar-fill" style="width: ${skill.level}%"></div></div>
        <div class="skill-value">${skill.level}%</div>
      `;
      section.appendChild(skillDiv);
    });
    skillsContainer.appendChild(section);
  });

  // Publications
  const pubsContainer = document.getElementById('publicationsContainer');
  pubsContainer.innerHTML = '';
  (profileData.publications || []).forEach((pub) => {
    const card = document.createElement('div');
    card.className = 'pub-card animate';
    card.innerHTML = `
      <h4 class="pub-title">${pub.title}</h4>
      <p class="pub-authors">${pub.authors.join(', ')}</p>
      <p class="pub-meta">${pub.venue || ''}${pub.venue && pub.year ? ' • ' : ''}${pub.year || ''}</p>
      ${pub.doi ? `<p class="pub-links"><a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener">DOI</a></p>` : ''}
    `;
    pubsContainer.appendChild(card);
  });

  // Latest Articles
  const articlesContainer = document.getElementById('articlesContainer');
  if (articlesContainer) {
    articlesContainer.innerHTML = '';
    (profileData.articles || []).forEach((article) => {
      const card = document.createElement('div');
      card.className = 'article-card animate';
      card.innerHTML = `
        <h4 class="article-title">${article.title}</h4>
        <p class="article-meta">${article.date || ''}</p>
        <p class="article-summary">${article.summary || ''}</p>
        ${article.link ? `<p class="article-links"><a href="${article.link}" target="_blank" rel="noopener">Read more</a></p>` : ''}
      `;
      articlesContainer.appendChild(card);
    });
  }

  // Footer year
  document.getElementById('footerYear').textContent = new Date().getFullYear().toString();

  // Initialize reveal animations using IntersectionObserver
  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.animate').forEach((el) => {
      observer.observe(el);
    });
  }

  initScrollAnimations();
});