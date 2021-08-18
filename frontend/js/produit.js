//---fonction Produit: englobe toutes les fonctions de la page.
function Produit(main) {
  const conteneur = main.querySelector("#conteneur");
  this.conteneur = conteneur;
  let i = getQueryParams("id");
  let totalBtnNb = Number(localStorage.getItem("TotalPanier"));
  let cart = [];
  if (totalBtnNb > 0) {
    cartString = localStorage.getItem("cart");
    cart = JSON.parse(cartString);
  }

  //---fonction initProduit: génére le produit sélectionné
  this.initProduit = (camera) => {
    //-----Création des éléments-------------------
    const box = document.createElement("div");
    const lien = document.createElement("a");
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const boxTxt = document.createElement("div");
    const innerbox = document.createElement("div");
    const nom = document.createElement("h3");
    const prix = document.createElement("p");
    const versionProduit = document.createElement("p");
    const spanProduit = document.createElement("span");
    const selectProduit = document.createElement("select");
    const option1Produit = document.createElement("option");
    const description = document.createElement("p");
    const btnProduit = document.createElement("button");
    box.classList.add("box", "box-produit");
    boxTxt.classList.add("box-txt");
    conteneur.appendChild(box);
    box.appendChild(lien);
    box.appendChild(boxTxt);
    lien.appendChild(figure);
    figure.appendChild(image);
    boxTxt.appendChild(innerbox);
    innerbox.appendChild(nom);
    innerbox.appendChild(prix);
    innerbox.appendChild(versionProduit);
    innerbox.appendChild(description);
    innerbox.appendChild(btnProduit);
    versionProduit.appendChild(spanProduit);
    versionProduit.appendChild(selectProduit);
    selectProduit.appendChild(option1Produit);
    lien.href = camera.imageUrl;
    btnProduit.textContent = "Ajouter au panier";
    image.src = camera.imageUrl;
    nom.textContent = camera.name;
    prix.textContent = `${camera.price / 100} €`;
    spanProduit.textContent = "lentille: ";
    description.textContent = camera.description;
    option1Produit.textContent = camera.lenses[0];
    if (camera.lenses.length > 1) {
      const option2Produit = document.createElement("option");
      selectProduit.appendChild(option2Produit);
      option2Produit.textContent = camera.lenses[1];
    }
    if (camera.lenses.length > 2) {
      const option3Produit = document.createElement("option");
      selectProduit.appendChild(option3Produit);
      option3Produit.textContent = camera.lenses[2];
    }
    btnProduit.addEventListener("click", () => {
      this.ajouterProduit(camera, selectProduit);
    });
  };

  //---fonction ajouterProduit: enregistre le produit sélectionné sous forme d'objet dans le localStorage.
  this.ajouterProduit = (camera, selectProduit) => {
    let totalBtnNb = Number(localStorage.getItem("TotalPanier"));
    let index = selectProduit.selectedIndex;
    let nb = 0;
    let nouvelArticle = true;
    let article = { id: camera._id, version: camera.lenses[index], nb: nb };
    for (let i = 0; i < cart.length; i++) {
      let nb = cart[i].nb;
      if (
        cart[i].id === camera._id &&
        cart[i].version === camera.lenses[index]
      ) {
        nb++;
        cart[i].nb = nb;
        nouvelArticle = false;
      }
    }
    if (nouvelArticle === true) {
      nb = 1;
      article.nb = nb;
      cart.push(article);
    }
    let cartString = JSON.stringify(cart);
    localStorage.setItem("cart", cartString);
    localStorage.setItem("TotalPanier", totalBtnNb + 1);
    UpdateNbPanier(totalBtnNb + 1);
  };

  //---Utilisation de la fonction getData pour récupérer les données de l'Api
  getData("http://localhost:3000/api/cameras/" + i, (camera) => {
    this.initProduit(camera);
  });
  return this;
}

//---window.onload: attends la fin du chargement de la page avant d'initialiser les éléments.
window.onload = () => {
  const main = document.querySelector("main");
  new initGeneral(main);
  new Produit(main);
};
