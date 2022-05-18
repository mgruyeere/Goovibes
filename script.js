//une variable pour récupérer les ID HTML
let author = document.getElementById("authorName");
let quote = document.getElementById("entireQuote");
let button = document.getElementById("generate");

//avoir d'autres citations sous la main + les ranger dans un array
let nom;
let citation;
let allQuotes = [
  {
    nom: "Inconnu",
    citation: "Le bonheur, c’est l’odeur du café, rarement son goût.",
  },
  {
    nom: "Baruch Spinoza",
    citation:
      "Si vous voulez que la vie vous sourie, apportez-lui d'abord votre bonne humeur.",
  },
  {
    nom: "Agnès Ledig",
    citation:
      "Ne cherchez pas à atteindre un bonheur parfait, mais contentez-vous des petites choses de la vie, qui, mises bout à bout, permettent de tenir la distance.",
  },
  {
    nom: "Pierre Dac",
    citation: "La bonne humeur est la fille aînée de la puissance tranquille.",
  },
  {
    nom: "Kadoc",
    citation: "Faut pas respirer la compote, ça fait tousser.",
  },
  {
    nom: "Bouddha",
    citation:
      "Accepte ce qui est, laisse aller ce qui était, aie confiance en ce qui sera.",
  },
  {
    nom: "Georges Clémenceau",
    citation:
      "Il n’y a qu’une façon d’échouer c’est d’abandonner avant d’avoir réussi.",
  },
  {
    nom: "Albert Einstein",
    citation: "Au milieu de toute difficulté se trouve cachée une opportunité.",
  },
  {
    nom: "Christophe André",
    citation:
      "Sourire mobilise 15 muscles, mais faire la gueule en sollicite 40.",
  },
  {
    nom: "Molière",
    citation:
      "Plus grand est l’obstacle, plus grande est la gloire de le surmonter.",
  },
  {
    nom: "Dalaï Lama",
    citation:
      "Le vrai bonheur ne dépend d'aucun être, d'aucun objet extérieur. Il ne dépend que de vous.",
  },
  {
    nom: "The Mask",
    citation: "Sssplendide !!",
  },
  {
    nom: "Les Visiteurs",
    citation: "C'est OKKKK !",
  },
  {
    nom: "Simone de Beauvoir",
    citation: "Exister, c'est oser se jeter dans le monde.",
  },
  {
    nom: "Serge Gainsbourg",
    citation: "Je connais mes limites. C'est pourquoi je vais au-delà.",
  },
  {
    nom: "Gandalf",
    citation:
      "Je crois que ce sont les petites choses, les gestes quotidiens des gens ordinaires qui nous préservent du mal.",
  },
  {
    nom: "J.D. (Scrubs)",
    citation:
      "La vie est faite de hauts et de bas. Même que parfois, le haut ne va pas du tout avec le bas.",
  },
  {
    nom: "Proverbe indien",
    citation: "Si tu vois tout en gris, déplace l'éléphant !",
  },
];

//créer la fonction + la méthode aléatoire

button.addEventListener("click", changeQuote);

function changeQuote() {
  //choix aléatoire

  let rdm = Math.floor(Math.random() * (allQuotes.length - 0));

  let rdmQuotes = allQuotes[rdm];

  console.log(rdmQuotes);

  //modification à faire
  author.innerHTML = rdmQuotes["nom"];
  quote.innerHTML = rdmQuotes["citation"];
}
