console.log("EB Calculator");

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
