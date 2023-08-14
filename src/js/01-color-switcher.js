function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

let intervalId;

function startColorChange() {
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  startButton.disabled = true;
  stopButton.disabled = false;

  intervalId = setInterval(function () {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorChange() {
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  startButton.disabled = false;
  stopButton.disabled = true;

  clearInterval(intervalId);
  document.body.style.backgroundColor = '';
}

document
  .querySelector('[data-start]')
  .addEventListener('click', startColorChange);
document
  .querySelector('[data-stop]')
  .addEventListener('click', stopColorChange);
