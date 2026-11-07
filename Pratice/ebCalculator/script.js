console.log("EB Calculator");
/*
function amount() {
  // var preU = document.getElementById("previousU").value;
  // var currU = document.getElementById("currentU").value;
  var unit = document.getElementById("unit").value;
  var amt;

  // unit = parseInt(currU) - parseInt(preU);
  console.log(unit);

  if (unit <= 200) {
    amt = 0;
  } else if (unit <= 400) {
    amt = (unit - 200) * 4.7;
  } else if (unit <= 500) {
    let temp1, temp2;
    temp1 = unit - 400;
    console.log(temp1, temp2);

    amt = temp1 * 6.3 + 200 * 4.7;
  } else if (unit <= 600) {
    let temp1;
    temp1 = unit - 500;
    console.log(temp1);
    amt = 300 * 4.7 + temp1 * 8.4 + 100 * 6.3;
  } else if (unit <= 800) {
    let temp1;
    temp1 = unit - 600;
    console.log(temp1);
    amt = 300 * 4.7 + 100 * 6.3 + 100 * 8.4 + temp1 * 9.45;
  } else if (unit <= 1000) {
    let temp1;
    temp1 = unit - 800;
    console.log(temp1);
    amt = 300 * 4.7 + 100 * 6.3 + 100 * 8.4 + 200 * 9.45 + temp1 * 10.5;
  } else {
    let temp1;
    temp1 = unit - 1000;
    amt =
      300 * 4.7 +
      100 * 6.3 +
      100 * 8.4 +
      200 * 9.45 +
      200 * 10.5 +
      temp1 * 11.55;
  }

  document.getElementById("units").innerText =
    `Your Consumed Units for Bi monthly is:  ${unit}`;

  document.getElementById("amount").innerText =
    `The Amount you have to pay is:  ${amt}`;
}
*/
function calculateEBBills(units) {
  // Below 500 Units
  if (units <= 200) return 0;
  if (units <= 400) return (units - 200) * 4.7;
  if (units <= 500) return 940 + (units - 400) * 6.3;

  // Above 500 Units
  if (units <= 600) return 2040 + (units - 500) * 8.4;
  if (units <= 800) return 2880 + (units - 600) * 9.45;
  if (units <= 1000) return 4770 + (units - 800) * 10.5;

  return 6870 + (units - 1000) * 11.55;
}

function amount() {
  const unitInput = document.getElementById("unit").value;
  const units = Number(unitInput);

  if (isNaN(units) || units < 0 || unitInput.trim() === "") {
    alert("Please enter a valid number of units.");
    return;
  }

  const totalAmount = calculateEBBills(units);

  const formattedAmt = totalAmount.toFixed(2);

  document.getElementById("units").innerText =
    `Your Consumed Units for Bi-monthly is: ${units}`;
  document.getElementById("amount").innerText =
    `The Amount you have to pay is: ₹${formattedAmt}`;
}
