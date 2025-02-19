
function addValue(value) {

  var display = document.getElementById('display');

  if (display.value === "0") {
    display.value = value; 
  } else {
    display.value += value; 
  }
}

function clrDisplay() {
  var display = document.getElementById('display');
  display.value = "0"; 
}

function calculate() {
  var display = document.getElementById('display');
  try {
   
    var result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

