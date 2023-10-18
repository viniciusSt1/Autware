const header = document.querySelector("header");
const logo = document.querySelector("header .logo img");

window.addEventListener('scroll', onScroll);

function onScroll() {
    activeHeader();
}

function activeHeader() {
    if (scrollY > 50) {
        header.classList.add("active");
        logo.style.width = "18rem";
    } else {
        header.classList.remove("active");
        logo.style.width = "25rem";
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}

onScroll();