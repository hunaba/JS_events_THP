// FONCTIONNALITE 1 
// lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>),
// tu vas afficher le mot "clique" en console
var myFooter = document.getElementsByTagName('footer')[0];
 
function onFoorterClick() { 
    console.log('clique');
}

myFooter.addEventListener("click", onFoorterClick);

//FONCTIONNALITE 1-bis
// lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" 
//avec x qui commence à 1 et s'incrémente de +1 à chaque clic.
var myFooter = document.querySelector('footer');  //document.querySelector = sélection du doc 'footer'
var x=1;
function onFoorterClick() { 
    console.log('clic numéro '+ x);
    x++
}

myFooter.addEventListener("click", onFoorterClick);

//FNCTIONNALITE 2 ("Hamburger Menu")
//Si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perd sa classe collapse. 
//Si on clique à nouveau dessus, la classe collapse est rajoutée à l'élément portant l'Id navbarHeader
//INDICE??: elementDuDOM.classList.toggle("nomDeLaClasse") ??

var menuHamb = document.querySelector('button');
var navbarHeader = document.getElementById('navbarHeader');

//===> La méthode getElementById() de 'Document' renvoie 
// un objet 'Element' représentant l'élément dont la propriété  
// id correspond à la chaîne de caractères spécifiée. 

menuHamb.addEventListener("click", toggleOn); 

function toggleOn() {	//toggle() method toggles between hide() and show() for the selected elements.  
    navbarHeader.classList.toggle("collapse");
};

//FONCTIONNALITE 3
//si on clique sur le bouton "Edit" de la première card, 
//le texte de la card va se mettre en rouge de façon irréversible (sauf recharge la page). 
//https://www.grafikart.fr/tutoriels/events-775

var myEditButton = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0]; 

myEditButton.addEventListener('click', putRedText); //prend 2 para: nom evenement (tjs guillemets) + fonction 
													//ça veut dire quand on CLICK, ça va putRedText


function putRedText() {
    var cardChange = document.querySelector('p.card-text'); //document.querySelector = sélection du doc 'card'
    cardChange.style.color = 'red'; //ici on rajoute la class red 
    								////on pourrait mettre un toggle pour qu'au deuxieme clic il redevienne normal
}

//FONCTIONNALITE 4
//si on clique sur le bouton "Edit" de la deuxième card, 
//le texte de la card va se mettre en vert. 
//Si re-clique,redevient comme avant.
//= faire un "toggle" sur le style du texte
//Reprend code F3+ adapte-le pour 2ème card (remplaçant rouge par vert).
//toggle--> faire un petit if / else dans ton AddEventListener. 
// if (secondCard.style.color === 'green'){
// secondCard.style.color = '' ; 

var myEditButton2 = document.querySelectorAll('div.btn-group')[1].children[1]; //=je choisis la carte 2
myEditButton2.addEventListener('click', putGreenText1);

var statusButton = false;  // passe en vert ? verif
function putGreenText1() {
    var cardChange2 = document.querySelectorAll('p.card-text');  // je choisis l'élément à traiter
    if (statusButton) {             // si statusButton true, mettre texte vert en normal 
        statusButton = false;
        cardChange2[1].style.color = '';
    } else {                        // si statusButton false, mettre texte normal en vert
        statusButton = true;
        cardChange2[1].style.color = 'green';
    }
}

//FONCTIONNALITE 5 (sauce "nucleaire")
//si un utilisateur double clique sur la navbar en haut, 
//tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN 
//qui la relie au fichier CSS. 
//Si possible, rends cette fonctionnalité réversible (double-clic pour revenir à la normale).

var cdnBootstrap = document.getElementsByTagName('link')[0]; //récup balise link
var doubleClicNavbar = document.querySelector('header'); //  header devient cliquable
var headTag = document.querySelector('head');   
var statusHeader = false;

var changeCDN = function () {
  if (statusHeader == false) {
    cdnBootstrap.parentNode.removeChild(cdnBootstrap);
    statusHeader = true;
  } else if (statusHeader == true) {
    headTag.appendChild(cdnBootstrap);
    statusHeader= false;
  }
};

doubleClicNavbar.addEventListener('dblclick', changeCDN);

