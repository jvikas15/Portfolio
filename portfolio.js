// js in this is only used for the dropdown of the #menu-icon (.active which is used)

let menuIcon=document.querySelector("#menu-icon");
let navLinks=document.querySelector(".nav-links")

menuIcon.onclick=()=>{
  navLinks.classList.toggle("active")
}