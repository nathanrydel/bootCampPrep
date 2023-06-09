// 1
// computeCompoundInterest
// Write a function called "computeCompoundInterest".

// Given a principal, an interest rate, a compounding frequency, and a time (in years), "computeCompoundInterest" returns the amount of compound interest generated.

var output = computeCompoundInterest(1500, 0.043, 4, 6);
console.log(output); // --> 438.8368221341061

// Reference: https://en.wikipedia.org/wiki/Compound_interest#Calculation_of_compound_interest This shows the formula used to calculate the total compound interest generated.

function computeCompoundInterest(
  principal,
  interestRate,
  compoundingFrequency,
  timeInYears,
) {
  // define the compounding interest formula
  let amount =
    principal *
    (1 + interestRate / compoundingFrequency) **
      (compoundingFrequency * timeInYears);

  return amount - principal;
}

function computeCompoundInterest2(
  principal,
  interestRate,
  compoundingFrequency,
  timeInYears,
) {
  // define the compounding interest formula
  let amount =
    principal *
    Math.pow(
      1 + interestRate / compoundingFrequency,
      compoundingFrequency * timeInYears,
    );
  // return amount - principal;
  return amount - principal;
}

var output2 = computeCompoundInterest2(1500, 0.043, 4, 6);
console.log(output2);
