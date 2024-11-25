const scrollToTopButton = document.getElementById('scrollToTop');

if (scrollToTopButton) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopButton.classList.add('show');
    } else {
      scrollToTopButton.classList.remove('show');
    }
  });

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
} else {
  console.error('Элемент с ID "scrollToTop" не найден.');
}
