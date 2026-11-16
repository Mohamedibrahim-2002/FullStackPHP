console.log("Connected");

function calcSalary() {
  const salary = parseInt(document.getElementById("Salary").value);
  console.log(salary);

  document.getElementById("disBasicPay").innerText =
    `You Basic Salary is ₹ ${salary}`;

  // alert("Welcome");

  if (isNaN(salary)) {
    alert("Enter valid amount");
  }
  const da = 63 / 100;
  const hra = 27 / 100;
  const pf = 12 / 100;
  const esi = 0.75 / 100;
  let daVal = salary * da;
  let hraVal = salary * hra;
  let pfVal = salary * pf;
  let esiVal = salary * esi;
  console.log(daVal, hraVal, pfVal, esiVal);

  document.getElementById("allowanceTotal").innerText = `₹ ${daVal + hraVal}`;
  document.getElementById("deductionTotal").innerText = `₹ ${pfVal + esiVal}`;
  document.getElementById("disDA").innerText = `₹ ${parseInt(daVal)}`;
  document.getElementById("disHRA").innerText = `₹ ${parseInt(hraVal)}`;
  document.getElementById("disPF").innerText = `₹ ${parseInt(pfVal)}`;
  document.getElementById("disESI").innerText = `₹ ${parseInt(esiVal)}`;

  const disGrossPay = salary + daVal + hraVal;
  const disNetPay = disGrossPay - (pfVal + esiVal);

  document.getElementById("disGrosspay").innerText = `₹ ${disGrossPay}`;
  document.getElementById("disNetpay").innerText = `₹ ${disNetPay}`;
}
