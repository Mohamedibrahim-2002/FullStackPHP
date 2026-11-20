console.log("connected");
function check() {
  alert("hello");
  return;
}
function calcResult() {
  const tamil = parseInt(document.getElementById("tamil").value);
  const english = parseInt(document.getElementById("english").value);
  const maths = parseInt(document.getElementById("maths").value);
  const science = parseInt(document.getElementById("science").value);
  const social = parseInt(document.getElementById("social").value);
  console.log(tamil);
  console.log(typeof tamil);

  const total = document.getElementById("total");
  const percent = document.getElementById("percentage");
  const result = document.getElementById("result");

  if (
    isNaN(tamil) ||
    isNaN(english) ||
    isNaN(maths) ||
    isNaN(science) ||
    isNaN(social)
  ) {
    alert("enter a Valid mark");
  }
  let calcTotal = tamil + english + maths + science + social;
  let calcPercent = calcTotal / 5;

  total.innerText = `${calcTotal}`;
  percent.innerText = `${calcPercent}%`;

  if (
    tamil >= 35 &&
    english >= 35 &&
    maths >= 35 &&
    science >= 35 &&
    social >= 35
  ) {
    result.innerText = "Pass";
    return;
  } else {
    result.innerText = "Fail";
    return;
  }
}
