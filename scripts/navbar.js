function navbar() {
    const navLinks = document.querySelectorAll(".nav-link");
    const whiteColor = "rgba(255, 255, 255, 1)";
    const halfWhiteColor = "rgba(255, 255, 255, .5)";

    determineActiveNavLink();
    navLinks.forEach(link => {
        link.style.color = link.classList.contains("active") ? whiteColor : halfWhiteColor;

        link.addEventListener("click", () => {
            navLinks.forEach(e => {
                e.classList.remove("active")
                e.style.color = halfWhiteColor;
            });
            link.classList.add("active");
            link.style.color = whiteColor;
        });
    });

}

function determineActiveNavLink() {

}

export default navbar;