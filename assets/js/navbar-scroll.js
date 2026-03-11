let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {

    const currentScrollPos = window.pageYOffset;
    const navbar = document.querySelector(".scrollable");

    if (!navbar) return;

    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-80px";
    }

    prevScrollPos = currentScrollPos;

});