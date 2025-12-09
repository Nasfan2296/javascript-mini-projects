const billInput = document.querySelectorAll('.in-wrap')[0];
const peopleInput = document.querySelectorAll('.in-wrap')[1];
const buttons = document.querySelectorAll('.btn');
const customInput = document.querySelector('.custom');
const tipAmount = document.querySelectorAll('.tipValue')[0];
const totalAmount = document.querySelectorAll('.tipValue')[1];
const resetBtn = document.querySelector('.resetBtn');

let tipPercent = 0;

// Select tip percentage
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    tipPercent = parseInt(btn.textContent);
    customInput.value = '';
    calculate();
  });
});

// Custom tip input
customInput.addEventListener('input', () => {
  buttons.forEach(b => b.classList.remove('active'));
  tipPercent = Number(customInput.value);
  calculate();
});

// Inputs update
[billInput, peopleInput].forEach(input => {
  input.addEventListener('input', calculate);
});

function calculate() {
  const bill = Number(billInput.value);
  const people = Number(peopleInput.value);

  if (bill > 0 && people > 0 && tipPercent >= 0) {
    const tipTotal = (bill * tipPercent) / 100;
    const tipPerPerson = tipTotal / people;
    const totalPerPerson = (bill + tipTotal) / people;

    tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
    totalAmount.textContent = `$${totalPerPerson.toFixed(2)}`;
  } else {
    tipAmount.textContent = `$0.00`;
    totalAmount.textContent = `$0.00`;
  }
}

// Reset
resetBtn.addEventListener('click', () => {
  billInput.value = '';
  peopleInput.value = '';
  customInput.value = '';
  tipPercent = 0;
  buttons.forEach(b => b.classList.remove('active'));
  tipAmount.textContent = `$0.00`;
  totalAmount.textContent = `$0.00`;
});
