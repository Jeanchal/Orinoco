//---initialisation des paramétres communs à chaque page------------
function initGeneral(main) {
  let nbpanier = document.querySelector("header span");
  let totalBtnNb = Number(localStorage.getItem("TotalPanier"));
  const conteneur = document.createElement("div");
  main.appendChild(conteneur);
  conteneur.id = "conteneur";
  document.addEventListener("updateCart", (e) => {
    const nbArticle = e.detail.nbArticle;
    if (nbArticle > 0) {
      nbpanier.innerText = nbArticle;
    } else {
      nbpanier.innerText = "";
    }
  });
  function background() {
    const tabImages = ["b0", "b1", "b2", "b3", "b4"];
    const randomimages =
      tabImages[Math.floor(Math.random() * tabImages.length)];
    document.body.classList.add(randomimages);
  }
  dispatchUpdateNbPanier(totalBtnNb);
  background();
}

//---mise à jour du nombre d'articles dans le panier (dans la barre de navigation)------------
function dispatchUpdateNbPanier(nbArticle) {
  let updatePanier = new CustomEvent("updateCart", {
    detail: {
      nbArticle: nbArticle,
    },
  });
  document.dispatchEvent(updatePanier);
}
function getData(url, repOk, params = {}) {
  // function error(reponse) {
  //   console.log(reponse);
  // }
  fetch(url, params)
    .then(async (reponse) => {
      // console.log(reponse);
      // console.log(reponse.status);
      if (reponse.ok) {
        const data = await reponse.json();
        repOk(data);
      } else {
        console.log("erreur de connexion !");
        console.log("Status: " + reponse.status, reponse.statusText);
      }
    })
    .catch((erreur) => {
      console.log("impossible de se connecter au serveur, connexion refusée !");
      console.log(erreur);
    });
}
function getQueryParams(param) {
  const SearchParams = new URLSearchParams(window.location.search);
  return SearchParams.get(param);
}
