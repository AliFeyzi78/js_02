document.getElementById("btn").addEventListener("click", sumNumbers);

function sumNumbers() {
  const num_1 = document.getElementById("inp_1").value;
  const num_2 = document.getElementById("inp_2").value;
  //   if (isNan(num_1) || isNan(num_2)) {
  //     return alert("Not a Number");
  //   }
  const result = parseInt(num_1) + parseInt(num_2);

  document.getElementById("result").innerHTML = result;
  //   alert(num_1 + num_2);
}
