let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const btnClass = e.currentTarget.classList;
        if(btnClass.contains("decrease")){
            count--;
        }else if(btnClass.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }else if(count < 0){
            value.style.color = "red";
        }else{
            value.style.color = "black";
        }
        value.textContent = count;
    })
});