function Commande(main) {
  const conteneurCommande = document.createElement("div");
  this.messageCommande = document.createElement("p");
  const idCommande = document.createElement("p");
  const totalCommande = document.createElement("p");
  const conteneur = main.querySelector("#conteneur");
  const tt = localStorage.getItem("TotalCommande");
  const pseudo = localStorage.getItem("Pseudo");
  this.conteneur = conteneur;
  //-----------------------------
  main.appendChild(conteneurCommande);
  conteneurCommande.appendChild(this.messageCommande);
  conteneurCommande.appendChild(idCommande);
  conteneurCommande.appendChild(totalCommande);
  //----------------------------------
  conteneurCommande.id = "conteneur-commande";
  this.messageCommande.classList.add("message", "message-conteneur");
  this.messageCommande.textContent =
    "Vous n'avez pas encore passé commande chez nous :)";
  //------------------------------------------
  this.validCmd = (pseudo) => {
    const idCmd = localStorage.getItem("idCmd");
    dispatchUpdateNbPanier(0);
    this.messageCommande.textContent =
      "Bonjour " + pseudo + ", merci pour votre commande";
    totalCommande.textContent = "Total de la commande : " + tt + " €";
    idCommande.textContent = "N° de commande : " + idCmd;
    localStorage.clear();
  };
  if (!pseudo == "") {
    this.validCmd(pseudo);
  }
}

window.onload = () => {
  const main = document.querySelector("main");
  new initGeneral(main);
  new Commande(main);
};
