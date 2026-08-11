// 1. PRIME NUMBER

let primeText = document.getElementById("primeText");
const btnPrime = document.getElementById("btnPrime");

btnPrime.onclick = function () {

  let num = Number(document.getElementById("prime").value);

  if (isNaN(num) || num < 1 || num > 70) {

    primeText.textContent = "Enter a valid number from 1 to 70";

  } else if (num == 1) {

    primeText.textContent = "1 is not a prime number";

  } else {

    let prime = true;

    for (let i = 2; i < num; i++) {

      if (num % i == 0) {
        prime = false;
        break;
      }
    }

    if (prime) {
      primeText.textContent = `${num} is a prime number`;
    } else {
      primeText.textContent = `${num} is not a prime number`;
    }
  }
};


// 2. JAMB SCORE

let jambText = document.getElementById("jambText");
const btnJamb = document.getElementById("btnJamb");

btnJamb.onclick = function () {
    let inputs = document.querySelectorAll("input");
    let aggregate = 0;

    for (let i = 0; i < inputs.length; i++) {
        let score = Number(inputs[i].value);

        if (score < 0 || score > 100) {
            jambText.textContent = "Each score must be between 0 and 100";
            return;
        }

        aggregate += score;
    }

    let average = aggregate / inputs.length;
    let grade;

    if (average >= 70) {
        grade = "A";
    } else if (average >= 60) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else if (average >= 45) {
        grade = "D";
    } else if (average >= 40) {
        grade = "E";
    } else {
        grade = "F";
    }

    jambText.textContent =
        `Aggregate: ${aggregate}/400 | Grade: ${grade}`;
};
// 3. RETIREMENT AGE

let ageText = document.getElementById("ageText");
const btnAge = document.getElementById("btnAge");

btnAge.onclick = function () {

  let birthYear = Number(
    document.getElementById("birthYear").value
  );

  let currentYear = new Date().getFullYear();

  if (
    isNaN(birthYear) ||
    birthYear <= 0 ||
    birthYear > currentYear
  ) {

    ageText.textContent = "Enter a valid birth year";

  } else {

    let age = currentYear - birthYear;

    if (age < 60) {

      ageText.textContent =
        `You are ${age} years old and you have ${60 - age} years to retire`;

    } else if (age == 60) {

      ageText.textContent =
        `You are ${age} years old and you can retire now`;

    } else {

      ageText.textContent =
        `You are ${age} years old and you retired ${age - 60} years ago`;
    }
  }
};


// 4. SIMPLE CALCULATOR

function calculate(operation) {

  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  let operator = document.getElementById("operator");
  let answer = document.getElementById("answer");
  let calText = document.getElementById("calText");

  if (
    document.getElementById("num1").value == "" ||
    document.getElementById("num2").value == ""
  ) {

    calText.textContent = "Enter both numbers";

    return;
  }

  operator.textContent = operation;

  let result;

  if (operation == "+") {

    result = num1 + num2;

  } else if (operation == "-") {

    result = num1 - num2;

  } else if (operation == "*") {

    result = num1 * num2;

  } else if (operation == "/") {

    if (num2 == 0) {

      calText.textContent = "Cannot divide by zero";

      return;
    }

    result = num1 / num2;
  }

  answer.textContent = `= ${result}`;

  calText.textContent = `Answer = ${result}`;
}


// 5. LOAN CALCULATOR

let loanText = document.getElementById("loanText");
const loanBtn = document.getElementById("loanBtn");

loanBtn.onclick = function () {

  let amount =
    Number(document.getElementById("loanAmount").value);

  let month =
    Number(document.getElementById("loanMonth").value);

  if (isNaN(amount) || amount <= 0) {

    loanText.textContent = "Enter a valid loan amount";

  } else if (month == 0) {

    loanText.textContent =
      "Select repayment period";

  } else {

    let interest = amount * 0.26 * month;

    let totalRepayment = amount + interest;

    let monthlyRepayment =
      totalRepayment / month;

    loanText.innerHTML = `
      Loan Amount: ₦${amount.toFixed(2)}<br><br>
      Monthly Repayment: ₦${monthlyRepayment.toFixed(2)}<br><br>
      Total Repayment: ₦${totalRepayment.toFixed(2)}
    `;
  }
};


// 6. INVESTMENT CALCULATOR

let investText =
  document.getElementById("investText");

const investBtn =
  document.getElementById("investBtn");

investBtn.onclick = function () {

  let amount =
    Number(document.getElementById("investAmount").value);

  let month =
    Number(document.getElementById("investMonth").value);

  if (isNaN(amount) || amount <= 0) {

    investText.textContent =
      "Enter a valid investment amount";

  } else if (month == 0) {

    investText.textContent =
      "Select investment period";

  } else {

    let interest = amount * 0.10 * month;

    let totalInvestment =
      amount + interest;

    let monthlyProfit =
      interest / month;

    investText.innerHTML = `
      Investment Amount: ₦${amount.toFixed(2)}<br><br>
      Profit Per Month: ₦${monthlyProfit.toFixed(2)}<br><br>
      Total Value: ₦${totalInvestment.toFixed(2)}
    `;
  }
};