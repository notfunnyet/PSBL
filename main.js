const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const backToTopBtn = document.querySelector('.back-to-top');
const themeToggle = document.querySelector('#theme-toggle');
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('#modal-title');
const modalBody = document.querySelector('#modal-body');
const closeModalButton = document.querySelector('.close-modal');
if (menuToggle && nav) { menuToggle.addEventListener('click', () => nav.classList.toggle('is-open')); }
const setCurrentYear = () => { const yearNode = document.querySelector('#year'); if (yearNode) yearNode.textContent = new Date().getFullYear(); };
const handleBackToTop = () => { if (!backToTopBtn) return; backToTopBtn.classList.toggle('visible', window.scrollY > 360); };
if (backToTopBtn) { backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' })); }
if (themeToggle) { themeToggle.addEventListener('click', () => { body.classList.toggle('dark-mode'); const isDark = body.classList.contains('dark-mode'); themeToggle.setAttribute('aria-label', isDark ? 'Ativar modo claro' : 'Ativar modo escuro'); themeToggle.textContent = isDark ? 'â˜€' : 'â˜¾'; }); }
if (modal && closeModalButton) { closeModalButton.addEventListener('click', () => modal.classList.remove('is-open')); modal.addEventListener('click', (event) => { if (event.target === modal) modal.classList.remove('is-open'); }); }
document.querySelectorAll('[data-doc-modal]').forEach((button) => { button.addEventListener('click', () => { const title = button.dataset.docModal; if (!modal || !modalTitle || !modalBody) return; modalTitle.textContent = title; modalBody.innerHTML = '<p>Documento institucional em preparaÃ§Ã£o. Este texto exemplifica a apresentaÃ§Ã£o do material oficial, sujeito a revisÃ£o conforme o processo formal do partido.</p><p>Em versÃµes finais, a publicaÃ§Ã£o oficial serÃ¡ disponibilizada nas pÃ¡ginas de documentos e transparÃªncia.</p>'; modal.classList.add('is-open'); }); });
document.querySelectorAll('.filter-btn').forEach((button) => { button.addEventListener('click', () => { const filter = button.dataset.filter; document.querySelectorAll('.filter-btn').forEach((btn) => btn.classList.toggle('active', btn === button)); document.querySelectorAll('.news-item').forEach((item) => { const visible = filter === 'all' || item.dataset.category === filter; item.classList.toggle('hidden', !visible); }); }); });
window.addEventListener('scroll', handleBackToTop);
setCurrentYear();
handleBackToTop();
