function Commande(main) {
  const conteneurCommande = document.createElement("div");
  this.messageCommande = document.createElement("p");
  const idCommande = document.createElement("p");
  const totalCommande = document.createElement("p");
  let CmdValid = localStorage.getItem("CommandeValid");
  const conteneur = main.querySelector("#conteneur");
  this.conteneur = conteneur;

  //-----------------------------
  conteneurCommande.id = "conteneur-commande";
  this.messageCommande.classList.add("message", "message-conteneur");
  //-------------------------
  main.appendChild(conteneurCommande);
  conteneurCommande.appendChild(this.messageCommande);
  conteneurCommande.appendChild(idCommande);
  conteneurCommande.appendChild(totalCommande);
  //----------------------------------
  this.messageCommande.textContent =
    "Vous n'avez pas encore passé commande chez nous :)";
  //------------------------------------------
  this.validerFormulaire = function () {
    const identifiantCmd = localStorage.getItem("nCommande");
    const pseudo = localStorage.getItem("pseudo");
    const CmdValid = 1;
    const tt = localStorage.getItem("TotalCommande");
    conteneur.innerHTML = "";
    dispatchUpdateNbPanier(0);
    this.messageCommande.classList.remove("invisible");
    this.messageCommande.textContent =
      "Bonjour " + pseudo + ", merci pour votre commande";
    idCommande.textContent = "N° de commande: " + identifiantCmd;
    totalCommande.textContent = "Total de la commande: " + tt + " €";
    localStorage.clear();
    localStorage.setItem("pseudo", pseudo);
    localStorage.setItem("CommandeValid", CmdValid);
    localStorage.setItem("nCommande", identifiantCmd);
    localStorage.setItem("TotalCommande", tt);
  };
  const formulaire = () => {
    const form = document.createElement("form");
    const h3 = document.createElement("h3");
    const pNom = document.createElement("p");
    const prenom = document.createElement("input");
    const nom = document.createElement("input");
    const pAdresse = document.createElement("p");
    const adresse = document.createElement("input");
    const pVille = document.createElement("p");
    const ville = document.createElement("input");
    const pEmail = document.createElement("p");
    const email = document.createElement("input");
    const pMdp = document.createElement("p");
    const mdp = document.createElement("input");
    const spanCheckBox = document.createElement("span");
    const CheckBox = document.createElement("input");
    const btnValider = document.createElement("input");
    //-------------------------
    conteneur.appendChild(form);
    form.appendChild(h3);
    form.appendChild(pNom);
    form.appendChild(pAdresse);
    form.appendChild(pVille);
    form.appendChild(pEmail);
    form.appendChild(pMdp);
    form.appendChild(btnValider);
    pNom.appendChild(prenom);
    pNom.appendChild(nom);
    pAdresse.appendChild(adresse);
    pVille.appendChild(ville);
    pEmail.appendChild(email);
    pMdp.appendChild(mdp);
    pMdp.appendChild(spanCheckBox);
    spanCheckBox.appendChild(CheckBox);
    //---------------------
    pNom.classList.add("nom");
    spanCheckBox.classList.add("afficherMDP");
    //----------------------
    prenom.type = "text";
    prenom.id = "prenom";
    prenom.placeholder = "Prénom";
    prenom.minLength = "2";
    prenom.maxLength = "16";
    prenom.autofocus = true;
    prenom.required = true;
    //---------------------
    nom.type = "text";
    nom.placeholder = "Nom";
    nom.minLength = "2";
    nom.maxLength = "18";
    nom.required = true;
    //--------------------------
    adresse.type = "text";
    adresse.placeholder = "Adresse";
    adresse.minLength = "5";
    adresse.maxLength = "25";
    adresse.required = true;
    //---------------------
    ville.type = "text";
    ville.placeholder = "Ville";
    ville.minLength = "5";
    ville.maxLength = "25";
    ville.required = true;
    //---------------------
    email.type = "email";
    email.placeholder = "Email";
    email.minLength = "10";
    email.maxLength = "25";
    email.required = true;
    //--------------------------
    mdp.type = "password";
    mdp.id = "motdepasse";
    mdp.placeholder = "Mot de passe";
    mdp.minLength = "8";
    mdp.maxLength = "15";
    mdp.required = true;
    //--------------------------
    CheckBox.type = "checkbox";
    CheckBox.title = "afficher mot de passe";
    CheckBox.setAttribute("onclick", "Afficher()");
    //--------------------------
    btnValider.type = "submit";
    btnValider.id = "btnValider";
    btnValider.value = "Valider";
    //--------------------------
    h3.innerText = "Nouveau client ?";
    //-------------------------------
    let pseudo = "";
    this.messageCommande.classList.add("invisible");
    //----------------------------------------
    prenom.addEventListener("input", (e) => {
      pseudo = e.target.value;
      localStorage.setItem("pseudo", pseudo);
    });
    //------------------------------
    form.addEventListener("submit", (e) => {
      e.preventDefault;
      this.validerFormulaire();
    });
  };
  if (localStorage.getItem("TotalPanier") > 0) {
    if (CmdValid > 0) {
      conteneur.innerHTML = "";
      this.validerFormulaire();
    } else {
      formulaire();
    }
  }
}

window.onload = () => {
  const main = document.querySelector("main");
  new initGeneral(main);
  new Commande(main);
};

function Afficher() {
  let input = document.getElementById("motdepasse");
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

// //----Date-du-jour------
// let now = new Date();
// let annee   = now.getFullYear();
// let mois    = now.getMonth() + 1;
// let jour    = now.getDate();
// let heure   = now.getHours();
// let minute  = now.getMinutes();
// let seconde = now.getSeconds();
// console.log(now);

// function faireunetache(tache) {
//   console.log("je fais" + tache);
// }

// faireunetache(" le ménage");

// function calc(x, y) {
//   return x + y;
// }

// let total = localStorage.getItem("total");

// function addition(x) {
//   total += x;
//   localStorage.setItem("total", total);
//   return total;
// }
