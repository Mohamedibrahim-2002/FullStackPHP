console.log("Lined");
/* function result() {
//   var submark = parseInt(document.getElementById("sub").value);
//   console.log(submark);
//   if (isNaN(submark)) {
//     alert("Enter a Number");
//   } else if (submark < 0 || submark > 100) {
//     alert("Enter the Valid number between 0 to 100");
//   } else if (submark < 35) {
//     showRes.innerText = `You Obtained ${submark} marks, unfortuantely you Failed!`;
//   } else {
//     showRes.innerText = `You Obtained ${submark} marks, Congrats you Passed!`;
//   }
// }

// function result() {
//   //   if (submark.trim() === "") {
//   //     console.log("Input is Empty");

//   //     alert("Enter your Mark");
//   //   } else {
//   //     console.log(submark);
//   //   }

//   if (submark >= 35) {
//     var result = parseInt(document.getElementById("res"));
//     result.value = "Pass";
//   } else {
//     var result = parseInt(document.getElementById("res").value);
//     result = "Fail";
//   }

//   console.log(result);
 } */

function calculateTotalMark() {
  const tamil = parseInt(document.getElementById("tamil").value);
  const english = parseInt(document.getElementById("english").value);
  const maths = parseInt(document.getElementById("maths").value);
  const science = parseInt(document.getElementById("science").value);
  const social = parseInt(document.getElementById("social").value);

  let showRes = document.getElementById("showResult");
  if (
    isNaN(tamil) ||
    isNaN(english) ||
    isNaN(maths) ||
    isNaN(science) ||
    isNaN(social)
  ) {
    alert("Enter a Number");
  } else if (
    tamil < 0 ||
    tamil > 100 ||
    english < 0 ||
    english > 100 ||
    maths < 0 ||
    maths > 100 ||
    science < 0 ||
    science > 100 ||
    social < 0 ||
    social > 100
  ) {
    alert("Enter the Valid number between 0 to 100");
  } else {
    const totalMark = tamil + english + maths + science + social;
    const average = totalMark / 5;
    showRes.innerHTML = `Your Total Mark obtained is ${totalMark} and Your percentage is ${average}%`;
  }
}

// function calculateTotalMark() {
//   alert("Working");
// }
