const btn = document.querySelector("#btn");
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");
const number4 = document.querySelector(".number4");
const number5 = document.querySelector(".number5");

valueSelected = false;
value = 0;

ratingcard = document.querySelector(".ratings");
thankyou = document.querySelector(".thankyou");
ratingDisplay = document.querySelector("#rating-id");

btn.addEventListener("click", () => {
  if (valueSelected) return submitfunction();
  alert("please select a value");
  console.log(value, valueSelected);
});

number1.addEventListener("click", () => {
  console.log("1");
  submit(true, 1);
});
number2.addEventListener("click", () => {
  console.log("2");
  submit(true, 2);
});
number3.addEventListener("click", () => {
  console.log("3");
  submit(true, 3);
});
number4.addEventListener("click", () => {
  console.log("4");
  submit(true, 4);
});
number5.addEventListener("click", () => {
  console.log("5");
  submit(true, 5);
});

function submit(is, val) {
  valueSelected = is;
  value = val;
  console.log(val, valueSelected);
  return (value = val);
}

function submitfunction() {
  ratingcard.style.display = "none";
  ratingDisplay.innerHTML = `You selected  ${value} out of 5`;
  thankyou.style.display = "grid";
  return value;
}
