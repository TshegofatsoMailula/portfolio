document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("mobile-menu");

    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const header = document.querySelector("header");

    function openMenu() {
        menu.innerHTML = `
            <div class="mobile-menu-header">
                <img src="/assets/logo.png" class="logo" alt="Logo">

                <button id="close-menu" class="close-menu">&times;</button>
            </div>

            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/about.html">About Me</a></li>
                <li><a href="/contact.html">Contact Me</a></li>
            </ul>
        `;

        menu.style.display = "block";
        header.style.display = "none";
        main.style.display = "none";
        footer.style.display = "none";
    }

    function closeMenu() {
        menu.innerHTML = "";
        menu.style.display = "none";
        header.style.display = "";
        main.style.display = "";
        footer.style.display = "";
    }

    hamburger.addEventListener("click", () => {
        if (menu.innerHTML.trim() !== "") {
            closeMenu();
        } else {
            openMenu();
        }
    });

    menu.addEventListener("click", (e) => {
        if (e.target.id === "close-menu") {
            closeMenu();
        }
    });
});