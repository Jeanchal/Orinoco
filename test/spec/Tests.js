describe("Tests", function () {
  it("initGeneral", function () {
    const menu = document.createElement("main");
    const body = document.querySelector("body");
    const header = document.createElement("header");
    const span = document.createElement("span");
    body.appendChild(header);
    body.appendChild(menu);
    header.appendChild(span);
    const main = document.querySelector("main");
    new initGeneral(main);
    //----------------------
    header.style.display = "none";
    main.style.display = "none";
    document.body.style.backgroundImage = "";
  });
  it("dispatchUpdateNbPanier", function () {
    dispatchUpdateNbPanier();
  });
  it("background", function () {
    background();
    //------------------
    document.body.style.backgroundImage = "";
  });
  it("iniIndex", function () {
    const conteneur = document.createElement("div");
    new initIndex(conteneur);
  });
  it("Produit", function () {
    const menu = document.createElement("main");
    const body = document.querySelector("body");
    body.appendChild(menu);
    const main = document.querySelector("main");
    const conteneur = document.createElement("div");
    conteneur.id = "conteneur";
    main.appendChild(conteneur);
    new Produit(main);
    //----------------------
    main.style.display = "none";
  });
  it("ajouterProduit", function () {
    const main = document.createElement("div");
    const conteneur = document.createElement("div");
    conteneur.id = "conteneur";
    main.appendChild(conteneur);
    localStorage.setItem("TotalPanier", 1);
    let produit = new Produit(main);
    let i = 1;
    produit.ajouterProduit();
    //-----------------------
    const TtPanier = localStorage.getItem("TotalPanier");
    expect(TtPanier).toEqual("2");
    //-----------------------
    const NbProduit = Number(localStorage.getItem(cameras[i].name));
    expect(NbProduit).not.toBeNull();
    //-----------------------
    const totalProduit = Number(localStorage.getItem(cameras[i]._id));
    expect(totalProduit).not.toBeNull();
  });
  it("Panier", function () {
    const menu = document.createElement("main");
    const body = document.querySelector("body");
    body.appendChild(menu);
    const main = document.querySelector("main");
    const conteneur = document.createElement("div");
    conteneur.id = "conteneur";
    main.appendChild(conteneur);
    new Panier(main);
    //--------------------
    main.style.display = "none";
  });
  it("removePanier", function () {
    const main = document.createElement("div");
    const conteneur = document.createElement("div");
    main.appendChild(conteneur);
    //----------------------------------
    localStorage.setItem("Bonjour", 1);
    //-----------------------------------
    conteneur.innerHTML = "<div></div>";
    conteneur.id = "conteneur";
    //-----------------------------------
    let panier = new Panier(main);
    panier.removePanier();
    //-----------------------
    const bonjour = localStorage.getItem("Bonjour");
    expect(bonjour).toBeNull();
    //----------test: Netoyage du local Storage ?
    expect(conteneur.innerHTML).toEqual("");
    //----------test: suppression du contenu html de conteneur ?
    const conteneurPanier = panier.conteneurPanier;
    const message = conteneurPanier.querySelector("p");
    expect(message).not.toBeNull();
    //----------test: l'élément message existe ?
    expect(message.textContent).toEqual("Votre panier est vide...");
    //----------test: le texte de message est conforme ?
  });
  it("commanderPanier", function () {
    const main = document.createElement("div");
    const conteneur = document.createElement("div");
    main.appendChild(conteneur);
    //-------------------------------------------
    conteneur.innerHTML = "<div></div>";
    conteneur.id = "conteneur";
    //-------------------------------------------
    let panier = new Panier(main);
    panier.commanderPanier();
    //----------test: Netoyage du local Storage ?
    const TtCmd = localStorage.getItem("TotalCommande");
    const nCommande = localStorage.getItem("nCommande");
    expect(TtCmd).not.toBeNull();
    //----------test: l'élément TtCmd existe ?
    expect(nCommande).not.toBeNull();
    //----------test: l'élément nCommande existe ?
  });
  it("Commande", function () {
    const menu = document.createElement("main");
    const body = document.querySelector("body");
    body.appendChild(menu);
    const main = document.querySelector("main");
    new Commande(main);
    //----------------------
    main.style.display = "none";
  });
  it("validerFormulaire", function () {
    localStorage.setItem("nCommande", 1);
    localStorage.setItem("TotalCommande", 1);
    localStorage.setItem("pseudo", "Jean-Eudes");
    const main = document.createElement("div");
    const conteneur = document.createElement("div");
    conteneur.id = "conteneur";
    main.appendChild(conteneur);
    let commande = new Commande(main);
    commande.validerFormulaire();
    const msgCmd = commande.messageCommande;
    expect(commande.conteneur.innerHTML).toEqual("");
    expect(msgCmd.classList.contains("invisible")).toBeFalse();
    expect(msgCmd.innerText).toEqual(
      "Bonjour Jean-Eudes, merci pour votre commande"
    );
    expect(localStorage.getItem("CommandeValid")).toEqual("1");
  });
  it("AfficherMDP", function () {
    const body = document.querySelector("body");
    const mdp = document.createElement("input");
    mdp.id = "motdepasse";
    mdp.style.display = "none";
    body.appendChild(mdp);
    Afficher(mdp);
  });
});
