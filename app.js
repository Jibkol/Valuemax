// for (initializer; condition ; diffrence){
// code to run
// }

//intializer
//  while loop (condition ){
// code to run;
//  difference;
// }

// initializer
// do{
// code to run ;
// difference
// }while(condition) loop
//

const p1 = document.getElementById("p1");
let weekdays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
let today = new Date().getDay();
if (today == 0) {
  console.log(`today is ${weekdays[today]}, go to church`);
} else if (today < 5 && today > 0) {
  console.log(`today is ${weekdays[today]}, get up and go to work`);
} else if (today == 5) {
  console.log(`today is ${weekdays[today]}, go to mosque`);
} else if (today == 6) {
  console.log(`today is ${weekdays[today]}, a weekend`);
} else {
  console.log(`today is not valid `);
}

// ];
// let today = document.getElementById("day").value;
// let dayLength = weekdays.length;
// btn.onclick = function{
// for (let i = 1; i <= dayLength; i++) {
//     if(dayLength === 0){
//         p1.textContent =
//     }
// }
// }
//assignment 1 - prime numbers

let primeText = document.getElementById("primeText");
const btnPrime = document.getElementById("btnPrime");

btnPrime.onclick = function () {
  let num = Number(document.getElementById("prime").value);

  if (isNaN(num) || num < 2 || num > 70) {
    primeText.textContent = "Enter a valid number, 1 to 70";
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        primeText.textContent = `${num} is not a prime number`;
        return;
      }
    }
    primeText.textContent = `${num} is a prime number`;
  }
};

// Jamb score

let jambText = document.getElementById("jambText");
const btnJamb = document.getElementById("btnJamb");

btnJamb.onclick = function () {
  let score = Number(document.getElementById("jamb").value);

  if (isNaN(score) || score < 0 || score > 400) {
    jambText.textContent = "Enter a valid score";
  } else if (score >= 320) {
    jambText.textContent = "Excellent";
  } else if (score >= 280) {
    jambText.textContent = "Very Good";
  } else if (score >= 250) {
    jambText.textContent = "Good";
  } else if (score >= 200) {
    jambText.textContent = "Fair";
  } else if (score >= 180) {
    jambText.textContent = "Average";
  } else {
    jambText.textContent = "Not Qualified";
  }
};

// Retirement age
let ageText = document.getElementById("ageText");
const btnAge = document.getElementById("btnAge");
btnAge.onclick = function () {
  let age = Number(document.getElementById("age").value);
  if (isNaN(age) || age < 0 || age > 100) {
    ageText.textContent = "Enter a valid age";
  } else if (age < 60) {
    ageText.textContent = `You have ${60 - age} years to retire`;
  } else if (age == 60) {
    ageText.textContent = "You can retire now";
  } else {
    ageText.textContent = `You retired ${age - 60} years ago`;
  }
};

// SIMPLE CALCULATOR
let calText = document.getElementById("calText");
const btnCal = document.getElementById("btnCal");

btnCal.onclick = function () {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let op = document.getElementById("operator").value;
  if (op == "+") {
    calText.textContent = `Answer = ${num1 + num2}`;
  } else if (op == "-") {
    calText.textContent = `Answer = ${num1 - num2}`;
  } else if (op == "*") {
    calText.textContent = `Answer = ${num1 * num2}`;
  } else if (op == "/") {
    if (num2 == 0) {
      calText.textContent = "Cannot divide by zero";
    } else {
      calText.textContent = `Answer = ${num1 / num2}`;
    }
  } else {
    calText.textContent = "Invalid operator";
  }
};
// Loan calculator

let loanText = document.getElementById("loanText");
const loanBtn = document.getElementById("loanBtn");

loanBtn.onclick = function () {
  let amount = Number(document.getElementById("loanAmount").value);

  let month = Number(document.getElementById("loanMonth").value);

  if (isNaN(amount) || amount <= 0) {
    loanText.textContent = "Enter a valid amount";
  } else {
    let interest = amount * 0.26 * month;

    let totalRepayment = amount + interest;

    let monthlyRepayment = totalRepayment / month;

    loanText.innerHTML = `
Loan Amount : ₦${amount}<br><br>
Monthly Repayment : ₦${monthlyRepayment.toFixed(2)}<br><br>
Total Repayment : ₦${totalRepayment.toFixed(2)}
`;
  }
};
// Investment calculator

let investText = document.getElementById("investText");
const investBtn = document.getElementById("investBtn");

investBtn.onclick = function () {
  let amount = Number(document.getElementById("investAmount").value);

  let month = Number(document.getElementById("investMonth").value);

  if (isNaN(amount) || amount <= 0) {
    investText.textContent = "Enter a valid amount";
  } else {
    let interest = amount * 0.1 * month;

    let totalInvestment = amount + interest;

    let monthlyProfit = interest / month;

    investText.innerHTML = `
Investment Amount : ₦${amount}<br><br>
Profit Per Month : ₦${monthlyProfit.toFixed(2)}<br><br>
Total Value : ₦${totalInvestment.toFixed(2)}
`;
  }
};

//
// let i =0 ;
// for( i = 0 ; i <9 ; i++){
//   console.log(i)
// }
// console.log(i)

for (exe = 1; exe < 5; exe++) {
  console.log(`......Starting exercise ${exe}`);
  for (let rep = 1; rep < 5; rep++) {
    console.log(`Exercise ${exe}: Lifting weight ${rep}`);
  }
}

//  while loop
let i = 3;
while (i > 0) {
  console.log(`start in ${i}`);
  i--;
}
let a = 3;
while (a) console.log(a--);

let b = 3;
while (b) console.log(b--);

let p2 = document.getElementById("p2");
const rollbtn = document.getElementById("roll");
let random = Math.floor(Math.random() * 6 + 1);
rollbtn.onclick = function () {
  while (random < 6) {
    p2.textContent = `you rolled ${random} try again`;
    random = Math.floor(Math.random() * 6 + 1);
    if (random == 6) {
      p2.textContent = `Congrats! you rolled ${random}`;
      break;
    }
  }
};
