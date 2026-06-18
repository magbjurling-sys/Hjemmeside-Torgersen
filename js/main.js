// Mobil-meny
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Scroll-reveal
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && reveals.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('in'));
}

// Kontaktskjema – enkel klientvalidering / bekreftelse (ingen backend)
const form = document.querySelector('#kontaktskjema');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    if (status) {
      status.textContent = 'Takk! Henvendelsen er klar til å sendes. Ta gjerne også kontakt på telefon 98 67 29 29.';
      status.style.color = '#a9905f';
    }
    form.reset();
  });
}
