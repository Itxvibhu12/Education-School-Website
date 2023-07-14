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





// /* ================== Signup popup modal ============ */




const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");

const container = document.querySelector(".container_main_form");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});



function showModal(){
  document.querySelector('.container_main_form').classList.add('show_modal_click')
}
