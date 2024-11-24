import Typed from 'typed.js';
export function initHomeAnimation() {
  const options = {
    strings: ['Idea', 'Business', 'Brand'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
  };

  new Typed('#typed', options);
}
