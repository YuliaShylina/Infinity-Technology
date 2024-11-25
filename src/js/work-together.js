import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function manageModal() {
  const workTogetherForm = document.querySelector('.work-together-form');
  const workTogetherModal = document.querySelector('.work-together-backdrop');
  const workTogetherModalButton = document.querySelector(
    '.work-together-modal-btn-closing'
  );
  const workTogetherInputEmail = document.querySelector(
    '.work-together-input-email'
  );
  const workTogetherErrorMessage = document.querySelector(
    '.work-together-error-message'
  );
  const workTogetherEmailCkeckIcon = document.querySelector(
    '.work-together-adress-icon-form'
  );
  const workTogetherInputMessage = document.querySelector(
    '.work-together-input-message'
  );

  const workTogetherModalTitle = document.querySelector(
    '.work-together-modal-main'
  );
  const workTogetherModalText = document.querySelector(
    '.work-together-modal-second'
  );
  const postToAdd = {};
  const api = 'https://portfolio-js.b.goit.study/api/';

  workTogetherForm.addEventListener('submit', event => {
    event.preventDefault();

    if (
      workTogetherInputEmail.value.trim() !== '' &&
      workTogetherInputEmail.value.trim() !== ' '
    ) {
      workTogetherErrorMessage.classList.remove('active');
      if (
        /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(
          workTogetherInputEmail.value.trim()
        ) === true
      ) {
        workTogetherEmailCkeckIcon.classList.remove('hidden');
        workTogetherInputEmail.style.color = 'black';
        postToAdd.email = workTogetherInputEmail.value;
        postToAdd.comment = workTogetherInputMessage.value;

        const options = {
          method: 'POST',
          body: JSON.stringify(postToAdd),
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        };

        fetch(`${api}requests`, options)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          })
          .then(post => {
            workTogetherModalTitle.textContent = post.title;
            workTogetherModalText.textContent = post.message;
            workTogetherModal.classList.add('active');
            workTogetherEmailCkeckIcon.classList.remove('hidden');
          })
          .catch(error => {
            iziToast.info({
              title: 'Info',
              message:
                'Sorry, something went wromg, please check your request once more, fill all the fields',
            });
            console.log(error);
          });
      } else {
        workTogetherErrorMessage.innerHTML =
          'Please input correct Email adress';
        workTogetherInputEmail.style.color = 'red';
        workTogetherErrorMessage.classList.add('active');
      }
    } else {
      workTogetherErrorMessage.innerHTML = 'Field Email cannot be blank';
      workTogetherErrorMessage.classList.add('active');
    }
  });

  workTogetherModalButton.addEventListener('click', () => {
    workTogetherModal.classList.remove('active');
    workTogetherInputEmail.value = '';
    workTogetherEmailCkeckIcon.classList.add('hidden');
    workTogetherInputMessage.value = '';
  });

  workTogetherModal.addEventListener('click', event => {
    if (
      event.target.classList.value !== 'work-together-modal-btn-closing' &&
      event.target.classList.value !== 'work-together-modal'
    ) {
      workTogetherModal.classList.remove('active');
      workTogetherInputEmail.value = '';
      workTogetherEmailCkeckIcon.classList.add('hidden');
      workTogetherInputMessage.value = '';
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      workTogetherModal.classList.remove('active');
      workTogetherInputEmail.value = '';
      workTogetherEmailCkeckIcon.classList.add('hidden');
      workTogetherInputMessage.value = '';
    }
  });
}
