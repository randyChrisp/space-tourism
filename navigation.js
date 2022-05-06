const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

//When the hamburger buttom is clicked
navToggle.addEventListener("click", () => {

    const visibility = nav.getAttribute("data-visible");
    //If nav is closed, open it
    if(visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true)
    }
    //If nav is opened, close it
    else { 
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false)
    }
})
