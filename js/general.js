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
    const tabImages = [
      "url(../images/font.jpg)",
      "url(../images/font1.jpg)",
      "url(../images/font2.jpg)",
      "url(../images/font3.jpg)",
      "url(../images/font4.jpg)",
    ];
    const randomimages =
      tabImages[Math.floor(Math.random() * tabImages.length)];
    document.body.style.backgroundImage = randomimages;
    document.body.classList.add("background");
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
