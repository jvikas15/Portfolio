// js in this is only used for the dropdown of the #menu-icon (.active which is used)

let menuIcon = document.querySelector("#menu-icon");
let navLinks = document.querySelector(".nav-links");

//toggle is predefined--> if element have that class it removes and if element doesnt have it adds the class to the element
// menuIcon.addEventListener("click",function(){
// navLinks.classList.toggle("active")
// })
menuIcon.addEventListener("click", () => {
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  } else {
    navLinks.classList.add("active");
  }
});

// adding touchstarty and touchend --hover action for touchscreen
//fn stores the nodelist then applies toucheffect on each element
function touchFn(className) {
  
  let cards = document.querySelectorAll(className);

  cards.forEach((individualCard) => {
    individualCard.addEventListener("touchstart", () => {
      individualCard.classList.add("toucheffect");
    });
    individualCard.addEventListener("touchend",()=>{setTimeout(() => {
      individualCard.classList.remove("toucheffect")
    }, 0);})
  });
}

touchFn(".grid-card");touchFn(".project-card");touchFn(".project-card .btn");touchFn(".input i")
// added toucheffect class dynamically to the elements --no need to mention in html 
// Collapse menu when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuIcon.classList.remove('fa-times');  // if you’re toggling icon
    menuIcon.classList.add('fa-bars');      // if you’re toggling icon
  });
});
