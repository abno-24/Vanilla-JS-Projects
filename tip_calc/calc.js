//! Collecting inputs 
function calculateTip() {
    var billAmt = document.getElementById("billAmt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var pplAmt = document.getElementById("pplAmt").value;

    //! Valid Input
    if(billAmt === "" || serviceQual == 0){
        alert("Please enter valid value");
        return;
    }

    //* Check whether inputs are empty or less than 1
    if(pplAmt === "" || pplAmt <= 1){
        pplAmt = 1;
        document.getElementById("each").style.display = "none";
    }else {
        document.getElementById("each").style.display = "block";
    }

    //? calculate tip logic
    var total = (billAmt * serviceQual) / pplAmt;
    total = Math.round(total * 100) / 100;   //! round to two decimal places
    total = total.toFixed(2);   //! This allows us to have two digits after decimal 
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}
//! set tip to hide on page loading
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//? function calling
document.getElementById("calculate").onclick = function() {
    calculateTip();
};