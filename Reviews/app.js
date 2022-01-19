const reviews = [
    {
        id: 1,
        name: "Vikas Yadav",
        job: "Java Developer",
        img: 
        "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
        text: 
            "I'm vikas yadav i have 4+ years of coding experience. I'm BscIT graduate from mumbai university and i'm 22 years old. Contact me for freelancing."
    },
    {
        id: 2,
        name: "Vishal Shewale",
        job: "Python Developer",
        img: 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvBfYOFZeVd-vB6uCNlmjna1zcgd0_JYrij9NP1To1ZWpyBxhmpVjAnJ2mdYiJ7J13Gso&usqp=CAU",
        text: 
            "I'm vishal shewale i have 4+ years of coding experience. I'm BscIT graduate from mumbai university and i'm 21 years old. Contact me for freelancing."
    },
    {
        id: 3,
        name: "Aayush Tiwari",
        job: "AI Developer",
        img: 
        "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
        text: 
            "I'm aayush tiwari i have 4+ years of coding experience. I'm BscIT graduate from mumbai university and i'm 24 years old. Contact me for freelancing."
    },
    {
        id: 4,
        name: "Kajal Tiwari",
        job: "JS Developer",
        img: 
        "https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_960_720.png",
        text: 
            "I'm kajal tiwari i have 4+ years of coding experience. I'm B.tech graduate from mumbai university and i'm 20 years old. Contact me for freelancing."
    },
];

const img = document.getElementById("coder");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    showDev();
});

function showDev(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showDev();
});

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showDev();
});

randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showDev();
});