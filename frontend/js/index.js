//---fonction Index: englobe toutes les fonctions de la page.
function Index(conteneur) {
  //---fonction initIndex: génére les éléments de la page.
  this.initIndex = (cameras) => {
    for (let i = 0; i < cameras.length; i++) {
      const box = document.createElement("div");
      const lien = document.createElement("a");
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      const boxTxt = document.createElement("div");
      const innerbox = document.createElement("div");
      const nom = document.createElement("h3");
      const prix = document.createElement("p");
      box.classList.add("box");
      boxTxt.classList.add("box-txt");
      conteneur.appendChild(box);
      box.appendChild(lien);
      box.appendChild(boxTxt);
      lien.appendChild(figure);
      figure.appendChild(image);
      boxTxt.appendChild(innerbox);
      innerbox.appendChild(nom);
      innerbox.appendChild(prix);
      lien.href = "frontend/html/produit.html?id=" + cameras[i]._id;
      image.src = cameras[i].imageUrl;
      nom.textContent = cameras[i].name;
      prix.textContent = `${cameras[i].price / 100} €`;
    }
  };
  //---Utilisation de la fonction getData pour récupérer les données de l'Api
  getData("http://localhost:3000/api/cameras", (cameras) => {
    this.initIndex(cameras);
  });
}
//---window.onload: attends la fin du chargement de la page avant d'initialiser les éléments.
window.onload = () => {
  const main = document.querySelector("main");
  new initGeneral(main);
  const conteneur = document.querySelector("#conteneur");
  new Index(conteneur);
};
