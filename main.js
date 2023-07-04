// change nav Style on Scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// show/hide faq answer
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //change icons
    // answer.nextElementSibling.classList.toggle('active')
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className == "ri-add-fill") {
      icon.className = "ri-subtract-fill";
    } else {
      icon.className = "ri-add-fill";
    }
  });
});

//  show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-button");
const closeBtn = document.querySelector("#close-menu-button");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav)
