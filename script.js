let inputValue = document.querySelectorAll(".input-value");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let erase = document.getElementById("erase");
let clear = document.getElementById("clear");
let equal_pressed = 0;
equal.addEventListener("click", () => {
  equal_pressed = 1;
  console.log(equal_pressed);
  try {
    let result = eval(input.value);
    console.log(result);
    if (Number.isInteger(result)) {
      input.value = result;
    } else {
      input.value = result.toFixed(2);
    }
  } catch (error) {
    alert("invalid input");
    input.value = "";
  }
});
window.onload = () => {
  input.value = "";
};
inputValue.forEach((element) => {
  element.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }

    input.value += element.value;
  });
});

erase.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});
clear.addEventListener("click", () => {
  input.value = "";
});
