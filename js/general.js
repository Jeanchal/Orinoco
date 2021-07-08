//---------------------------------------
const cameras = [
  {
    lenses: ["35mm 1.4", "50mm 1.6"],
    _id: "5be1ed3f1c9d44000030b061",
    name: "Zurss 50S",
    price: 49900,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "http://localhost:3000/images/vcam_1.jpg",
  },
  {
    lenses: ["50mm 1.8", "60mm 2.8", "24-60mm 2.8/4.5"],
    _id: "5be1ef211c9d44000030b062",
    name: "Hirsch 400DTS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 309900,
    imageUrl: "http://localhost:3000/images/vcam_2.jpg",
  },
  {
    lenses: ["25mm 4.5"],
    _id: "5be9bc241c9d440000a730e7",
    name: "Franck JS 105",
    price: 209900,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "http://localhost:3000/images/vcam_3.jpg",
  },
  {
    lenses: ["50mm 1.7", "35mm 1.4"],
    _id: "5be9c4471c9d440000a730e8",
    name: "Kuros TTS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 159900,
    imageUrl: "http://localhost:3000/images/vcam_4.jpg",
  },
  {
    lenses: ["50mm 1.4", "35mm 1.8", "28-200mm 2.8/4.5"],
    _id: "5be9c4c71c9d440000a730e9",
    name: "Katatone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 59900,
    imageUrl: "http://localhost:3000/images/vcam_5.jpg",
  },
];

const main = document.querySelector("main");
const TotalCmd = localStorage.getItem("TotalCommande");
let tableauPrix = [0];
let versions = 0;
let totalBtnNb = Number(localStorage.getItem("TotalPanier"));
let nbpanier = document.querySelector("header span");

function initGeneral() {
  const conteneur = document.createElement("div");
  conteneur.id = "conteneur";
  main.appendChild(conteneur);
}

function background() {
  //---choix aléatoire du fond d'écran------------
  const tabImages = [
    "url(../images/font.jpg)",
    "url(../images/font1.jpg)",
    "url(../images/font2.jpg)",
    "url(../images/font3.jpg)",
    "url(../images/font4.jpg)",
  ];
  const randomimages = tabImages[Math.floor(Math.random() * tabImages.length)];
  document.body.style.backgroundImage = randomimages;
  document.body.classList.add("background");
}

//---Visibilité nombre d'articles dans le panier---
function NbPanier(totalBtnNb) {
  if (totalBtnNb > 0) nbpanier.innerText = totalBtnNb;
}

// fetch("http://localhost:3000/api/cameras")
//   .then(function (res) {
//     if (res.ok) {
//       return res.json();
//     }
//   })
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log("Une erreur est survenue");
//   });
