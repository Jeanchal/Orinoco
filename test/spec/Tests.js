function getQueryParams(param) {
  return "fakeid";
}
const route = {
  "http://localhost:3000/api/cameras": [
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
  ],
  "http://localhost:3000/api/cameras/fakeid": {
    lenses: ["35mm 1.4", "50mm 1.6"],
    _id: "fakeid",
    name: "Zurss 50S",
    price: 49900,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "http://localhost:3000/images/vcam_1.jpg",
  },
  "http://localhost:3000/api/cameras/order": {
    contact: {
      firstName: "dhhdhdi@djbdbd",
      lastName: "dhhdhdi@djbdbd",
      address: "dhhdhdi@djbdbd",
      city: "dhhdhdi@djbdbd",
      email: "dhhdhdi@djbdbd",
    },
    products: [
      {
        lenses: ["35mm 1.4", "50mm 1.6"],
        _id: "5be1ed3f1c9d44000030b061",
        name: "Zurss 50S",
        price: 49900,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "http://localhost:3000/images/vcam_1.jpg",
      },
    ],
    orderId: "2ad9e7e0-f091-11eb-a647-9122577cfbf0",
  },
};
function getData(url, repOk, params = {}) {
  const data = route[url];
  repOk(data);
}
function redirect() {}
describe("Tests (45 tests)", function () {
  let cameras = route["http://localhost:3000/api/cameras"];
  const camera = cameras[0];
  let cart = [
    { id: "5be1ef211c9d44000030b062", version: "50mm 1.8", nb: 3 },
    { id: "5be1ed3f1c9d44000030b061", version: "35mm 1.4", nb: 1 },
  ];
  let cartString = JSON.stringify(cart);
  it("initGeneral--------(2 tests)", function () {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    const header = document.createElement("header");
    const span = document.createElement("span");
    body.appendChild(header);
    body.appendChild(main);
    header.appendChild(span);
    new initGeneral(main);
    //--------------------------------
    expect(main.innerHTML).not.toBeNull();
    expect(conteneur.id).toEqual("conteneur");
    //---test 1: on vérifie que le contenu du "main" n'est pas nul.
    //---test 2: on vérifie que l'id du conteneur est conforme au résultat attendu.
    main.innerHTML = "";
    body.removeChild(header);
    body.removeChild(main);
    //--Nettoyage des données utilisées pour le test.
  });
  it("UpdateNbPanier-----(2 tests)", function () {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    const header = document.createElement("header");
    const span = document.createElement("span");
    body.appendChild(header);
    body.appendChild(main);
    header.appendChild(span);
    localStorage.setItem("TotalPanier", 2);
    const nbpanier = document.querySelector("header span");
    new initGeneral(main);
    //--------------------------------
    expect(nbpanier.innerText).toEqual("2");
    //---test 1: on ajoute "2" à "TotalPanier " dans le localStorage et on vérifie que le nombre d'artciles c'est bien mis à jour.
    localStorage.clear();
    new initGeneral(main);
    expect(nbpanier.innerText).toEqual("");
    //---test 2: on supprime le contenu du localStorage et on vérifie que le nombre d'articles disparait.
    main.innerHTML = "";
    body.removeChild(header);
    body.removeChild(main);
    //--Nettoyage des données utilisées pour le test.
  });
  it("msgError-----------(3 tests)", function () {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    body.appendChild(main);
    const message = "impossible de se connecter au serveur...";
    const statut = "statut: 404 no found";
    msgError(message, statut);
    const div = main.children[0];
    const p1 = div.children[0];
    const p2 = div.children[1];
    const p3 = div.children[2];
    //-------------------------
    expect(p1.textContent).toEqual("Une Erreur est survenue !");
    expect(p2.textContent).toEqual("impossible de se connecter au serveur...");
    expect(p3.textContent).toEqual("statut: 404 no found");
    //---test 1: on vérifie que le contenu textuel du paragraphe 1 est conforme.
    //---test 2: on vérifie que le contenu textuel du paragraphe 2 est conforme.
    //---test 3: on vérifie que le contenu textuel du paragraphe 3 est conforme.
    main.innerHTML = "";
    body.removeChild(main);
    //--Nettoyage des données utilisées pour le test.
  });
  it("initIndex----------(3 tests)", function () {
    const conteneur = document.createElement("div");
    new Index(conteneur);
    let nomTest = conteneur.children[1].children[1].children[0].children[0];
    let prixTest = conteneur.children[4].children[1].children[0].children[1];
    //---------------------------------
    expect(conteneur.childElementCount).toEqual(5);
    expect(nomTest.textContent).toEqual("Hirsch 400DTS");
    expect(prixTest.textContent).toEqual("599 €");
    //---test 1: on vérifie le nombre d'enfant de l'élément "conteneur"
    //---test 2: on vérifie le contenu textuel du nom d'un d'article aléatoire.
    //---test 3: on vérifie le contenu textuel du prix d'un d'article aléatoire.
  });
  it("initProduit--------(3 tests)", function () {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    const conteneur = document.createElement("div");
    conteneur.id = "conteneur";
    body.appendChild(main);
    main.appendChild(conteneur);
    new Produit(main);
    const divProduit = conteneur.children[0].children[1].children[0];
    const nomProduit = divProduit.children[0];
    const ajouterPanier = divProduit.children[4];
    //------------------------------------------------------------
    expect(divProduit.childElementCount).toEqual(5);
    expect(nomProduit.textContent).toEqual("Zurss 50S");
    expect(ajouterPanier.textContent).toEqual("Ajouter au panier");
    //---test 1: on vérifie le nombre d'enfant de "divProduit"
    //---test 2: on vérifie que le contenu textuel de "nomProduit" est conforme.
    //---test 3: on vérifie que le contenu textuel de "ajouterPanier" est conforme.
    main.innerHTML = "";
    body.removeChild(main);
    //--Nettoyage des données utilisées pour le test.
  });
  it("ajouterProduit-----(3 tests)", function () {
    const main = document.createElement("main");
    const conteneur = document.createElement("div");
    const selectProduit = document.createElement("select");
    const option1Produit = document.createElement("option");
    conteneur.id = "conteneur";
    main.appendChild(conteneur);
    conteneur.appendChild(selectProduit);
    selectProduit.appendChild(option1Produit);
    option1Produit.textContent = cameras[0].lenses[0];
    localStorage.setItem("TotalPanier", 0);
    const produit = new Produit(main);
    produit.ajouterProduit(camera, selectProduit);
    const TtPanier = localStorage.getItem("TotalPanier");
    const cartString = localStorage.getItem("cart");
    let cart = JSON.parse(cartString);
    //-----------------------------------------------
    expect(TtPanier).toEqual("1");
    expect(cart).not.toBeNull();
    expect(cart[0].id).toEqual("5be1ed3f1c9d44000030b061");
    //---test 1: on vérifie que "TtPanier" (nb d'articles ajoutés) est égal à 1;
    //---test 2: on vérifie que le contenu l'objet "cart" n'est pas nul.
    //---test 3: on vérifie que le contenu de l'Id est conforme.
    main.innerHTML = "";
    localStorage.clear();
    //--Nettoyage des données utilisées pour le test.
  });
  it("initPanier---------(2 tests)", function () {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    const conteneur = document.createElement("div");
    conteneur.id = "conteneur";
    body.appendChild(main);
    main.appendChild(conteneur);
    localStorage.setItem("cart", cartString);
    const panier = new Panier(main);
    panier.initPanier(cart, cameras);
    const conteneurPanier = main.children[1];
    const message = conteneurPanier.children[0];
    //------------------------------------------
    expect(message.textContent).toEqual("Votre panier est vide...");
    expect(conteneurPanier.id).toEqual("conteneur-panier");
    //---test 1: on vérifie que le contenu textuel de "message" est conforme.
    //---test 2: on vérifie que l'id de conteneurPanier est conforme.
    localStorage.clear();
    body.removeChild(main);
    main.innerHTML = "";
    //--Nettoyage des données utilisées pour le test.
  });
  it("activPanier--------(3 tests)", function () {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    const conteneur = document.createElement("div");
    conteneur.id = "conteneur";
    body.appendChild(main);
    main.appendChild(conteneur);
    localStorage.setItem("cart", cartString);
    const panier = new Panier(main);
    panier.activPanier();
    const conteneurPanier = document.querySelector("#conteneur-panier");
    const btnCommander = conteneurPanier.children[1];
    const btnViderPanier = conteneurPanier.children[2];
    //----------------------------------
    expect(conteneurPanier.childElementCount).toEqual(3);
    expect(btnCommander.textContent).toEqual("Commander");
    expect(btnViderPanier.textContent).toEqual("Vider le panier");
    //---test 1: on vérifie le nombre d'enfants de "conteneurPanier".
    //---test 2: on vérifie que le contenu textuel du bouton "Commander" est conforme.
    //---test 3: on vérifie que le contenu textuel du bouton "Vider le panier" est conforme.
    localStorage.clear();
    body.removeChild(main);
    main.innerHTML = "";
    //--Nettoyage des données utilisées pour le test.
  });
  it("panierConstructor--(4 tests)", function () {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    const conteneur = document.createElement("div");
    conteneur.id = "conteneur";
    body.appendChild(main);
    main.appendChild(conteneur);
    cart = [
      { id: "5be1ed3f1c9d44000030b061", version: "35mm 1.4", nb: 2 },
      { id: "5be1ef211c9d44000030b062", version: "50mm 1.8", nb: 1 },
    ];
    let cartString = JSON.stringify(cart);
    localStorage.setItem("cart", cartString);
    let panier = new Panier(main);
    panier.initPanier(cart);
    panier.panierConstructor(cart, cameras, 0, 0);
    const article = conteneur.children[0].children[1].children[0];
    const nameArticle = article.children[0];
    const nbArticle = article.children[2];
    //-----------------------------------
    expect(conteneur.innerHTML).not.toBeNull();
    expect(conteneur.childElementCount).toEqual(1);
    expect(nameArticle.textContent).toEqual("Zurss 50S/35mm 1.4");
    expect(nbArticle.textContent).toEqual("2");
    //---test 1: on vérifie que le contenu de "conteneur" n'est pas nul.
    //---test 2: on vérifie le nombre d'enfants de "conteneur".
    //---test 3: on vérifie le contenu textuel du nom d'un article aléatoire.
    //---test 4: on vérifie le nombre d'articles du produit sélectionné.
    body.removeChild(main);
    localStorage.clear();
    main.innerHTML = "";
    //--Nettoyage des données utilisées pour le test.
  });
  it("calculPanier-------(2 tests)", function () {
    const body = document.querySelector("body");
    const totalPanier = document.createElement("p");
    body.appendChild(totalPanier);
    let tableauPrix = [1, 2, 3, 4];
    calculPanier(tableauPrix, totalPanier);
    //----------------------------------
    expect(Total).toEqual(10);
    expect(totalPanier.textContent).toEqual("Total: 10 €");
    //---test 1: on vérifie que les éléments du tableau ont bien été additionnés.
    //---test 2: on vérifie le contenu textuel du total du panier.
    totalPanier.innerText = "";
    body.removeChild(totalPanier);
  });
  it("removePanier-------(4 tests)", function () {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    const conteneur = document.createElement("div");
    conteneur.id = "conteneur";
    conteneur.innerHTML = "<div></div>";
    body.appendChild(main);
    main.appendChild(conteneur);
    localStorage.setItem("cart", cartString);
    localStorage.setItem("Bonjour", 1);
    let panier = new Panier(main);
    panier.initPanier(cart);
    panier.removePanier();
    const bonjour = localStorage.getItem("Bonjour");
    const message = panier.conteneurPanier.querySelector("p");
    //----------------------------------------------
    expect(bonjour).toBeNull();
    expect(conteneur.innerHTML).toEqual("");
    expect(message).not.toBeNull();
    expect(message.textContent).toEqual("Votre panier est vide...");
    //---test 1: vérifie les données du formulaire et les envoie au serveur si les elles sont conformes
    //---test 2: on vérifie le contenu textuel de "conteneur" est vide
    //---test 3: on vérifie que le contenu de message n'est pas nul.
    //---test 4: on vérifie que le contenu  textuel  du message est conforme.
    main.innerHTML = "";
    body.removeChild(main);
    //--Nettoyage des données utilisées pour le test.
  });
  it("formulaire---------(6 tests)", function () {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    const conteneur = document.createElement("div");
    conteneur.id = "conteneur";
    body.appendChild(main);
    main.appendChild(conteneur);
    localStorage.setItem("cart", cartString);
    const panier = new Panier(main);
    const conteneurPanier = document.querySelector("#conteneur-panier");
    conteneurPanier.innerHTML = "<div></div>";
    panier.formulaire();
    const form = document.querySelector("#conteneur > form");
    const email = form.children[5];
    const nom = form.children[2];
    const h3 = form.children[0];
    const span = form.children[7].children[0];
    //-------------------------------
    expect(conteneurPanier.innerHTML).toEqual("");
    expect(form.childElementCount).toEqual(8);
    expect(span.innerHTML).toEqual('<i class="fas fa-arrow-left"></i> retour');
    expect(email.type).toEqual("email");
    expect(nom.id).toEqual("lastName");
    expect(h3.textContent).toEqual("Nouveau client ?");
    //---test 1: on vérifie le contenu html de "conteneurPanier" est vide.
    //---test 2: on vérifie le nombre d'enfants de "form".
    //---test 3: on vérifie le contenu html de "span".
    //---test 4: on vérifie le type de "email"
    //---test 5: on vérifie l'id de "nom".
    //---test 6: on vérifie que le contenu textuel du titre est conforme.
    localStorage.clear();
    main.innerHTML = "";
    body.removeChild(main);
    //--Nettoyage des données utilisées pour le test.
  });
  it("validerFormulaire--(1 test)", function () {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    const conteneur = document.createElement("div");
    conteneur.id = "conteneur";
    body.appendChild(main);
    main.appendChild(conteneur);
    const form = document.createElement("form");
    const h3 = document.createElement("h3");
    const prenom = document.createElement("input");
    const nom = document.createElement("input");
    const adresse = document.createElement("input");
    const ville = document.createElement("input");
    const email = document.createElement("input");
    conteneur.appendChild(form);
    form.appendChild(h3);
    form.appendChild(prenom);
    form.appendChild(nom);
    form.appendChild(adresse);
    form.appendChild(ville);
    form.appendChild(email);
    prenom.id = "firstName";
    nom.id = "lastName";
    adresse.id = "address";
    ville.id = "city";
    email.id = "email";
    prenom.value = "Jean";
    nom.value = "Chalret";
    adresse.value = "20 avenue de Paris";
    ville.value = "Paris";
    email.value = "bonjour@hello.fr";
    localStorage.setItem("cart", cartString);
    localStorage.setItem("TotalCommande", 1000);
    const panier = new Panier(main);
    panier.validerFormulaire(form);
    //-------------------------------
    expect(conteneur.innerHTML).toEqual("");
    //---test 1: on vérifie le contenu html de "conteneur" est vide.
    localStorage.clear();
    main.innerHTML = "";
    body.removeChild(main);
    //--Nettoyage des données utilisées pour le test.
  });
  it("Commande-----------(3 tests)", function () {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    const conteneur = document.createElement("div");
    conteneur.id = "conteneur";
    body.appendChild(main);
    main.appendChild(conteneur);
    new Commande(main);
    const conteneurCmd = document.querySelector("#conteneur-commande");
    const message = conteneurCmd.children[0];
    //-------------------------------
    expect(conteneurCmd.childElementCount).toEqual(3);
    expect(conteneurCmd.id).toEqual("conteneur-commande");
    expect(message.textContent).toEqual(
      "Vous n'avez pas encore passé commande chez nous :)"
    );
    //---test 1: on vérifie le nombre d'enfants de conteneurCmd.
    //---test 2: on vérifie l'id de conteneurCmd.
    //---test 3: on vérifie que le contenu textuel de message est conforme.
    main.innerHTML = "";
    body.removeChild(main);
    //--Nettoyage des données utilisées pour le test.
  });
  it("validerCmd---------(4 tests)", function () {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    const conteneur = document.createElement("div");
    conteneur.id = "conteneur";
    body.appendChild(main);
    main.appendChild(conteneur);
    localStorage.setItem(
      "recapCmd",
      JSON.stringify(route["http://localhost:3000/api/cameras/order"])
    );
    console.log(
      JSON.stringify(route["http://localhost:3000/api/cameras/order"])
    );
    Commande(main);
    const conteneurCmd = document.querySelector("#conteneur-commande");
    const msgCommande = conteneurCmd.children[0].textContent;
    const idCommande = conteneurCmd.children[1].textContent;
    const ttCommande = conteneurCmd.children[2].textContent;
    //-------------------------------
    expect(idCommande).toEqual(
      "N° de commande : 2ad9e7e0-f091-11eb-a647-9122577cfbf0"
    );
    expect(ttCommande).toEqual("Total de la commande : 499 €");
    expect(msgCommande).toEqual(
      "Bonjour dhhdhdi@djbdbd dhhdhdi@djbdbd, merci pour votre commande"
    );
    expect(localStorage.getItem("recapCmd")).toBeNull();
    //---test 1: on vérifie que le contenu textuel de l'id de la commande est conforme.
    //---test 2: on vérifie que le contenu textuel du total de la commande est conforme.
    //---test 3: on vérifie que le contenu textuel du message de confirmation de commande est conforme.
    //---test 4: on vérifie que le contenu du localStorage a bien été effacé.
    main.innerHTML = "";
    body.removeChild(main);
    //--Nettoyage des données utilisées pour le test.
  });
});
