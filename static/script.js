document.getElementById('phone').addEventListener('click', function() {
    const phoneNumber = this.textContent.trim();

    navigator.clipboard.writeText(phoneNumber).then(() => {
        showPopup();
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
    });
});

document.getElementById('address').addEventListener('click', function() {
    const address = this.textContent.trim();

    const searchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(searchUrl, '_blank');
});

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.opacity = '1';

    setTimeout(() => {
        popup.style.opacity = '0';
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.hidden');

    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 100); 
    });
});

const body = document.querySelector('.body');
const logo = document.querySelectorAll('.logo-toggle');
const themeSwitcher = document.getElementById('theme-switcher');
const toggle = document.querySelectorAll('.toggle');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

themeSwitcher.addEventListener('click', function () {
    if(body.style.backgroundColor === "var(--dark)") {
        body.style.backgroundColor = "var(--light)";
        logo.forEach((logo) => {
            logo.style.fill = ('var(--dark)');
        });
        toggle.forEach((toggle) => {
            toggle.style.color = ('var(--accent-color');
        });
        sun.classList.add('visible');
        moon.classList.remove('visible');
    } else {
        body.style.backgroundColor = "var(--dark)";
        logo.forEach((logo) => {
            logo.style.fill = ('var(--light)');
        });
        toggle.forEach((toggle) => {
            toggle.style.color = ('var(--light)');
        });
        moon.classList.add('visible');
        sun.classList.remove('visible');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});