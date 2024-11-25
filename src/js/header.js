(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
    menuLinks: document.querySelectorAll('.mob-menu-link, .header-nav-link'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');

    if (refs.modal.classList.contains('is-hidden')) {
      refs.openModalBtn.style.display = 'block';
      refs.closeModalBtn.style.display = 'none';
    } else {
      refs.openModalBtn.style.display = 'none';
      refs.closeModalBtn.style.display = 'block';
    }
  }

  function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      const scrollHeight = element.getBoundingClientRect().top + window.scrollY;

      window.scrollBy({
        top: scrollHeight - window.scrollY,
        left: 0,
        behavior: 'smooth',
      });
    } else {
      console.warn(`Element not found: ${target}`);
    }
  }

  refs.menuLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = link.getAttribute('href');

      if (!refs.modal.classList.contains('is-hidden')) {
        toggleModal();
      }

      smoothScroll(target);
    });
  });
})();
