// Sélectionne le bouton hamburger et le menu de navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Ajoute un écouteur d'événements de clic au bouton hamburger
hamburger.addEventListener("click", mobileMenu);

// Fonction pour activer/désactiver le menu déroulant
function mobileMenu() {
    hamburger.classList.toggle("active"); // Ajoute ou supprime la classe .active du bouton hamburger
    navMenu.classList.toggle("active"); // Ajoute ou supprime la classe .active du menu de navigation
}

// Sélectionne tous les liens de navigation
const navLink = document.querySelectorAll(".nav-link");

// Ajoute un écouteur d'événements de clic à chaque lien de navigation
navLink.forEach(n => n.addEventListener("click", closeMenu));

// Fonction pour fermer le menu déroulant lorsqu'un lien est cliqué
function closeMenu() {
    hamburger.classList.remove("active"); // Supprime la classe .active du bouton hamburger
    navMenu.classList.remove("active"); // Supprime la classe .active du menu de navigation
}