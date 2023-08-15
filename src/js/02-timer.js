import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate <= new Date()) {
      alert('Please choose a date in the future.');
      document.querySelector('[data-start]').disabled = true;
    } else {
      document.querySelector('[data-start]').disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

let intervalId;

document.querySelector('[data-start]').addEventListener('click', function () {
  const endDate = flatpickr.parseDate(
    document.querySelector('#datetime-picker').value
  );
  const now = new Date();
  let timeRemaining = endDate - now;

  clearInterval(intervalId);

  intervalId = setInterval(function () {
    const { days, hours, minutes, seconds } = convertMs(timeRemaining);

    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent =
      addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent =
      addLeadingZero(seconds);

    timeRemaining -= 1000;

    if (timeRemaining < 0) {
      clearInterval(intervalId);
      document.querySelector('[data-days]').textContent = '00';
      document.querySelector('[data-hours]').textContent = '00';
      document.querySelector('[data-minutes]').textContent = '00';
      document.querySelector('[data-seconds]').textContent = '00';
    }
  }, 1000);
});

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
