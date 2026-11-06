'use strict';

const worlds = {
  starter: {num:'WORLD 01 · THE ORIGIN', name:'Starter Plains', desc:'Meet the engineer behind the pixels: my story, approach and the journey from shipping features to leading teams.', tags:['ABOUT ME','PRODUCT ENGINEERING','CAREER'], icon:'starter', href:'#about', action:'MEET THE PLAYER'},
  projects: {num:'WORLD 02 · FEATURED DESTINATION', name:'Projects Kingdom', desc:'Enter the home of Hunter Vault, Zendtri POS, Filipino Alamat, Hero Journals and seven more documented builds.', tags:['11 BUILDS','WEB + MOBILE','CASE STUDIES'], icon:'projects', href:'#projects', action:'EXPLORE PROJECTS'},
  skills: {num:'WORLD 03 · THE INVENTORY', name:'Skill Caverns', desc:'See the everyday tools of the trade: frontend, mobile, backend, data, integrations and delivery.', tags:['REACT','REACT NATIVE','TYPESCRIPT'], icon:'skills', href:'#skills', action:'OPEN THE INVENTORY'},
  boss: {num:'WORLD 04 · HARD MODE', name:'Boss Fortress', desc:'Architecture, offline mobile operations and enterprise integrations: the harder problems I love working on.', tags:['ARCHITECTURE','INTEGRATIONS','RELIABILITY'], icon:'boss', href:'#challenges', action:'FACE THE CHALLENGES'},
  career: {num:'WORLD 05 · LEVEL-UP PATH', name:'Career Highlands', desc:'Explore my progression through full-stack development, software delivery and engineering leadership.', tags:['2018 → NOW','TECH LEAD','MENTORSHIP'], icon:'career', href:'#experience', action:'VIEW EXPERIENCE'},
  library: {num:'WORLD 06 · FIELD NOTES', name:'Knowledge Library', desc:'Thoughts on React architecture, AI coding agents, SEO experiments and lessons from shipping.', tags:['ENGINEERING','AI','BUILDING'], icon:'library', href:'#field-notes', action:'READ FIELD NOTES'},
  contact: {num:'WORLD 07 · FINAL DESTINATION', name:'Contact Castle', desc:'Have a product idea, interesting engineering challenge or opportunity? The next adventure starts here.', tags:['COLLABORATE','PROJECTS','CONNECT'], icon:'contact', href:'#contact', action:'LET’S TALK'},
  services: {num:'BONUS WORLD · OPTIONAL ROUTE', name:"Builders' Bazaar", desc:'Explore web products, mobile apps and e-commerce work—practical solutions shaped around real business problems.', tags:['WEB','MOBILE','COMMERCE'], icon:'services', href:'https://algermakiputin.com/contact/', action:'DISCUSS A PROJECT'}
};

const selectWorld = (key, focusPreview = false) => {
  const w = worlds[key]; if (!w) return;
  for (const node of document.querySelectorAll('[data-world]')) {
    const selected = node.dataset.world === key;
    node.classList.toggle('active',selected);
    node.setAttribute('aria-pressed',String(selected));
  }
  document.getElementById('preview-icon').src = `./assets/${w.icon}.svg`;
  document.getElementById('preview-meta').textContent = w.num;
  document.getElementById('preview-title').textContent = w.name;
  document.getElementById('preview-description').textContent = w.desc;
  const tags = document.getElementById('preview-tags'); tags.replaceChildren();
  for (const label of w.tags) { const span = document.createElement('span'); span.textContent=label; tags.append(span); }
  const link = document.getElementById('preview-link');
  link.firstChild.textContent = `${w.action} `;
  link.href = w.href;
  if (w.href.startsWith('http')) {link.target='_blank';link.rel='noopener noreferrer';}
  else {link.removeAttribute('target'); link.removeAttribute('rel');}
  if (focusPreview) document.getElementById('world-preview').scrollIntoView({behavior:'smooth',block:'nearest'});
};

document.querySelectorAll('.world-node').forEach(node => node.addEventListener('click',() => selectWorld(node.dataset.world)));

const archiveToggle = document.getElementById('archive-toggle');
archiveToggle.addEventListener('click',() => {
  const grid = document.getElementById('project-archive');
  const expanded = archiveToggle.getAttribute('aria-expanded') === 'true';
  archiveToggle.setAttribute('aria-expanded',String(!expanded));
  grid.hidden = expanded;
  archiveToggle.innerHTML = expanded ? 'SHOW 7 MORE BUILDS <span aria-hidden="true">↓</span>' : 'HIDE ARCHIVE <span aria-hidden="true">↑</span>';
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
function closeMenu() { menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open navigation'); mobileMenu.hidden=true; }
menuToggle.addEventListener('click',() => {
  const expanded = menuToggle.getAttribute('aria-expanded')==='true';
  menuToggle.setAttribute('aria-expanded',String(!expanded));
  menuToggle.setAttribute('aria-label',expanded?'Open navigation':'Close navigation');
  mobileMenu.hidden=expanded;
});
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMenu));
document.addEventListener('keydown',e => {if(e.key==='Escape')closeMenu();});

const progress = document.getElementById('scroll-progress');
function updateProgress() {
  const max = document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width = (max>0 ? (100*window.scrollY/max) : 0).toFixed(2)+'%';
}
window.addEventListener('scroll',updateProgress,{passive:true});window.addEventListener('resize',updateProgress);updateProgress();

// Small, optional hero interaction. Keyboard controls are active only while hero is visible.
const avatar = document.getElementById('hero-character');
const stage = document.getElementById('hero-stage');
stage.addEventListener('pointerdown', () => stage.focus({preventScroll:true}));
const mystery = document.getElementById('mystery-block');
const bubble = document.getElementById('fact-bubble');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let avatarX=0, jumping=false, funFactIndex=0;
const facts=['ACHIEVEMENT UNLOCKED: 8+ YEARS SHIPPING SOFTWARE','SIDE QUEST: BUILT A FINANCE RPG CALLED HUNTER VAULT','POWER-UP: REACT NATIVE + OFFLINE-FIRST SYSTEMS','BONUS STAR: 50K+ FILIPINO ALAMAT DOWNLOADS'];
function jump(){ if(jumping || prefersReducedMotion.matches)return; jumping=true;avatar.classList.remove('jump');void avatar.offsetWidth;avatar.classList.add('jump');setTimeout(()=>{jumping=false;avatar.classList.remove('jump')},630); }
function move(direction){ avatarX=Math.min(82,Math.max(-82,avatarX+direction*18));avatar.style.setProperty('--avatar-x', `${avatarX}px`);avatar.classList.toggle('facing-left',direction<0);avatar.classList.add('walking');setTimeout(()=>avatar.classList.remove('walking'),210); }
function revealFact(){bubble.textContent=facts[funFactIndex++ % facts.length];bubble.hidden=false;mystery.classList.add('hit');setTimeout(()=>mystery.classList.remove('hit'),320);if(!prefersReducedMotion.matches)jump();}
mystery.addEventListener('click',revealFact);
document.getElementById('jump-button').addEventListener('click',jump);
document.addEventListener('keydown',e => {
  if (e.target instanceof HTMLElement && e.target.closest('input, textarea, select, button, a, [contenteditable]')) return;
  const rect=stage.getBoundingClientRect();
  if(rect.bottom<0 || rect.top>window.innerHeight || !stage.contains(document.activeElement) && document.activeElement !== stage) return;
  if(e.key==='ArrowLeft'||e.key.toLowerCase()==='a'){e.preventDefault();move(-1);}
  if(e.key==='ArrowRight'||e.key.toLowerCase()==='d'){e.preventDefault();move(1);}
  if(e.code==='Space'){e.preventDefault();jump();}
});

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.desktop-nav a');
if ('IntersectionObserver' in window) {
  const observer=new IntersectionObserver(entries=>{ for(const entry of entries){ if(entry.isIntersecting){navLinks.forEach(a=>a.classList.toggle('is-current',a.getAttribute('href')==='#'+entry.target.id));} } },{rootMargin:'-18% 0px -67% 0px',threshold:0});
  sections.forEach(section=>observer.observe(section));
}
