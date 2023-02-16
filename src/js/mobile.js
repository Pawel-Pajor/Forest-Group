const nav = document.querySelector(".nav__mobile");
const burgerBtn = document.querySelector(".hamburger");
const allNavItems = document.querySelectorAll(".nav__mobile-item");
const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
    nav.classList.toggle("nav__mobile--active");
    document.body.classList.toggle("sticky-body");

    allNavItems.forEach((item) => {
        item.addEventListener("click", () => {
            nav.classList.remove("nav__mobile--active");
        });
    });
};

const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year;
};

burgerBtn.addEventListener("click", handleNav);
handleCurrentYear();
