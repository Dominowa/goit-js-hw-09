function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delayInput = parseInt(document.querySelector('[name="delay"]').value);
  const stepInput = parseInt(document.querySelector('[name="step"]').value);
  const amountInput = parseInt(document.querySelector('[name="amount"]').value);

  let currentDelay = delayInput;

  for (let i = 1; i <= amountInput; i++) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    currentDelay += stepInput;
  }
});
