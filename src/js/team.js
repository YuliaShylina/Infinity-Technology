const sliderList = document.querySelector('.third-section-list');
const dots = document.querySelectorAll('.dot');
const cardCount = sliderList.children.length;
const visibleCards = 4;
let currentIndex = 0;

const cardWidth = sliderList.children[0].offsetWidth + 20;

for (let i = 0; i < visibleCards; i++) {
  const clone = sliderList.children[i].cloneNode(true);
  sliderList.appendChild(clone);
}

function updateSlider() {
  sliderList.style.transition = 'transform 0.8s ease-in-out';
  sliderList.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  if (currentIndex === cardCount) {
    setTimeout(() => {
      sliderList.style.transition = 'none';
      currentIndex = 0;
      sliderList.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }, 800);
  }
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex % cardCount);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
    updateDots();
  });
});

setInterval(() => {
  currentIndex++;
  updateSlider();
  updateDots();
}, 3000);
