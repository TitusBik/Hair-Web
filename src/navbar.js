function loadNavbar() {
    fetch("/Hair-Web/components/navbar.html")
        .then((response) => response.text())
        .then((data) => {
            if (!document.querySelector("nav")) {
                document.body.insertAdjacentHTML("afterbegin", data);
            }
            setActiveNavLink();
            initHamburger();
        })
        .catch((error) => console.error("Error loading navbar:", error));
}

function initHamburger() {
    const toggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("mobile-menu");
    if (!toggle || !menu) return;

    const bars = toggle.querySelectorAll(".nav-bar");

    toggle.addEventListener("click", () => {
        const isOpen = menu.style.display === "block";
        menu.style.display = isOpen ? "none" : "block";

        if (!isOpen) {
            bars[0].style.transform = "translateY(8px) rotate(45deg)";
            bars[1].style.opacity = "0";
            bars[2].style.transform = "translateY(-8px) rotate(-45deg)";
        } else {
            bars[0].style.transform = "";
            bars[1].style.opacity = "";
            bars[2].style.transform = "";
        }
    });
}

function setActiveNavLink() {
    // Only apply the active-link highlight to the DESKTOP nav.
    // Mobile menu links are left unstyled (no active state).
    const links = document.querySelectorAll(
        "nav ul:not(#mobile-menu ul) a[data-page]",
    );
    const currentPage = getCurrentPageName();
    links.forEach((link) => {
        link.classList.remove("active");
        if (link.dataset.page === currentPage) {
            link.classList.add("active");
        }
    });
}

function getCurrentPageName() {
    const pathname = window.location.pathname;
    if (pathname === "/Hair-Web/" || pathname === "/Hair-Web/index.html")
        return "home";
    if (pathname.includes("about")) return "about";
    if (pathname.includes("services")) return "services";
    if (pathname.includes("contact")) return "contact";
    if (pathname.includes("promotion")) return "home";
    return "home";
}

document.addEventListener("DOMContentLoaded", loadNavbar);
