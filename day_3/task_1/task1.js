let currentIndex = 1;
showSlide(currentIndex);

function switchSlide(n) {
    currentIndex = n;
    showSlide(currentIndex);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("indicator");

    if (n > slides.length) currentIndex = 1;
    if (n < 1) currentIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[currentIndex - 1].style.display = "block";
    dots[currentIndex - 1].classList.add("active");
}

let navItems = document.getElementsByClassName("nav-item");
let menuIndex = 0;
if (navItems.length > 0) {
    navItems[menuIndex].classList.add("focused");
}

document.addEventListener("keydown", function (e) {
    if (!["ArrowDown", "ArrowUp"].includes(e.key)) return;

    navItems[menuIndex].classList.remove("focused");

    if (e.key === "ArrowDown") {
        menuIndex = (menuIndex + 1) % navItems.length;
    } else if (e.key === "ArrowUp") {
        menuIndex = (menuIndex - 1 + navItems.length) % navItems.length;
    }

    navItems[menuIndex].classList.add("focused");
});
