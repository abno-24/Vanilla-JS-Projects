function BMI(){
var height = document.getElementById('height').value;
var weight = document.getElementById('weight').value;
var bmi = weight/(height/100*height/100);
var bmio = (bmi.toFixed(2));
document.getElementById("result").style.color = "white";
document.getElementById("result").innerHTML = "Your BMI is " + bmio;
}