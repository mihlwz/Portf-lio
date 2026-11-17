const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
menuToggle?.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const filters=document.querySelectorAll('.filter');
const allProjects=[...document.querySelectorAll('.projects-track .project-card')];
const track=document.querySelector('.projects-track');
const prevBtn=document.querySelector('.carousel-prev');
const nextBtn=document.querySelector('.carousel-next');
const dots=document.getElementById('carouselDots');
const currentEl=document.getElementById('carouselCurrent');
const totalEl=document.getElementById('carouselTotal');
let visibleProjects=[...allProjects];
let currentIndex=0;

function renderDots(){
  if(!dots)return;
  dots.innerHTML='';
  visibleProjects.forEach((_,i)=>{
    const b=document.createElement('button');
    b.className='carousel-dot'+(i===currentIndex?' active':'');
    b.type='button'; b.setAttribute('aria-label',`Ir para projeto ${i+1}`);
    b.addEventListener('click',()=>goTo(i));
    dots.appendChild(b);
  });
  if(totalEl) totalEl.textContent=String(visibleProjects.length).padStart(2,'0');
}
function updateCarousel(){
  visibleProjects.forEach((card,i)=>{card.style.display=i===currentIndex?'grid':'none'});
  if(currentEl) currentEl.textContent=String(currentIndex+1).padStart(2,'0');
  // Em um carrossel infinito, as duas setas permanecem sempre disponíveis.
  if(prevBtn) prevBtn.disabled=visibleProjects.length<=1;
  if(nextBtn) nextBtn.disabled=visibleProjects.length<=1;
  dots?.querySelectorAll('.carousel-dot').forEach((d,i)=>d.classList.toggle('active',i===currentIndex));
}
function goTo(index){
  if(!visibleProjects.length)return;
  // Faz a navegação circular: depois do último vem o primeiro e vice-versa.
  currentIndex=((index%visibleProjects.length)+visibleProjects.length)%visibleProjects.length;
  updateCarousel();
}
function applyFilter(category){
  visibleProjects=allProjects.filter(card=>category==='all'||card.dataset.category.split(' ').includes(category));
  allProjects.forEach(card=>card.classList.remove('hidden-filter'));
  currentIndex=0;
  renderDots();
  updateCarousel();
}
filters.forEach(filter=>filter.addEventListener('click',()=>{
  filters.forEach(f=>f.classList.remove('active'));
  filter.classList.add('active');
  applyFilter(filter.dataset.filter);
}));
prevBtn?.addEventListener('click',()=>goTo(currentIndex-1));
nextBtn?.addEventListener('click',()=>goTo(currentIndex+1));
let touchStartX=0;
const carousel=document.querySelector('.projects-carousel');
carousel?.addEventListener('touchstart',e=>touchStartX=e.changedTouches[0].clientX,{passive:true});
carousel?.addEventListener('touchend',e=>{
  const dx=e.changedTouches[0].clientX-touchStartX;
  if(Math.abs(dx)>45) goTo(currentIndex+(dx<0?1:-1));
},{passive:true});
renderDots();
updateCarousel();

const modal=document.getElementById('projectModal');
const modalTitle=document.getElementById('modalTitle');
const modalDescription=document.getElementById('modalDescription');
document.querySelectorAll('.details').forEach(btn=>{
  btn.addEventListener('click',()=>{
    modalTitle.textContent=btn.dataset.title;
    modalDescription.textContent=btn.dataset.description;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden','false');
  });
});
document.querySelector('.modal-close').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
function closeModal(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true')}

// ===== Maze Craze integrado =====
const gameModal = document.getElementById('gameModal');
const gameFrame = document.getElementById('mazeGameFrame');
const gameClose = document.querySelector('.game-modal-close');

function openGame() {
  // Abre o jogo em uma nova aba e mantém o portfólio aberto.
  window.open('jogos/maze-craze/index.html', '_blank', 'noopener,noreferrer');
}
function closeGame() {
  gameModal?.classList.remove('show');
  gameModal?.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('.play-project').forEach(btn => btn.addEventListener('click', openGame));
gameClose?.addEventListener('click', closeGame);
gameModal?.addEventListener('click', e => { if (e.target === gameModal) closeGame(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && gameModal?.classList.contains('show')) closeGame();
});
