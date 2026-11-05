function result() {
  var submark = parseInt(document.getElementById("sub").value);
  console.log(submark);
  if (isNaN(submark)) {
    alert("Enter a Number");
  } else if (submark < 0 || submark > 100) {
    alert("Enter the Valid number between 0 to 100");
  } else if (submark < 35) {
    document.getElementById("res").value = "Fail";
  } else {
    document.getElementById("res").value = "Pass";
  }
}

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
// }
