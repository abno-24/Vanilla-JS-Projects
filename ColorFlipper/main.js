const colors = ["red", "orange", "purple", "blue", "rgb(236, 112, 99)"];

const btn = document.getElementById("btn");
const color = document.querySelector(".colorCode");

btn.addEventListener("click", function(){
    const randomColor = getRandomColor();
    console.log(randomColor);

    document.body.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
});
function getRandomColor(){
    return Math.floor(Math.random() * colors.length);
}