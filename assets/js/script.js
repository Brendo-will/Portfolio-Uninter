'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

const heroTitle = document.querySelector('.hero-title');
heroTitle.textContent = "Desenvolvedor "; // Inicializa com 'Desenvolvedor '
const textArray = ["RPA.", "Frontend.", "Backend.", "Odoo"];
let arrayIndex = 0;
let letterIndex = 0;

function typeText() {
    let fullText = textArray[arrayIndex]; // Agora, apenas a parte variável é considerada
    if (letterIndex < fullText.length) {
        // Adiciona a próxima letra ao elemento
        heroTitle.textContent += fullText.charAt(letterIndex);
        letterIndex++;
        setTimeout(typeText, 100); // Ajusta a velocidade de digitação
    } else {
        // Espera um pouco após terminar de digitar antes de começar a apagar
        setTimeout(deleteText, 5000); // Espera 5 segundos após terminar de digitar
    }
}

function deleteText() {
    if (letterIndex > 0) {
        // Remove a última letra do elemento, mantendo "Desenvolvedor "
        heroTitle.textContent = "Desenvolvedor " + textArray[arrayIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(deleteText, 50); // Ajusta a velocidade de apagar
    } else {
        // Passa para o próximo texto no array se necessário
        arrayIndex = (arrayIndex + 1) % textArray.length;
        letterIndex = 0; // Reseta o índice de letras para o próximo texto
        setTimeout(typeText, 1000); // Espera um pouco antes de começar a digitar o próximo texto
    }
}

typeText(); // Inicia o processo de digitação


