if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js', { scope: './' })
    .then((reg) => {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    })
    .catch((error) => {
      // registration failed
      console.log('Registration failed with ' + error);
    });
}

const weightResult = document.getElementById('weightResult');
const precentResult20 = document.getElementById('precentResult20');
const precentResult30 = document.getElementById('precentResult30');
const precentResult50 = document.getElementById('precentResult50');
const form = document.forms.weight;

function percentResult(percent, result) {
  const formData = new FormData(form);
  const price = formData.get('price');
  price > 0
    ? (result.innerText = `-${percent}% : ${
        price - (price / 100) * percent
      } грн.`)
    : (result.innerText = `-${percent}% :`);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const price = formData.get('price');
  const volume = formData.get('volume');
  price && volume > 0
    ? (weightResult.innerText += ` ${((price / volume) * 1000).toFixed(
        2,
      )} грн.`)
    : (weightResult.innerText = 'Ціна за кілограм/літр:');
});

form.addEventListener('input', () => {
  percentResult(20, precentResult20);
  percentResult(30, precentResult30);
  percentResult(50, precentResult50);
});
