function Commande(main) {
  const conteneurCommande = document.createElement("div");
  const messageCommande = document.createElement("p");
  const idCommande = document.createElement("p");
  const totalCommande = document.createElement("p");
  const identifiantCmd = localStorage.getItem("nCommande");
  let CmdValid = localStorage.getItem("CommandeValid");
  //-----------------------------
  conteneurCommande.id = "conteneur-commande";
  messageCommande.classList.add("message", "message-conteneur");
  //-------------------------
  main.appendChild(conteneurCommande);
  conteneurCommande.appendChild(messageCommande);
  conteneurCommande.appendChild(idCommande);
  conteneurCommande.appendChild(totalCommande);
  //----------------------------------
  messageCommande.textContent =
    "Vous n'avez pas encore passé commande chez nous :)";
  //------------------------------------------
  function validerFormulaire() {
    const pseudo = localStorage.getItem("pseudo");
    const CmdValid = 1;
    const id = identifiantCmd;
    const tt = TotalCmd;
    conteneur.innerHTML = "";
    nbpanier.innerText = "";
    messageCommande.classList.remove("invisible");
    messageCommande.textContent =
      "Bonjour " + pseudo + ", merci pour votre commande";
    idCommande.textContent = "N° de commande: " + identifiantCmd;
    totalCommande.textContent = "Total de la commande: " + TotalCmd + " €";
    localStorage.clear();
    localStorage.setItem("pseudo", pseudo);
    localStorage.setItem("CommandeValid", CmdValid);
    localStorage.setItem("nCommande", id);
    localStorage.setItem("TotalCommande", tt);
  }
  function formulaire() {
    const form = document.createElement("form");
    const h3 = document.createElement("h3");
    const pNom = document.createElement("p");
    const prenom = document.createElement("input");
    const nom = document.createElement("input");
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
    form.appendChild(pEmail);
    form.appendChild(pMdp);
    form.appendChild(btnValider);
    pNom.appendChild(prenom);
    pNom.appendChild(nom);
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
    // conteneur.innerHTML =
    //   '<form> <h3>Nouveau client ?</h3> <p class="nom"> <input type="text" name="prenom" id="prenom" placeholder="Prénom" minlength="2" maxlength="16" autofocus required/> <input type="text" name="nom" id="nom" placeholder="Nom" minlength="2" maxlength="18" required/> </p><p> <input type="email" name="email" id="email" placeholder="Email" minlength="10" maxlength="25" required/> </p><p> <input type="password" name="Mot de passe" id="motdepasse" minlength="8" maxlength="15" placeholder="Mot de passe" required/> <span class="afficherMDP"><input type="checkbox" title="afficher mot de passe" onclick="Afficher()"></span></p><input class="btnEnvoyer" type="submit" value="Valider"/> </form>';
    //------------------------------------------
    const envoyer = document.querySelector("form");
    const inputname = document.getElementById("prenom");
    let pseudo = "";
    messageCommande.classList.add("invisible");
    //----------------------------------------
    inputname.addEventListener("input", (e) => {
      pseudo = e.target.value;
      localStorage.setItem("pseudo", pseudo);
    });
    //------------------------------
    envoyer.addEventListener("submit", () => {
      validerFormulaire();
    });
  }
  if (TotalCmd > 0) {
    if (CmdValid > 0) {
      conteneur.innerHTML = "";
      validerFormulaire();
    } else {
      formulaire();
    }
  }
}

window.onload = () => {
  initGeneral();
  background();
  NbPanier(totalBtnNb);
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
