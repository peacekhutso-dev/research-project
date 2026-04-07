/* ══════════════════════════════════════════════════════════════
   Peace Khutso Molimo · Research Portfolio · script.js
   ══════════════════════════════════════════════════════════════ */

/* ── SVG icon strings ─────────────────────────────────────────── */
const IC = {
  about: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  doc:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  res:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  mail:  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  gh:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  li:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  loc:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  search:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  report:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`,
  video: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,
  slides:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  open:  `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
};

/* ── Type config ──────────────────────────────────────────────── */
const TYPE_CONFIG = {
  Report: {
    icon: 'report',
    color: '#00d4aa',
    btnLabel: 'Open Report',
    actionLabel: 'View PDF'
  },
  Video: {
    icon: 'video',
    color: '#f97316',
    btnLabel: 'Watch Video',
    actionLabel: 'Open Video'
  },
  Slides: {
    icon: 'slides',
    color: '#6366f1',
    btnLabel: 'View Slides',
    actionLabel: 'Open Slides'
  }
};

/* ── State ────────────────────────────────────────────────────── */
let D = null;
let sbExpanded = false;
let activeSec = 'about';
let peekTimer = null;
let mmOpen = false;

/* ── Boot ─────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const r = await fetch('data.json');
    D = await r.json();
  } catch(e) {
    console.warn('Could not load data.json:', e);
    D = {
      profile: { name: 'Peace Khutso Molimo', initials: 'PKM', title: 'BSc Computer Science Honours Candidate',
        department: 'Computer Science', institution: 'University of the Western Cape',
        tagline: 'Designing intelligent systems for equitable, efficient public service delivery.',
        bio_intro: '', bio_detail: '', interests: [], skills: [], email: '', github: '#', linkedin: '#' },
      research: { title: 'Smart Queue Management System', subtitle: '', abstract: '', keywords: [] },
      terms: []
    };
  }

  render();
  initTheme();
  initSidebar();
  initHamburger();
  initSearch();
  initScrollSpy();
  initReveal();

  setTimeout(() => document.getElementById('loader').classList.add('gone'), 500);
});

/* ── Master render ─────────────────────────────────────────────── */
function render() {
  renderHero();
  renderBio();
  renderResearch();
  renderTerms();
  renderNavTabs();
  renderSidebar();
  renderMobileMenu();
  document.getElementById('footerName').textContent = D.profile.name;
  document.getElementById('footerYear').textContent = new Date().getFullYear();
}

/* ── Hero ─────────────────────────────────────────────────────── */
function renderHero() {
  const p = D.profile;
  document.title = p.name + ' · Research Portfolio';
  setEl('heroTagline', p.tagline);
}

/* ── Bio ──────────────────────────────────────────────────────── */
function renderBio() {
  const p = D.profile;
  setEl('bioIntro',  p.bio_intro);
  setEl('bioDetail', p.bio_detail);

  document.getElementById('interestList').innerHTML =
    (p.interests || []).map(i => `<li>${i}</li>`).join('');

  document.getElementById('skillsWrap').innerHTML =
    (p.skills || []).map(s => `<span class="skill-pill">${s}</span>`).join('');

  let c = '';
  if (p.email)       c += contactRow(IC.mail, `<a href="mailto:${p.email}">${p.email}</a>`);
  if (p.institution) c += contactRow(IC.loc,  p.institution);
  if (p.github && p.github !== '#')   c += contactRow(IC.gh, `<a href="${p.github}" target="_blank" rel="noopener">GitHub Profile</a>`);
  if (p.linkedin && p.linkedin !== '#') c += contactRow(IC.li, `<a href="${p.linkedin}" target="_blank" rel="noopener">LinkedIn Profile</a>`);
  document.getElementById('contactBlock').innerHTML = c;
}
function contactRow(icon, text) {
  return `<div class="contact-row">${icon}<span>${text}</span></div>`;
}

/* ── Research overview ─────────────────────────────────────────── */
function renderResearch() {
  const r = D.research;
  setEl('researchTitle', r.title);
  setEl('researchSub',   r.subtitle);
  setEl('abstractText',  r.abstract);
  document.getElementById('kwRow').innerHTML =
    (r.keywords || []).map(k => `<span class="kw-pill">${k}</span>`).join('');
}

/* ── Terms ────────────────────────────────────────────────────── */
function renderTerms() {
  const wrap = document.getElementById('termsWrap');
  wrap.innerHTML = D.terms.map(term => `
    <section id="${term.id}" class="s-term appear">
      <div class="inner">
        <div class="section-label">${term.label}</div>
        <div class="term-header">
          <h2 class="s-heading">${term.label} <em>Documents</em></h2>
          <span class="term-period" style="background:${term.theme}18;color:${term.theme};border:1px solid ${term.theme}30">${term.period}</span>
        </div>
        <p class="term-summary">${term.summary}</p>

        <div class="doc-filter-wrap">
          <div class="doc-filter-ic">${IC.search}</div>
          <input class="doc-filter" type="text" placeholder="Filter ${term.label} documents…"
                 data-tid="${term.id}" oninput="filterDocs(this)" aria-label="Filter documents"/>
        </div>

        <div class="doc-grid doc-grid-tri" id="grid-${term.id}">
          ${term.documents.map(d => docCard(d, term)).join('')}
        </div>
      </div>
    </section>
  `).join('');
}

function docCard(d, term) {
  const cfg = TYPE_CONFIG[d.type] || { icon: 'report', color: term.theme, btnLabel: 'Open', actionLabel: 'Open' };
  const cardColor = cfg.color;
  const disabled = !d.url || d.url === '#';
  const date = new Date(d.date).toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' });

  return `
    <div class="doc-card doc-card-feature" style="--tc:${cardColor}"
         data-q="${(d.title + ' ' + d.type + ' ' + d.description).toLowerCase()}">
      <div class="dc-icon-wrap" style="background:${cardColor}18;border-color:${cardColor}30">
        <span style="color:${cardColor}">${IC[cfg.icon]}</span>
      </div>
      <div class="dc-type-badge" style="background:${cardColor}18;color:${cardColor}">${d.type}</div>
      <div class="dc-title">${d.title}</div>
      <div class="dc-desc">${d.description}</div>
      <div class="dc-foot">
        <span class="dc-date-small">${date}</span>
        ${disabled
          ? `<span class="dc-btn disabled">${IC.open} ${cfg.btnLabel}</span>`
          : `<a class="dc-btn" href="${d.url}" target="_blank" rel="noopener" style="background:${cardColor};border-color:${cardColor}">${IC.open} ${cfg.btnLabel}</a>`}
      </div>
    </div>
  `;
}

/* ── Filter docs ──────────────────────────────────────────────── */
function filterDocs(input) {
  const q = input.value.toLowerCase().trim();
  const grid = document.getElementById('grid-' + input.dataset.tid);
  const cards = Array.from(grid.querySelectorAll('.doc-card'));
  let shown = 0;

  cards.forEach(c => {
    const match = !q || c.dataset.q.includes(q);
    c.style.display = match ? '' : 'none';
    if (match) shown++;
  });

  let nd = grid.querySelector('.no-docs');
  if (!shown) {
    if (!nd) { nd = document.createElement('div'); nd.className = 'no-docs'; grid.appendChild(nd); }
    nd.textContent = `No documents matching "${q}"`;
  } else if (nd) nd.remove();
}

/* ── Nav tabs ─────────────────────────────────────────────────── */
function renderNavTabs() {
  const sections = [
    { id: 'about',    label: 'About' },
    { id: 'research', label: 'Research' },
    ...D.terms.map(t => ({ id: t.id, label: t.label }))
  ];
  document.getElementById('navTabs').innerHTML = sections.map(s =>
    `<button class="nav-tab${s.id === 'about' ? ' on' : ''}" data-sec="${s.id}"
             onclick="goTo('${s.id}')">${s.label}</button>`
  ).join('');
}

/* ── Sidebar ──────────────────────────────────────────────────── */
function renderSidebar() {
  const items = [
    { id: 'about',    label: 'About',    sub: 'Profile & bio',       icon: IC.about, color: 'var(--accent)' },
    { id: 'research', label: 'Research', sub: 'Overview & abstract',  icon: IC.res,   color: 'var(--accent)' },
    ...D.terms.map(t => ({ id: t.id, label: t.label, sub: t.period, icon: IC.doc, color: t.theme, docs: t.documents }))
  ];

  document.getElementById('sbItems').innerHTML = items.map(it => `
    <button class="sb-item${it.id === 'about' ? ' on' : ''}"
            data-id="${it.id}"
            onclick="goTo('${it.id}'); setActive('${it.id}')"
            onmouseenter="showPeek('${it.id}')"
            onmouseleave="schedulePeekHide()">
      <div class="sb-ic">${it.icon}</div>
      <div class="sb-txt">
        <div class="sb-lbl">${it.label}</div>
        <div class="sb-sub">${it.sub}</div>
      </div>
      <div class="sb-pip" style="background:${it.color}"></div>
    </button>
  `).join('');
}

function initSidebar() {
  const sb = document.getElementById('sidebar');
  const btn = document.getElementById('sbToggle');
  const nav = document.getElementById('navbar');
  btn.addEventListener('click', () => {
    sbExpanded = !sbExpanded;
    sb.classList.toggle('expanded', sbExpanded);
    nav.classList.toggle('expanded', sbExpanded);
    if (!sbExpanded) hidePeek();
  });
}

function setActive(id) {
  activeSec = id;
  document.querySelectorAll('.sb-item').forEach(el => el.classList.toggle('on', el.dataset.id === id));
  document.querySelectorAll('.nav-tab').forEach(el => el.classList.toggle('on', el.dataset.sec === id));
  document.querySelectorAll('.mm-item').forEach(el => el.classList.toggle('on', el.dataset.sec === id));
}

/* ── Sidebar peek ─────────────────────────────────────────────── */
function showPeek(id) {
  if (!sbExpanded) return;
  clearTimeout(peekTimer);
  const peek = document.getElementById('sbPeek');
  const content = document.getElementById('sbPeekContent');

  if (id === 'about') {
    content.innerHTML = `<div class="sbp-hl">About</div>` +
      (D.profile.interests || []).slice(0, 5).map(i =>
        `<div class="sbp-row"><div class="sbp-d" style="background:var(--accent)"></div>${i}</div>`).join('');
  } else if (id === 'research') {
    content.innerHTML = `<div class="sbp-hl">Research</div>
      <div class="sbp-row"><div class="sbp-d" style="background:var(--accent)"></div>${D.research.title}</div>
      ${(D.research.keywords || []).slice(0, 4).map(k =>
        `<div class="sbp-row"><div class="sbp-d" style="background:var(--accent)"></div>${k}</div>`).join('')}`;
  } else {
    const term = D.terms.find(t => t.id === id);
    if (!term) return;
    content.innerHTML = `<div class="sbp-hl">${term.label} · ${term.period}</div>` +
      term.documents.map(d => {
        const cfg = TYPE_CONFIG[d.type] || {};
        return `<div class="sbp-row"><div class="sbp-d" style="background:${cfg.color || term.theme}"></div>${d.type}: ${d.title}</div>`;
      }).join('');
  }
  peek.classList.add('show');
}

function hidePeek() {
  document.getElementById('sbPeek').classList.remove('show');
}
function schedulePeekHide() {
  peekTimer = setTimeout(hidePeek, 180);
}
document.getElementById('sbPeek').addEventListener('mouseenter', () => clearTimeout(peekTimer));
document.getElementById('sbPeek').addEventListener('mouseleave', schedulePeekHide);

/* ── Mobile menu ──────────────────────────────────────────────── */
function renderMobileMenu() {
  const items = [
    { id: 'about',    label: 'About' },
    { id: 'research', label: 'Research' },
    ...D.terms.map(t => ({ id: t.id, label: t.label, color: t.theme }))
  ];
  document.getElementById('mmInner').innerHTML = items.map(it => `
    <button class="mm-item${it.id === 'about' ? ' on' : ''}" data-sec="${it.id}"
            onclick="goTo('${it.id}'); setActive('${it.id}'); closeMenu()">
      <div class="mm-dot" style="background:${it.color || 'var(--accent)'}"></div>
      ${it.label}
    </button>
  `).join('');
}

function initHamburger() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  btn.addEventListener('click', () => {
    mmOpen = !mmOpen;
    btn.classList.toggle('open', mmOpen);
    menu.classList.toggle('open', mmOpen);
    menu.setAttribute('aria-hidden', String(!mmOpen));
  });
}
function closeMenu() {
  mmOpen = false;
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('mobileMenu').setAttribute('aria-hidden', 'true');
}

/* ── Navigation ───────────────────────────────────────────────── */
function goTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 58;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navH - 8, behavior: 'smooth' });
  setActive(id);
}

/* ── Scroll spy ───────────────────────────────────────────────── */
function initScrollSpy() {
  const ids = ['about', 'research', ...D.terms.map(t => t.id)];
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const midY = window.scrollY + window.innerHeight * 0.35;
      let cur = ids[0];
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY - 80 <= midY) cur = id;
      });
      if (cur !== activeSec) setActive(cur);
      ticking = false;
    });
  }, { passive: true });
}

/* ── Reveal on scroll ─────────────────────────────────────────── */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      e.target.querySelectorAll('.doc-card').forEach((c, i) => {
        setTimeout(() => c.classList.add('in'), i * 80);
      });
      io.unobserve(e.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.appear').forEach(el => io.observe(el));
}

/* ── Theme ────────────────────────────────────────────────────── */
function initTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  document.getElementById('themeBtn').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

/* ── Search ───────────────────────────────────────────────────── */
function initSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input   = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');

  const open  = () => { overlay.classList.add('open'); input.focus(); };
  const close = () => { overlay.classList.remove('open'); input.value = ''; results.innerHTML = ''; };

  document.getElementById('searchBtn').addEventListener('click', open);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); open(); }
    if (e.key === 'Escape') close();
  });

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.innerHTML = ''; return; }

    const hits = [];
    D.terms.forEach(term => {
      term.documents.forEach(doc => {
        if ((doc.title + doc.description + doc.type).toLowerCase().includes(q)) {
          hits.push({ term, doc });
        }
      });
    });

    if (!hits.length) {
      results.innerHTML = `<div class="sr-empty">No results for "<strong>${escHtml(q)}</strong>"</div>`;
      return;
    }
    results.innerHTML = hits.slice(0, 8).map(({ term, doc }) => {
      const cfg = TYPE_CONFIG[doc.type] || { color: term.theme, icon: 'report' };
      return `
        <div class="sr-item" onclick="goTo('${term.id}'); close()">
          <div class="sr-icon" style="background:${cfg.color}18;color:${cfg.color}">${IC[cfg.icon]}</div>
          <div>
            <div class="sr-title">${hl(doc.title, q)}</div>
            <div class="sr-sub">${term.label} · ${doc.type}</div>
          </div>
        </div>
      `;
    }).join('');
  });
}

/* ── Helpers ──────────────────────────────────────────────────── */
function setEl(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text || '';
}
function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function hl(text, q) {
  const i = text.toLowerCase().indexOf(q);
  if (i < 0) return escHtml(text);
  return escHtml(text.slice(0, i)) + `<mark>${escHtml(text.slice(i, i + q.length))}</mark>` + escHtml(text.slice(i + q.length));
}