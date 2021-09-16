import "./styles.css";

let food = document.getElementById("food1");
let slider = document.getElementById("slider");
food.style.filter = `invert(${slider.value})`;

slider.addEventListener("input", function () {
  food.style.filter = `invert(${slider.value})`;
  console.log(slider.value);
});
