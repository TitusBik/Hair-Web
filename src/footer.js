function loadFooter() {
    fetch("/src/components/footer.html")
        .then((response) => response.text())
        .then((data) => {
            if (!document.querySelector("footer")) {
                document.body.insertAdjacentHTML("beforeend", data);
            }
        })
        .catch((error) => console.error("Error loading footer:", error));
}

document.addEventListener("DOMContentLoaded", loadFooter);
