const formEl = document.querySelector('.form');
const btnEl = document.querySelector('button');
const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');

let delay = Number(delayEl.value);
let step = Number(stepEl.value);
let amount = Number(amountEl.value);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay }); // Fulfill
      } else {
        reject({ position, delay }); // Reject
      }
    }, delay);
  });
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, delay + step * i);
  }
}
