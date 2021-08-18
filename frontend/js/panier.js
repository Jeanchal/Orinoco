//---fonction Panier: englobe toutes les fonctions de la page.
function Panier(main) {
  const conteneur = main.querySelector("#conteneur");
  const conteneurPanier = document.createElement("div");
  this.conteneur = conteneur;
  this.conteneurPanier = conteneurPanier;
  let cart = [];
  cartString = localStorage.getItem("cart");
  if (localStorage.getItem("TotalPanier") > 0) {
    cart = JSON.parse(cartString);
  }

  //---fonction initPanier: englobe toutes les fonctions qui permettent d'afficher et de manipuler le panier.
  this.initPanier = (cameras) => {
    const totalPanier = document.createElement("p");
    const messagePanier = document.createElement("p");
    const btnCommander = document.createElement("button");
    const btnViderPanier = document.createElement("button");
    let tableauPrix = [0];
    conteneurPanier.id = "conteneur-panier";
    messagePanier.classList.add("message");
    main.appendChild(conteneurPanier);
    conteneurPanier.appendChild(messagePanier);
    messagePanier.textContent = "Votre panier est vide...";
    btnCommander.textContent = "Commander";
    btnViderPanier.textContent = "Vider le panier";

    //---fonction activPanier: ajoute les boutons "Commander", "Vider panier", et le total du Panier
    this.activPanier = () => {
      conteneurPanier.removeChild(messagePanier);
      conteneurPanier.appendChild(totalPanier);
      conteneurPanier.appendChild(btnCommander);
      conteneurPanier.appendChild(btnViderPanier);
    };
    if (localStorage.getItem("TotalPanier") > 0) {
      this.activPanier();
    }

    //---fonction panierConstructor: génére les éléments ajoutés au panier.
    this.panierConstructor = (cart, cameras, a, i) => {
      localStorage.setItem("form", 0);
      id = cart[a].id;
      if (id === cameras[i]._id) {
        const box = document.createElement("div");
        const lien = document.createElement("a");
        const figure = document.createElement("figure");
        const image = document.createElement("img");
        const boxTxt = document.createElement("div");
        const innerbox = document.createElement("div");
        const nom = document.createElement("h3");
        const prix = document.createElement("p");
        const panierNb = document.createElement("div");
        const numPanierNb = document.createElement("p");
        lien.href = "produit.html?id=" + id;
        image.src = cameras[i].imageUrl;
        nom.textContent = cameras[i].name + "/" + cart[a].version;
        prix.textContent = cart[a].nb * (cameras[i].price / 100);
        tableauPrix.push(Number(prix.textContent));
        numPanierNb.textContent = cart[a].nb;
        box.classList.add("box", "box-panier");
        boxTxt.classList.add("box-txt");
        panierNb.classList.add("nbpanier");
        conteneur.appendChild(box);
        box.appendChild(lien);
        box.appendChild(boxTxt);
        lien.appendChild(figure);
        figure.appendChild(image);
        boxTxt.appendChild(innerbox);
        innerbox.appendChild(nom);
        innerbox.appendChild(prix);
        innerbox.appendChild(panierNb);
        panierNb.appendChild(numPanierNb);
      }
    };
    for (let i = 0; i < cart.length; i++) {
      let indexCam = cameras.findIndex((x) => x._id === cart[i].id);
      let totalBtnNb = Number(localStorage.getItem("TotalPanier"));
      if (localStorage.getItem("form") < 1) {
        if (totalBtnNb > 0) {
          this.panierConstructor(cart, cameras, i, indexCam);
          calculPanier(tableauPrix, totalPanier);
        }
      } else {
        this.formulaire();
      }
    }

    //---fonction removePanier: supprime tout les éléments du panier sur la page et dans le localStorage
    this.removePanier = () => {
      conteneur.innerHTML = "";
      conteneurPanier.innerHTML = "";
      conteneurPanier.appendChild(messagePanier);
      localStorage.clear();
      UpdateNbPanier(0);
    };

    //---événement sur bouton "Commander": appelle les fonctions "commanderPanier", "formulaire", et enregistre l'activation du formualire dans le localStorage.
    btnCommander.addEventListener("click", () => {
      this.formulaire();
      localStorage.setItem("form", 1);
    });

    //---événement sur bouton "Vider Panier": active la fonction removePanier.
    btnViderPanier.addEventListener("click", () => {
      let reponse = window.confirm("Souhaitez-vous vraiment vider le panier?");
      if (reponse == true) {
        this.removePanier();
      }
    });
  };

  //---fonction formulaire: génére le formulaire de contact.
  this.formulaire = function () {
    const form = document.createElement("form");

    //---fonction creatorForm: pour générer automatiquement une liste d'éléments
    function creatorForm(element, text) {
      form.appendChild(element);
      element.id = text;
      element.name = text;
      element.required = true;
      element.type = "text";
      element.minLength = "3";
      element.maxLength = "25";
    }

    const h3 = document.createElement("h3");
    const prenom = document.createElement("input");
    const nom = document.createElement("input");
    const adresse = document.createElement("input");
    const ville = document.createElement("input");
    const email = document.createElement("input");
    const btnValider = document.createElement("input");
    const retour = document.createElement("div");
    const spanRetour = document.createElement("span");
    conteneur.innerHTML = "";
    conteneurPanier.innerHTML = "";
    conteneur.appendChild(form);
    form.appendChild(h3);
    creatorForm(prenom, "firstName");
    creatorForm(nom, "lastName");
    creatorForm(adresse, "address");
    creatorForm(ville, "city");
    creatorForm(email, "email");
    form.appendChild(btnValider);
    form.appendChild(retour);
    retour.appendChild(spanRetour);
    retour.classList.add("retour", "retourForm");
    spanRetour.innerHTML = '<i class="fas fa-arrow-left"></i> retour';
    prenom.placeholder = "Prénom";
    prenom.autofocus = true;
    nom.placeholder = "Nom";
    adresse.placeholder = "Adresse";
    ville.placeholder = "Ville";
    email.type = "email";
    email.placeholder = "Email";
    btnValider.type = "submit";
    btnValider.id = "btnValider";
    btnValider.value = "Valider";
    h3.innerText = "Nouveau client ?";

    //---événement sur bouton "retour": pour annuler le formulaire et revenir sur le panier.
    retour.addEventListener("click", () => {
      localStorage.setItem("form", 0);
      window.location = "panier.html";
    });

    //---événement "submit" du formulaire: pour venvoyer le formulaire si les données sont conformes.
    form.addEventListener("submit", (e) => {
      const input = document.getElementsByTagName("input");
      let formulaire = 0;
      for (let i = 0; i < input.length - 1; i++) {
        if (input[i].value.length > 0) {
          formulaire++;
        }
      }
      if (formulaire === input.length - 1) {
        this.validerFormulaire(form);
      } else {
        alert(
          "ERREUR... merci de compléter tout les champs du formulaire s'il vous plaît !"
        );
        e.preventDefault;
      }
    });
  };

  //---fonction validerFormulaire: vérifie les données du formulaire et les envoie au serveur si conforme.
  this.validerFormulaire = function (form) {
    conteneur.innerHTML = "";
    let cart = [];
    cartString = localStorage.getItem("cart");
    cart = JSON.parse(cartString);
    let tableauID = [];
    for (let item of cart) {
      if (!tableauID.includes(item.id)) {
        tableauID.push(item.id);
      }
    }
    const order = {
      contact: {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        address: form.address.value,
        city: form.city.value,
        email: form.email.value,
      },
      products: tableauID,
    };

    //---Utilisation de la fonction getData pour envoyer des données et enregistrer la réponse du serveur.
    getData(
      "http://localhost:3000/api/cameras/order",
      (repServer) => {
        localStorage.setItem("recapCmd", JSON.stringify(repServer));
        console.log(repServer);
        redirect("commande.html");
      },
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      }
    );
  };

  //---Utilisation de la fonction getData pour récupérer les données de l'Api
  getData("http://localhost:3000/api/cameras", (cameras) => {
    this.initPanier(cameras);
  });
  return this;
}

//---window.onload: attends la fin du chargement de la page avant d'initialiser les éléments.
window.onload = () => {
  const main = document.querySelector("main");
  new initGeneral(main);
  new Panier(main);
};

//---fonction calculPanier: calcul du prix total du panier.
function calculPanier(tableau, element) {
  const reducer = (acc, cur) => acc + cur;
  Total = tableau.reduce(reducer);
  element.textContent = "Total: " + Total + " €";
}
