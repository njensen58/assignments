const btn = document.getElementById('isEqual');
const input1 = document.getElementById('first');
const input2 = document.getElementById('second');
const display = document.getElementById('display');

let value = input1.value + input2.value
btn.addEventListener("click", () => display.textContent = Number(input1.value) === Number(input2.value))
