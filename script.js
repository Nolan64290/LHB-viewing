// All
//====

// Fonction qui gère l'affichage des différentes pages
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active'));

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');

    // Vérifier si on est sur mobile et forcer la fermeture du menu
    if ((screen.width <= 767) || (window.innerWidth <= 767)) {
        setTimeout(() => {
            if (state === 0) { // S'assurer que le menu est ouvert avant de tenter de le fermer
                toggleMenu();
            }
        }, 100); // Petite pause pour éviter un conflit d'événements
    } else {
        window.scrollTo({ top: activeSection.offsetTop, behavior: 'smooth' });
    }
}


// Fonction qui permet de désactiver le bouton 'le club' en mode pc
document.addEventListener("DOMContentLoaded", function () {
    let clubButton = document.getElementById("club-a-bt");

    function updateClubButton() {
        if (window.innerWidth > 767) { // Si écran PC
            clubButton.removeAttribute("onclick"); // Supprime l'événement de clic
        } else { // Si mobile
            clubButton.setAttribute("onclick", "toggleSousMenu()");
        }
    }

    // Exécuter au chargement
    updateClubButton();

    // Mettre à jour quand on redimensionne la fenêtre
    window.addEventListener("resize", updateClubButton);
});

// Fonction toggleMenu :
// Fonction qui gère le menu en mode responsive
let state = 1;
let stateS = 1;
let sous_nav = document.getElementById("sous-nav");
let hitsoire = document.getElementById("histoire-bt");
let bureau = document.getElementById("bureau-bt");
let equipes = document.getElementById("equipes-bt");
let objectifs = document.getElementById("objectifs-bt");
let licence = document.getElementById("licence-bt");
let partenaires = document.getElementById("partenaires-bt");
let club = document.getElementById("club-bt");
let club_a = document.getElementById("club-a-bt");
let actus = document.getElementById("actus-bt");
let calendrier = document.getElementById("calendrier-bt");
let galerie = document.getElementById("galerie-bt");
let boutique = document.getElementById("boutique-bt");
let contact = document.getElementById("contact-bt");

function toggleMenu() {
    let menu = document.querySelector(".menu ul");
    let sousMenu = document.getElementById("sous-nav");
    let club = document.getElementById("club-bt");
    let onglets = document.querySelectorAll(".onglet:not(#club-bt)"); // Tous les onglets sauf "Le Club"

    if (state == 1) {
        menu.classList.add("menu-ouvert");
        state = 0;
    } else {
        menu.classList.remove("menu-ouvert");

        // Fermer le sous-menu en même temps
        sousMenu.classList.remove("sous-menu-ouvert");
        club.classList.remove("sous-menu-ouvert");
        onglets.forEach(onglet => onglet.style.display = "block"); // Réafficher les autres onglets
        stateS = 1; // Remettre l'état du sous-menu à fermé

        state = 1;
    }
}


function toggleSousMenu() {
    let sousMenu = document.getElementById("sous-nav");
    let club = document.getElementById("club-bt");
    let onglets = document.querySelectorAll(".onglet:not(#club-bt)"); // Tous les onglets sauf "Le Club"

    if (stateS == 1) {
        sousMenu.classList.add("sous-menu-ouvert");
        club.classList.add("sous-menu-ouvert");
        onglets.forEach(onglet => onglet.style.display = "none"); // Cache les autres onglets
        stateS = 0;
    } else {
        sousMenu.classList.remove("sous-menu-ouvert");
        club.classList.remove("sous-menu-ouvert");
        onglets.forEach(onglet => onglet.style.display = "block"); // Réaffiche les onglets
        stateS = 1;
    }
}





// Accueil
//========
let index = 1;
// Fonction permettant de déplier le programme du WE
function programme() {
    var div = document.getElementById("toggle-div");
    if (index === 1) {
        div.classList.add('expanded');
        index = 2;
    } else if (index === 2) {
        div.classList.remove('expanded')
        index = 1;
    }
}
// Affichage aléatoire de sponsors
// Liste des images disponibles dans le dossier
const sponsorImages = [
    "elements/partenaires/aluminium habitat.jpg",
    "elements/partenaires/AC THERMIQUE.jpg",
    "elements/partenaires/amc lavage serrois.jpg",
    "elements/partenaires/andré paillas.jpg",
    "elements/partenaires/atelier-ossau.png",
    "elements/partenaires/auberge la promenade.jpg",
    "elements/partenaires/ATOL.jpg",
    "elements/partenaires/autosur.jpg",
    "elements/partenaires/bearn incendie.jpg",
    "elements/partenaires/bidart.jpg" ,
    "elements/partenaires/bordenave électricité.jpg" ,
    "elements/partenaires/boérie.jpg" ,
    "elements/partenaires/bricomarché_oloron.jpg" ,
    "elements/partenaires/buso.jpg" ,
    "elements/partenaires/camping belair.jpg" ,
    "elements/partenaires/carrey.jpg" ,
    "elements/partenaires/carrosserie-du-piemont.jpg" ,
    "elements/partenaires/cass auto vigneai.jpg" ,
    "elements/partenaires/cba_materiaux.jpg" ,
    "elements/partenaires/Centre de formation ac Fam.jpg" ,
    "elements/partenaires/CER les gaves.png.jpg" ,
    "elements/partenaires/Chouette peinture.jpg" ,
    "elements/partenaires/citroen.jpg" ,
    "elements/partenaires/clément pairault.jpg" ,
    "elements/partenaires/clement-servat.jpg" ,
    "elements/partenaires/coiffure mode conseil.jpg" ,
    "elements/partenaires/Déchetterie.jpg" ,
    "elements/partenaires/d'oc charpente.jpg" ,
    "elements/partenaires/euromagri.jpg" ,
    "elements/partenaires/Garage monteiro.jpg" ,
    "elements/partenaires/groupama gan.jpg" ,
    "elements/partenaires/guiraud.jpg" ,
    "elements/partenaires/hangar a 2 roues.jpg" ,
    "elements/partenaires/informatique FLORENT MIRO.jpg" ,
    "elements/partenaires/labat.jpg" ,
    "elements/partenaires/lacau.jpg" ,
    "elements/partenaires/Lacayrelle.jpg" ,
    "elements/partenaires/lagardere.jpg" ,
    "elements/partenaires/Le fournil de lasseube.jpg" ,
    "elements/partenaires/le tire bouchon.jpg" ,
    "elements/partenaires/les viandes du haut bearn.jpg" ,
    "elements/partenaires/l'escapade.jpg" ,
    "elements/partenaires/l'hair naturel.jpg" ,
    "elements/partenaires/LIENNE STEPHANE.jpg" ,
    "elements/partenaires/lopez.jpg" ,
    "elements/partenaires/macon yannick lassalle-001.jpg" ,
    "elements/partenaires/manutech-Logo.jpg" ,
    "elements/partenaires/Pedelaborde.jpg" ,
    "elements/partenaires/phillippe fleur.png.jpg" ,
    "elements/partenaires/point P.jpg" ,
    "elements/partenaires/pompes-funebres-lassalle.jpg" ,
    "elements/partenaires/sanguinet élagage.jpg" ,
    "elements/partenaires/serrurerie-industrie.jpg" ,
    "elements/partenaires/SOTRAVOS.jpg" ,
    "elements/partenaires/tardos maçonnerie.jpg" ,
    "elements/partenaires/technique tele Ent pon.jpg" ,
    "elements/partenaires/terrassement bourdet.jpg" ,
    "elements/partenaires/transport peyroutet.jpg" ,
    "elements/partenaires/transports mathieu.jpg" ,
    "elements/partenaires/valentine.jpg" ,
    "elements/partenaires/vitrage auto béarn.jpg" ,
    "elements/partenaires/Loustau sarl.jpg" ,
    "elements/partenaires/soubercaze.jpg" ,
    "elements/partenaires/bourdet pees.jpg" ,
    "elements/partenaires/kremer.jpg" ,
    "elements/partenaires/vival lasseube.jpg" ,
    "elements/partenaires/tpo.png" ,
    "elements/partenaires/informatic.jpg" ,
    "elements/partenaires/couralis.jpg" ,
];  

// Fonction pour choisir des images aléatoires
function getRandomSponsors(images, count) {
    const selected = [];
    const usedIndices = new Set();
    while (selected.length < count && usedIndices.size < images.length) {
            const randomIndex = Math.floor(Math.random() * images.length);

            if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            selected.push(images[randomIndex]);
            }
    }
    return selected;
}
// Sélectionnez 4 images aléatoires
const randomSponsors = getRandomSponsors(sponsorImages, 4);
// Appliquez les images aux balises <img>
randomSponsors.forEach((image, index) => {
    const sponsorImg = document.getElementById(`sponsor${index + 1}`);
    sponsorImg.src = image;
});
  


// Equipes et Calendrier
//======================
// Equipe va de 0 à 100 et Calendrier de 101 à +200
// Changediv récupère le numéro de la div à afficher et en fonction de val
// il modifie la partie qu'il faut sans modifier l'autre

var currentDivIndexEquipes = 0;
var currentDivIndexCalendrier = 101;
function changeDiv(n, val) { // val étant la valeur pour savoir si c'est calendrier ou equipe
    console.log(val);
    if (val == 0){
        var currentDiv = document.getElementById(currentDivIndexEquipes);
        currentDiv.classList.remove('currentDiv');
        currentDivIndexEquipes = n;
        // console.log(currentDivIndexEquipes);
        var newCurrentDiv = document.getElementById(currentDivIndexEquipes);
        newCurrentDiv.classList.add('currentDiv');
    } else {
        var currentDiv = document.getElementById(currentDivIndexCalendrier);
        currentDiv.classList.remove('currentDiv');
        currentDivIndexCalendrier = n;
        // console.log(currentDivIndexCalendrier);
        var newCurrentDiv = document.getElementById(currentDivIndexCalendrier);
        newCurrentDiv.classList.add('currentDiv');
    }
}


// Contact (à revoir)
//===================
// Envoie de formulaire
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le formulaire de soumettre de manière traditionnelle
    var formData = new FormData(event.target);
    var data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    fetch('https://example.com/send-email', { //http://localhost:3000/send-email
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            alert('Message envoyé avec succès !');
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Il y a eu un problème avec l\'envoi du message.');
        });
});

// Gallerie :
// Sélection des éléments
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const images = Array.from(document.querySelectorAll(".gallery img"));
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const closeBtn = document.querySelector(".close");
let currentIndex = 0;

// Fonction pour afficher une image
function showImage(index) {
    if (index >= 0 && index < images.length) {
        modal.style.display = "flex";
        modalImg.src = images[index].src;
        currentIndex = index;
    }
}
// Ouvre l'image en grand lorsqu'on clique dessus
images.forEach((img, index) => {
    img.addEventListener("click", () => showImage(index));
});
// Ferme la modale en cliquant en dehors
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Gestion du swipe sur mobile
let touchStartX = 0;
let touchEndX = 0;
// Détecte quand l'utilisateur commence à toucher l'écran
modal.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});
// Détecte quand l'utilisateur lève son doigt
modal.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});
// Fonction qui gère le swipe gauche/droite
function handleSwipe() {
    let swipeDistance = touchEndX - touchStartX;
    if (swipeDistance > 50) { 
        // Swipe vers la droite → image précédente
        showImage(currentIndex - 1);
    } else if (swipeDistance < -50) { 
        // Swipe vers la gauche → image suivante
        showImage(currentIndex + 1);
    }
}
// Gestion des boutons "précédent" et "suivant" sur PC
if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
    nextBtn.addEventListener("click", () => showImage(currentIndex + 1));
}
// Ferme la modale quand on clique sur la croix
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none"; // Cache la modale
    });
}