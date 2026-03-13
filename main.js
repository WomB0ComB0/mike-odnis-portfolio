document.addEventListener('DOMContentLoaded', () => {
  // Render Experiences
  const experienceContainer = document.getElementById('experience-container');
  if (experienceContainer) {
    experienceContainer.innerHTML = portfolioData.experiences.map(exp => `
      <article class="relative pl-8 border-l border-zinc-800 hover:border-emerald-400 transition-colors duration-300 group fade-in">
        <div class="absolute w-4 h-4 bg-zinc-950 border-2 border-emerald-400 rounded-full -left-[9px] top-1 group-hover:bg-emerald-400 transition-colors duration-300"></div>
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <div>
            <h3 class="text-xl font-bold text-zinc-100 italic transition-colors group-hover:text-emerald-400">${exp.position}</h3>
            <div class="text-emerald-400 font-mono text-sm mt-1">
              ${exp.companyUrl ? `<a href="${exp.companyUrl}" target="_blank" rel="noopener noreferrer" class="hover:underline">@ ${exp.company}</a>` : `@ ${exp.company}`}
            </div>
          </div>
          <div class="text-zinc-500 text-sm font-mono mt-2 md:mt-0">
            ${exp.startDate} — ${exp.endDate || 'Present'}
          </div>
        </div>
        <p class="text-zinc-400 text-sm mb-4 leading-relaxed">${exp.description}</p>
        <ul class="space-y-2 mb-4">
          ${exp.responsibilities.map(res => `
            <li class="text-zinc-500 text-sm flex items-start">
              <span class="text-emerald-400 mr-2 mt-1">▹</span>
              <span>${res}</span>
            </li>
          `).join('')}
        </ul>
        <div class="flex flex-wrap gap-2">
          ${exp.technologies.map(tech => `
            <span class="text-[10px] uppercase tracking-wider px-2 py-1 bg-zinc-900 text-zinc-400 border border-zinc-800 rounded">${tech}</span>
          `).join('')}
        </div>
      </article>
    `).join('');
  }

  // Render Projects
  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer) {
    projectsContainer.innerHTML = portfolioData.projects.map(p => `
      <article class="bg-zinc-900 rounded-lg p-6 hover:-translate-y-2 transition-transform duration-300 border border-zinc-800 hover:border-emerald-400/50 flex flex-col h-full fade-in">
        <div class="flex justify-between items-start mb-4">
          <div class="text-emerald-400">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <div class="flex space-x-4">
            ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" class="text-zinc-400 hover:text-emerald-400 transition-colors"><i data-lucide="github" class="w-5 h-5"></i></a>` : ''}
            ${p.liveUrl && p.liveUrl !== 'N/A' ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" aria-label="Live Demo" class="text-zinc-400 hover:text-emerald-400 transition-colors"><i data-lucide="external-link" class="w-5 h-5"></i></a>` : ''}
          </div>
        </div>
        <h3 class="text-xl font-bold text-zinc-100 mb-3 group-hover:text-emerald-400 transition-colors">${p.title}</h3>
        <p class="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">${p.description}</p>
        <ul class="flex flex-wrap gap-x-3 gap-y-1 mt-auto">
          ${p.technologies.map(t => `<li class="text-[10px] font-mono text-zinc-500 uppercase tracking-tight">${t}</li>`).join('')}
        </ul>
      </article>
    `).join('');
  }

  // Render Skills
  const skillsHtml = portfolioData.skills.map(s => `<span class="mx-4 text-4xl font-bold text-zinc-800 hover:text-emerald-400 transition-colors duration-300 cursor-default">${s}</span>`).join('');
  const skillsMarquee1 = document.getElementById('skills-marquee-1');
  const skillsMarquee2 = document.getElementById('skills-marquee-2');
  if (skillsMarquee1) skillsMarquee1.innerHTML = skillsHtml;
  if (skillsMarquee2) skillsMarquee2.innerHTML = skillsHtml;

  // Render Certifications
  const certsContainer = document.getElementById('certifications-container');
  if (certsContainer) {
    certsContainer.innerHTML = portfolioData.certifications.map(c => `
      <span class="px-4 py-2 bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 rounded-full text-sm font-mono">${c}</span>
    `).join('');
  }

  // Render Leadership
  const leadershipContainer = document.getElementById('leadership-container');
  if (leadershipContainer) {
    leadershipContainer.innerHTML = portfolioData.leadership.map(l => `
      <div class="relative pl-8 border-l border-zinc-800 hover:border-emerald-400 transition-colors duration-300 group fade-in">
        <div class="absolute w-4 h-4 bg-zinc-950 border-2 border-emerald-400 rounded-full -left-[9px] top-1 group-hover:bg-emerald-400 transition-colors duration-300"></div>
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <h3 class="text-xl font-bold text-zinc-100">${l.role} <span class="text-emerald-400">@ ${l.org}</span></h3>
          <div class="flex items-center text-zinc-500 text-sm font-mono mt-2 md:mt-0">
            <i data-lucide="calendar" class="w-3.5 h-3.5 mr-2"></i> ${l.date}
          </div>
        </div>
        <p class="text-zinc-400 text-sm font-mono flex items-center">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 mr-2"></i> ${l.details}
        </p>
      </div>
    `).join('');
  }

  // Render Hobbies
  const hobbiesContainer = document.getElementById('hobbies-container');
  if (hobbiesContainer) {
    hobbiesContainer.innerHTML = portfolioData.hobbies.map(h => `
      <div class="bg-zinc-900 rounded-lg p-8 border border-zinc-800 hover:border-emerald-400/50 transition-colors duration-300 text-center group fade-in">
        <div class="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300 text-emerald-400">
          <i data-lucide="${h.icon}" class="w-8 h-8"></i>
        </div>
        <h3 class="text-xl font-bold text-zinc-100 mb-4 group-hover:text-emerald-400 transition-colors">${h.title}</h3>
        <p class="text-zinc-400 text-sm leading-relaxed">${h.description}</p>
      </div>
    `).join('');
  }

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Intersection Observer for fade-in animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

