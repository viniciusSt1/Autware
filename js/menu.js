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

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu a');

function highlightMenu() {
    sections.forEach(function(section, index) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 350 && window.scrollY < sectionTop + sectionHeight - 300) {
            navLinks[index].classList.add('active');
        } else {
            navLinks[index].classList.remove('active');
        }
    });
}


window.addEventListener('scroll', highlightMenu);

onScroll();
highlightMenu();