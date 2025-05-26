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

function touchFn(className) {
  // store the element into an var
  let cards = document.querySelectorAll(className);
  // now we will use foreeach to apply eventlistner touch to each card/ cards can be nodelist if multiple element have same class
  cards.forEach((individualCard) => {
    individualCard.addEventListener("touchstart", () => {
      individualCard.classList.add("toucheffect");
    });
    individualCard.addEventListener("touchend",()=>{
      individualCard.classList.remove("toucheffect")
    })
  });
}

touchFn(".grid-card");touchFn(".project-card");touchFn(".project-card .btn");
// added toucheffect class dynamically to the elements --no need to mention in html 
