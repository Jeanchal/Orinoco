//---fonction initGeneral: initialise les éléments communs à chaque page.
function initGeneral(main) {
  let nbpanier = document.querySelector("header span");
  let totalBtnNb = Number(localStorage.getItem("TotalPanier"));
  const conteneur = document.createElement("div");
  main.appendChild(conteneur);
  conteneur.id = "conteneur";

  //---événement "updateCart": affiche le nombre d'articles dans la barre de navigation, si ce nombre est supérieur à 0.
  document.addEventListener("updateCart", (e) => {
    const nbArticle = e.detail.nbArticle;
    if (nbArticle > 0) {
      nbpanier.innerText = nbArticle;
    } else {
      nbpanier.innerText = "";
    }
  });
  UpdateNbPanier(totalBtnNb);
}

//---fonction UpdateNbPanier: mets à jour le nombre d'articles dans le panier (dans la barre de navigation).
function UpdateNbPanier(nbArticle) {
  let updatePanier = new CustomEvent("updateCart", {
    detail: {
      nbArticle: nbArticle,
    },
  });
  document.dispatchEvent(updatePanier);
}

//---fonction getData: permet de faire un fetch pour récupérer, envoyer, mettre à jour ou supprimer de la data.
function getData(url, repOk, params = {}) {
  "impossible de se connecter au serveur...";
  fetch(url, params)
    .then(async (reponse) => {
      if (reponse.ok) {
        const data = await reponse.json();
        repOk(data);
      } else {
        const statut = "Status: " + reponse.status + " " + reponse.statusText;
        const message = "impossible de se connecter au serveur...";
        msgError(message, statut);
      }
    })
    .catch((erreur) => {
      const message =
        "impossible de se connecter au serveur, connexion refusée...";
      msgError(message, erreur);
    });
}

//---fonction getQueryParams: permet de récupérer l'id dans l'Url de la page.
function getQueryParams(param) {
  const SearchParams = new URLSearchParams(window.location.search);
  return SearchParams.get(param);
}

//---fonction redirect: permet de rediriger vers une autre page
function redirect(cible) {
  window.location = cible;
}

//---fonction msgError: génére un message d'erreur pour les erreurs de connexion.
function msgError(message, indice) {
  const main = document.querySelector("main");
  const div = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  main.appendChild(div);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.classList.add("error");
  p1.textContent = "Une Erreur est survenue !";
  p2.textContent = message;
  p3.textContent = indice;
}
