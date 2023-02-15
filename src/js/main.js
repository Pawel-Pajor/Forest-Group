const nav = document.querySelector(".nav__mobile");
const burgerBtn = document.querySelector(".hamburger");
const allNavItems = document.querySelectorAll(".nav__mobile-item");
const menuItems = document.querySelectorAll(".nav__item");
const scrollSpySections = document.querySelectorAll("section");
const cookieBox = document.querySelector(".cookie-box");
const cookieBtn = document.querySelector(".cookie-btn");
const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
    nav.classList.toggle("nav__mobile--active");

    allNavItems.forEach((item) => {
        item.addEventListener("click", () => {
            nav.classList.remove("nav__mobile--active");
        });
    });
};

const handleScrollSpy = () => {
    if (document.body.classList.contains("main-page")) {
        const sections = [];

        scrollSpySections.forEach((section) => {
            if (
                window.scrollY <=
                section.offsetTop + section.offsetHeight - 83
            ) {
                sections.push(section);

                const activeSection = document.querySelector(
                    `[href*="${sections[0].id}"]`
                );

                menuItems.forEach((item) => item.classList.remove("active"));

                activeSection.classList.add("active");
            }
        });
    }
};

const showCookie = () => {
    const cookieEaten = localStorage.getItem("cookie");

    if (cookieEaten) {
        cookieBox.classList.add("hide");
    }
};

const handleCookieBox = () => {
    localStorage.setItem("cookie", "true");
    cookieBox.classList.add("hide");
};

const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year;
};

burgerBtn.addEventListener("click", handleNav);
cookieBtn.addEventListener("click", handleCookieBox);
window.addEventListener("scroll", handleScrollSpy);
handleCurrentYear();
showCookie();
