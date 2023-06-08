const inputField = document.querySelector("#inputField");
let expression = "";

function handleButtonPress(value) {
  expression += value;
  inputField.value = expression;
}

function handleEqual() {
  inputField.value = eval(expression);
  expression = "";
}

function handleClear() {
  expression = "";
  inputField.value = expression;
}
