function Produit(main) {
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
  const option2Produit = document.createElement("option");
  const option3Produit = document.createElement("option");
  const description = document.createElement("p");
  const btnProduit = document.createElement("button");
  const conteneur = main.querySelector("#conteneur");
  this.conteneur = conteneur;
  //-------------------------------------
  let i = Number(new URLSearchParams(window.location.search).get("id"));
  //---------------------------
  box.classList.add("box", "box-produit");
  boxTxt.classList.add("box-txt");
  //------------------------------
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
  //-------------------------------
  lien.href = cameras[i].imageUrl;
  btnProduit.textContent = "Ajouter au panier";
  image.src = cameras[i].imageUrl;
  nom.textContent = cameras[i].name;
  prix.textContent = `${cameras[i].price / 100} €`;
  spanProduit.textContent = "lentille: ";
  description.textContent = cameras[i].description;
  option1Produit.textContent = cameras[i].lenses[0];
  if (cameras[i].lenses.length == 2) {
    selectProduit.appendChild(option2Produit);
    option2Produit.textContent = cameras[i].lenses[1];
  }
  if (cameras[i].lenses.length == 3) {
    selectProduit.appendChild(option3Produit);
    option3Produit.textContent = cameras[i].lenses[2];
  }
  //-------------
  this.ajouterProduit = () => {
    let nbBtn = Number(localStorage.getItem(cameras[i].name));
    let totalBtnNb = Number(localStorage.getItem("TotalPanier"));
    //-------------------------
    let nb = "v" + document.querySelector("select").selectedIndex;
    versions[i][nb]++;
    localStorage.setItem(cameras[i].name + "/" + [nb], versions[i][nb]);
    //--------------------------
    localStorage.setItem(cameras[i].name, nbBtn + 1);
    localStorage.setItem(
      cameras[i]._id,
      (cameras[i].price / 100) * (nbBtn + 1)
    );
    localStorage.setItem("TotalPanier", totalBtnNb + 1);
    dispatchUpdateNbPanier(totalBtnNb + 1);
    // let versions = Number(localStorage.getItem(cameras[i].name + "/" + select));
    // localStorage.setItem(cameras[i].name + "/" + select, versions + 1);
  };
  btnProduit.addEventListener("click", () => {
    this.ajouterProduit();
  });
  return this;
}

window.onload = () => {
  const main = document.querySelector("main");
  new initGeneral(main);
  new Produit(main);
};
