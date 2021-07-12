function Panier(main) {
  const conteneurPanier = document.createElement("div");
  this.conteneurPanier = conteneurPanier;
  const totalPanier = document.createElement("p");
  const messagePanier = document.createElement("p");
  const btnCommander = document.createElement("button");
  const btnViderPanier = document.createElement("button");
  let identifiant = Math.floor(Math.random() * 1000000);
  const conteneur = main.querySelector("#conteneur");
  let tableauPrix = [0];
  //---------------------------
  conteneurPanier.id = "conteneur-panier";
  messagePanier.classList.add("message");
  //-------------------------
  main.appendChild(conteneurPanier);
  conteneurPanier.appendChild(messagePanier);
  if (localStorage.getItem("TotalPanier") > 0) {
    conteneurPanier.removeChild(messagePanier);
    conteneurPanier.appendChild(totalPanier);
    conteneurPanier.appendChild(btnCommander);
    conteneurPanier.appendChild(btnViderPanier);
  }
  //----------------------------------
  messagePanier.textContent = "Votre panier est vide...";
  btnCommander.textContent = "Commander";
  btnViderPanier.textContent = "Vider le panier";
  //----------------------------------------------------
  for (let i = 0; i < cameras.length; i++) {
    const box = document.createElement("div");
    const lien = document.createElement("a");
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const boxTxt = document.createElement("div");
    const innerbox = document.createElement("div");
    const nom = document.createElement("h3");
    const prix = document.createElement("p");
    const versionProduit = document.createElement("p");
    const panierNb = document.createElement("div");
    const numPanierNb = document.createElement("p");
    //----------------------------
    const totalPrix = Number(localStorage.getItem(cameras[i]._id));
    //----------------------------------------------
    lien.href = "#";
    image.src = cameras[i].imageUrl;
    nom.textContent = cameras[i].name;
    prix.textContent = totalPrix;
    versionProduit.textContent = `lentille: ${cameras[i].lenses[0]}`;
    numPanierNb.textContent = Number(localStorage.getItem(cameras[i].name));
    //-----------------------------------------
    if (numPanierNb.textContent > 0) {
      tableauPrix.push(Number(localStorage.getItem(cameras[i]._id)));
      //------------------------
      box.classList.add("box", "box-panier");
      boxTxt.classList.add("box-txt");
      panierNb.classList.add("nbpanier");
      //------------------------
      conteneur.appendChild(box);
      box.appendChild(lien);
      box.appendChild(boxTxt);
      lien.appendChild(figure);
      figure.appendChild(image);
      boxTxt.appendChild(innerbox);
      innerbox.appendChild(nom);
      innerbox.appendChild(prix);
      innerbox.appendChild(versionProduit);
      innerbox.appendChild(panierNb);
      panierNb.appendChild(numPanierNb);
    }
  }
  //----Calcul total panier----------------
  const reducer = (acc, cur) => acc + cur;
  let Total = tableauPrix.reduce(reducer);
  totalPanier.textContent = "Total: " + Total + " €";
  //----------------------------
  this.removePanier = () => {
    conteneur.innerHTML = "";
    conteneurPanier.innerHTML = "";
    conteneurPanier.appendChild(messagePanier);
    localStorage.clear();
    dispatchUpdateNbPanier(0);
  };
  this.commanderPanier = () => {
    localStorage.setItem("TotalCommande", Total);
    localStorage.setItem("nCommande", identifiant);
  };
  btnCommander.addEventListener("click", () => {
    this.commanderPanier();
    window.location = "commande.html";
  });
  btnViderPanier.addEventListener("click", () => {
    this.removePanier();
  });
  return this;
}

window.onload = () => {
  const main = document.querySelector("main");
  new initGeneral(main);
  new Panier(main);
};

// this.removePanier = (event) => {
//   let reponse = window.confirm("Souhaitez-vous vraiment vider le panier?");
//   if (reponse == false) {
//     event.preventDefault();
//   }
//   conteneur.innerHTML = "";
//   conteneurPanier.innerHTML = "";
//   conteneurPanier.appendChild(messagePanier);
//   localStorage.clear();
//   dispatchUpdateNbPanier(0);
// };
