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
  //--------------------------------
  this.initPanier = (cameras) => {
    const totalPanier = document.createElement("p");
    const messagePanier = document.createElement("p");
    const btnCommander = document.createElement("button");
    const btnViderPanier = document.createElement("button");
    let tableauPrix = [0];
    //---------------------------
    conteneurPanier.id = "conteneur-panier";
    messagePanier.classList.add("message");
    //-------------------------
    main.appendChild(conteneurPanier);
    conteneurPanier.appendChild(messagePanier);
    this.activPanier = () => {
      conteneurPanier.removeChild(messagePanier);
      conteneurPanier.appendChild(totalPanier);
      conteneurPanier.appendChild(btnCommander);
      conteneurPanier.appendChild(btnViderPanier);
    };
    if (localStorage.getItem("TotalPanier") > 0) {
      this.activPanier();
    }
    //----------------------------------
    messagePanier.textContent = "Votre panier est vide...";
    btnCommander.textContent = "Commander";
    btnViderPanier.textContent = "Vider le panier";
    //----------------------------------------------------
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
        //----------------------------
        lien.href = "produit.html?id=" + id;
        image.src = cameras[i].imageUrl;
        nom.textContent = cameras[i].name + "/" + cart[a].version;
        prix.textContent = cart[a].nb * (cameras[i].price / 100);
        tableauPrix.push(Number(prix.textContent));
        numPanierNb.textContent = cart[a].nb;
        //-----------------------------------------
        box.classList.add("box", "box-panier");
        boxTxt.classList.add("box-txt");
        panierNb.classList.add("nbpanier");
        //------------------------
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
        }
      } else {
        this.formulaire();
      }
    }
    //----Calcul total panier----------------
    const reducer = (acc, cur) => acc + cur;
    let Total = tableauPrix.reduce(reducer);
    totalPanier.textContent = "Total: " + Total + " €";
    //----------------------------
    this.removePanier = () => {
      conteneur.innerHTML = "";
      conteneurPanier.innerHTML = "";
      conteneurPanier.appendChild(messagePanier);
      localStorage.clear();
      dispatchUpdateNbPanier(0);
    };
    this.commanderPanier = (Total) => {
      localStorage.setItem("TotalCommande", Total);
      conteneur.innerHTML = "";
      conteneurPanier.innerHTML = "";
    };
    btnCommander.addEventListener("click", () => {
      this.commanderPanier(Total);
      this.formulaire();
      localStorage.setItem("form", 1);
    });
    btnViderPanier.addEventListener("click", () => {
      let reponse = window.confirm("Souhaitez-vous vraiment vider le panier?");
      if (reponse == true) {
        this.removePanier();
      }
    });
  };
  this.formulaire = function () {
    conteneurPanier.innerHTML = "";
    //---------------------------
    const form = document.createElement("form");
    const h3 = document.createElement("h3");
    const prenom = document.createElement("input");
    const nom = document.createElement("input");
    const adresse = document.createElement("input");
    const ville = document.createElement("input");
    const email = document.createElement("input");
    const btnValider = document.createElement("input");
    const retour = document.createElement("div");
    const spanRetour = document.createElement("span");
    //-------------------------
    conteneur.appendChild(form);
    form.appendChild(h3);
    form.appendChild(prenom);
    form.appendChild(nom);
    form.appendChild(adresse);
    form.appendChild(ville);
    form.appendChild(email);
    form.appendChild(btnValider);
    form.appendChild(retour);
    retour.appendChild(spanRetour);
    //----------------------
    retour.classList.add("retour", "retourForm");
    spanRetour.innerHTML = '<i class="fas fa-arrow-left"></i> retour';
    // ----------------------
    prenom.required = true;
    nom.required = true;
    adresse.required = true;
    ville.required = true;
    email.required = true;
    //--------------------------
    prenom.id = "firstName";
    nom.id = "lastName";
    adresse.id = "address";
    ville.id = "city";
    email.id = "email";
    //-----------------
    prenom.name = "firstName";
    nom.name = "lastName";
    adresse.name = "address";
    ville.name = "city";
    email.name = "email";
    //----------------------
    prenom.type = "text";
    prenom.placeholder = "Prénom";
    prenom.minLength = "2";
    prenom.maxLength = "16";
    prenom.autofocus = true;
    //---------------------
    nom.type = "text";
    nom.placeholder = "Nom";
    nom.minLength = "2";
    nom.maxLength = "18";
    //--------------------------
    adresse.type = "text";
    adresse.placeholder = "Adresse";
    adresse.minLength = "5";
    adresse.maxLength = "25";
    //---------------------
    ville.type = "text";
    ville.placeholder = "Ville";
    ville.minLength = "5";
    ville.maxLength = "25";
    //---------------------
    email.type = "email";
    email.placeholder = "Email";
    email.minLength = "10";
    email.maxLength = "25";
    //--------------------------
    btnValider.type = "submit";
    btnValider.id = "btnValider";
    btnValider.value = "Valider";
    //--------------------------
    h3.innerText = "Nouveau client ?";
    //-------------------------------
    // this.messageCommande.classList.add("invisible");
    retour.addEventListener("click", () => {
      localStorage.setItem("form", 0);
      window.location = "panier.html";
    });
    //----------------------------------------
    form.addEventListener("submit", (e) => {
      const input = document.getElementsByTagName("input");
      let formulaire = 0;
      for (let i = 0; i < input.length - 1; i++) {
        if (input[i].value.length > 0) {
          formulaire++;
        }
      }
      if (formulaire === input.length - 1) {
        localStorage.setItem("Pseudo", form.firstName.value);
        // this.validerFormulaire(form, cart);
        this.validerFormulaire(form);
        if (localStorage.getItem("TotalCommande") > 0) {
          setTimeout(function () {
            window.location = "commande.html";
          }, 400);
        }
      } else {
        alert(
          "ERREUR... merci de compléter tout les champs du formulaire s'il vous plaît !"
        );
        e.preventDefault;
      }
    });
  };
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
    getData(
      "http://localhost:3000/api/cameras/order",
      (repServer) => {
        localStorage.setItem("idCmd", repServer.orderId);
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

  getData("http://localhost:3000/api/cameras", (cameras) => {
    this.initPanier(cameras);
  });
  return this;
}

window.onload = () => {
  const main = document.querySelector("main");
  new initGeneral(main);
  new Panier(main);
};
