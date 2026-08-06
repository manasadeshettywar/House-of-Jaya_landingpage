// ===============================
// House of Jaya JavaScript
// ===============================

// Mobile Navigation

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Sticky Navbar Shadow

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});

// Scroll Reveal Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Product Card Animation

const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// CTA Button Ripple Effect

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {

    btn.addEventListener("click", function(e){

        let circle = document.createElement("span");

        circle.classList.add("ripple");

        const x = e.clientX - e.target.offsetLeft;

        const y = e.clientY - e.target.offsetTop;

        circle.style.left = `${x}px`;

        circle.style.top = `${y}px`;

        this.appendChild(circle);

        setTimeout(()=>{
            circle.remove();
        },600);

    });

});

// Back To Top Button

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.classList.add("top-btn");

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topButton.classList.add("show-top");

    }else{

        topButton.classList.remove("show-top");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// Active Navigation

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === `#${current}`){

            link.classList.add("active");

        }

    });

});

// Lazy Loading Images

const images = document.querySelectorAll("img");

images.forEach(img=>{

    img.setAttribute("loading","lazy");

});

console.log("House of Jaya Loaded Successfully ❤️");