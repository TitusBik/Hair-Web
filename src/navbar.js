function loadNavbar() {
    fetch("/Hair-Web/components/navbar.html")
        .then((response) => response.text())
        .then((data) => {
            if (!document.querySelector("nav")) {
                document.body.insertAdjacentHTML("afterbegin", data);
            }
            setActiveNavLink();
        })
        .catch((error) => console.error("Error loading navbar:", error));
}

function setActiveNavLink() {
    const links = document.querySelectorAll("nav a[data-page]");
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

    if (pathname === "/" || pathname === "/index.html") {
        return "home";
    } else if (pathname.includes("about")) {
        return "about";
    } else if (pathname.includes("services")) {
        return "services";
    } else if (pathname.includes("contact")) {
        return "contact";
    } else if (pathname.includes("promotion")) {
        return "home";
    }

    return "home";
}

document.addEventListener("DOMContentLoaded", loadNavbar);
