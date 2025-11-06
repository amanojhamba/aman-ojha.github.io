
// Filter projects by tag
const chips = document.querySelectorAll('.chip');
const projects = document.querySelectorAll('.project');
chips.forEach(ch => ch.addEventListener('click', () => {
  chips.forEach(c => c.classList.remove('active'));
  ch.classList.add('active');
  const tag = ch.dataset.filter;
  projects.forEach(p => {
    if (tag === 'all' || p.dataset.tag === tag) p.style.display = '';
    else p.style.display = 'none';
  });
}));

// Simple lightbox
const lb = document.getElementById('lightbox');
const lbImg = lb.querySelector('img');
const lbClose = lb.querySelector('.lightbox-close');
document.querySelectorAll('a.lightbox').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    lbImg.src = a.href;
    lb.style.display = 'flex';
    lb.setAttribute('aria-hidden', 'false');
  });
});
lbClose.addEventListener('click', () => {
  lb.style.display = 'none';
  lb.setAttribute('aria-hidden', 'true');
  lbImg.src = '';
});
lb.addEventListener('click', (e) => {
  if (e.target === lb) lbClose.click();
});
