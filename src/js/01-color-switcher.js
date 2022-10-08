import '../css/common.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;

btnStart.addEventListener('click', onClickbtnStart);
btnStop.addEventListener('click', onClickbtnStop);

function onClickbtnStart(event) {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    btnStart.setAttribute('disabled', 'disabled');
    btnStop.removeAttribute('disabled');
  }, 1000);
}

function onClickbtnStop(event) {
  clearInterval(timerId);
  btnStart.removeAttribute('disabled');
  btnStop.setAttribute('disabled', 'disabled');
}
