"use strict";

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click" , function(){
    links.classList.toggle("links-md");
});