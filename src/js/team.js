const sliderList = document.querySelector('.third-section-list');
const dots = document.querySelectorAll('.dot');
const cardCount = sliderList.children.length; // Общее количество карточек
const visibleCards = 4; // Сколько карточек видно одновременно
let currentIndex = 0; // Текущая позиция

// Ширина одной карточки (включая gap)
const cardWidth = sliderList.children[0].offsetWidth + 20;

// Дублирование карточек для плавного цикла
for (let i = 0; i < visibleCards; i++) {
  const clone = sliderList.children[i].cloneNode(true);
  sliderList.appendChild(clone);
}

// Функция для обновления слайдера
function updateSlider() {
  sliderList.style.transition = 'transform 0.8s ease-in-out';
  sliderList.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  // Проверка выхода за пределы и плавное возвращение
  if (currentIndex === cardCount) {
    setTimeout(() => {
      sliderList.style.transition = 'none'; // Убираем анимацию
      currentIndex = 0; // Возврат в начало
      sliderList.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }, 800); // Совпадает с длительностью анимации
  }
}

// Обновление активных дотов
function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex % cardCount);
  });
}

// Обработчик кликов по дотам
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index; // Устанавливаем текущую позицию
    updateSlider();
    updateDots();
  });
});

// Автоматическое переключение (опционально)
setInterval(() => {
  currentIndex++;
  updateSlider();
  updateDots();
}, 3000); // Интервал 3 секунды
