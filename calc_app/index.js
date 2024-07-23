import Calculator from "./utils/calc.js";

const numbers = [...document.getElementsByClassName("number")];
const symbols = [...document.getElementsByClassName("symbol")];
const equalsSqaure = document.getElementById("s-equals");
const clearSqaure = document.getElementById("s-clear");
const clearAllSqaure = document.getElementById("s-clear-all");
const historySquare = document.getElementById("s-history");

const calculationDisplay = document.getElementById("current-calculation");
const resultDisplay = document.getElementById("current-result");
let currentCalculation = "";
let calculator = new Calculator();

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    currentCalculation += number.textContent;
    calculationDisplay.textContent = `Calculation: ${currentCalculation}`;
    resultDisplay.textContent = `Result:`;
  });
});

symbols.forEach((symbol) => {
  symbol.addEventListener("click", () => {
    currentCalculation += ` ${symbol.textContent} `;
    calculationDisplay.textContent = `Calculation: ${currentCalculation}`;
    resultDisplay.textContent = `Result:`;
  });
});

equalsSqaure.addEventListener("click", () => {
  evaluateCalculation();
});

const evaluateCalculation = () => {
  calculator.runCalculation(currentCalculation);
  resultDisplay.textContent = `Result: ${calculator.output}`;
  currentCalculation = "";
};

clearSqaure.addEventListener("click", () => {
  calculatorClear();
});

const calculatorClear = () => {
  calculator.clear();
  resultDisplay.textContent = `Result:`;
  currentCalculation = "";
  calculationDisplay.textContent = `Calculation:`;
};

clearAllSqaure.addEventListener("click", () => {
  calculatorClearAll();
});

const calculatorClearAll = () => {
  calculator.clearAll();
  resultDisplay.textContent = `Result:`;
  currentCalculation = "";
  calculationDisplay.textContent = `Calculation:`;
};
