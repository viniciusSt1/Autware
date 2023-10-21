const header = document.querySelector("header");

window.addEventListener('scroll', onScroll);

function onScroll() {
    activeHeader();
}

function activeHeader() {
    if (scrollY > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}

onScroll();