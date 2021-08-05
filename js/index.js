function Index(conteneur) {
  this.initIndex = (cameras) => {
    //----Création des boites (dans une boucle)
    for (let i = 0; i < cameras.length; i++) {
      //-----Création des éléments-------------------
      const box = document.createElement("div");
      const lien = document.createElement("a");
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      const boxTxt = document.createElement("div");
      const innerbox = document.createElement("div");
      const nom = document.createElement("h3");
      const prix = document.createElement("p");
      //---Ajout des classes CSS-------------------------
      box.classList.add("box");
      boxTxt.classList.add("box-txt");
      //---Attribuer des éléments enfants---------------------
      conteneur.appendChild(box);
      box.appendChild(lien);
      box.appendChild(boxTxt);
      lien.appendChild(figure);
      figure.appendChild(image);
      boxTxt.appendChild(innerbox);
      innerbox.appendChild(nom);
      innerbox.appendChild(prix);
      //--Création du contenu (texte ou attributs)---------------------
      lien.href = "html/produit.html?id=" + cameras[i]._id;
      image.src = cameras[i].imageUrl;
      nom.textContent = cameras[i].name;
      prix.textContent = `${cameras[i].price / 100} €`;
    }
  };
  getData("http://localhost:3000/api/cameras", (cameras) => {
    this.initIndex(cameras);
  });
}

window.onload = () => {
  const main = document.querySelector("main");
  new initGeneral(main);
  const conteneur = document.querySelector("#conteneur");
  new Index(conteneur);
};
