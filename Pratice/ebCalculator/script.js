console.log("EB Calculator");

function amount() {
  var preU = document.getElementById("previousU").value;
  var currU = document.getElementById("currentU").value;
  var unit;
  //   var amt;

  unit = parseInt(currU) - parseInt(preU);
  console.log(unit);

  document.getElementById("units").innerText =
    `Your Consumed Units for Bi monthly is ${unit}`;

  document.getElementById("amount").innerText = "The Amount you have to pay is";
}
