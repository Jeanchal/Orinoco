//---fonction Commande: affiche les données de la page.
function Commande(main) {
  const conteneurCommande = document.createElement("div");
  this.messageCommande = document.createElement("p");
  const idCommande = document.createElement("p");
  const totalCommande = document.createElement("p");
  const conteneur = main.querySelector("#conteneur");
  this.conteneur = conteneur;
  main.appendChild(conteneurCommande);
  conteneurCommande.appendChild(this.messageCommande);
  conteneurCommande.appendChild(idCommande);
  conteneurCommande.appendChild(totalCommande);
  conteneurCommande.id = "conteneur-commande";
  this.messageCommande.classList.add("message", "message-conteneur");
  this.messageCommande.textContent =
    "Vous n'avez pas encore passé commande chez nous :)";
  //---fonction validCmd: affiche un message de confirmation de commande, le numero et le total de la commande.
  this.validCmd = () => {
    if (!localStorage.getItem("recapCmd")) {
      throw new Error("empty commande !");
    }
    const recapCmd = JSON.parse(localStorage.getItem("recapCmd"));
    UpdateNbPanier(0);
    this.messageCommande.textContent =
      "Bonjour " +
      recapCmd.contact.firstName +
      " " +
      recapCmd.contact.lastName +
      ", merci pour votre commande";
    totalCommande.textContent =
      "Total de la commande : " + calculTotalCmd(recapCmd.products) + " €";
    idCommande.textContent = "N° de commande : " + recapCmd.orderId;
  };
  try {
    this.validCmd();
  } catch (error) {
    this.messageCommande.textContent =
      "Vous n'avez pas encore passé commande chez nous :)";
  } finally {
    localStorage.clear();
  }
}
//---window.onload: attends la fin du chargement de la page avant d'initialiser les éléments.
window.onload = () => {
  const main = document.querySelector("main");
  new initGeneral(main);
  new Commande(main);
};

function calculTotalCmd(products) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].price / 100;
  }
  return total;
}
