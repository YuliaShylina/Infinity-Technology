import Swiper from 'swiper';
import 'swiper/css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconsUrl from '../img/icons.svg';

const BASE_URL = 'https://portfolio-js.b.goit.study/api';

const galleryReviews = document.querySelector('.swiper-wrapper');
const prevBtn = document.querySelector('.swiper-button-prev');
const nextBtn = document.querySelector('.swiper-button-next');
const iconPrev = prevBtn.querySelector('.icon-swipe-prev use');
const iconNext = nextBtn.querySelector('.icon-swipe-next use');

let reviews;

const fetchReviews = async () => {
  try {
    const response = await fetch(`${BASE_URL}/reviews`);
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch reviews. Please try again later.',
      position: 'topRight',
    });
    throw error;
  }
};

const markup = review => {
  return review
    .map(
      ({ author, avatar_url, review: reviewText }) => `
    <li class='swiper-slide user-review'>
      <p class='text-review'>${reviewText}</p>
      <div class='icon-photo-name'>
        <img
          src="${avatar_url}"
          alt="${author}"
          width="40"
          height="40"
          class="avatar-icon"
        />
        <p class="user-name-review">${author}</p>
      </div>
    </li>`
    )
    .join('');
};

const initReviews = async () => {
  try {
    reviews = await fetchReviews();
    if (reviews.length > 0) {
      galleryReviews.innerHTML += markup(reviews);
      swiper.update();
    }
  } catch (error) {
    console.log(error);
    galleryReviews.innerHTML = "<p class='not-found'>Not found</p>";
    disableBtn(prevBtn, true, iconPrev, 'reviews-grey-btn-prev');
    disableBtn(nextBtn, true, iconNext, 'reviews-grey-btn-next');
  }
};

const swiper = new Swiper('.swiper-container', {
  breakpoints: {
    1280: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoHeight: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  simulateTouch: true,
  allowTouchMove: true,
  on: {
    slideChange: () => {
      const currentIndex = swiper.activeIndex;
      const slidesPerView = swiper.params.slidesPerView;
      const totalSlides = reviews.length;

      if (currentIndex === 0) {
        if (document.body.classList.contains('body-dark')) {
          disableBtn(prevBtn, true, iconPrev, 'reviews-dark-grey-btn-prev');
        } else {
          disableBtn(prevBtn, true, iconPrev, 'reviews-grey-btn-prev');
        }
      } else {
        if (document.body.classList.contains('body-dark')) {
          disableBtn(prevBtn, false, iconPrev, 'reviews-white-btn-prev');
        } else {
          disableBtn(prevBtn, false, iconPrev, 'reviews-black-btn-prev');
        }
      }

      if (currentIndex >= totalSlides - slidesPerView) {
        if (document.body.classList.contains('body-dark')) {
          disableBtn(nextBtn, true, iconNext, 'reviews-dark-grey-btn-next');
        } else {
          disableBtn(nextBtn, true, iconNext, 'reviews-grey-btn-next');
        }
        iziToast.info({
          title: 'Info',
          message: 'Sorry, no more reviews for now.',
          position: 'topRight',
          color: 'green',
        });
      } else {
        if (document.body.classList.contains('body-dark')) {
          disableBtn(nextBtn, false, iconNext, 'reviews-white-btn-next');
        } else {
          disableBtn(nextBtn, false, iconNext, 'reviews-black-btn-next');
        }
      }
    },
  },
});

const disableBtn = (button, isDisabled, icon, iconName) => {
  button.disabled = isDisabled;
  icon.setAttribute('href', `${iconsUrl}#${iconName}`);
  if (isDisabled) {
    button.style.cursor = 'not-allowed';
  } else {
    button.style.cursor = '';
  }
};

if (document.body.classList.contains('body-dark')) {
  disableBtn(prevBtn, true, iconPrev, 'reviews-dark-grey-btn-prev');
} else {
  disableBtn(prevBtn, true, iconPrev, 'reviews-grey-btn-prev');
}

prevBtn.addEventListener('click', () => {
  swiper.slidePrev();
});

nextBtn.addEventListener('click', () => {
  swiper.slideNext();
});

initReviews();
