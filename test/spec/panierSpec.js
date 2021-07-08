describe("Tests", function () {
  it("ajouterProduit", function () {
    const main = document.createElement("div");
    const conteneur = document.createElement("div");
    conteneur.id = "conteneur";
    main.appendChild(conteneur);
    const nbpanier = document.createElement("div");
    let produit = new Produit(main, nbpanier);
    let i = 1;
    produit.ajouterProduit();
    //-----------------------
    expect(nbpanier.innerText).not.toBeNull();
    //-----------------------
    const TtPanier = localStorage.getItem("TotalPanier");
    expect(TtPanier).not.toBeNull();
    //-----------------------
    const NbProduit = Number(localStorage.getItem(cameras[i].name));
    expect(NbProduit).not.toBeNull();
    //-----------------------
    const totalProduit = Number(localStorage.getItem(cameras[i]._id));
    expect(totalProduit).not.toBeNull();
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
    const nbpanier = document.createElement("div");
    let panier = new Panier(main, nbpanier);
    nbpanier.innerHTML = 1;
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
    expect(nbpanier.innerHTML).toEqual("");
    //----------test: suppression du contenu html de nbpanier ?
  });
  it("commanderPanier", function () {
    const main = document.createElement("div");
    const conteneur = document.createElement("div");
    main.appendChild(conteneur);
    //-------------------------------------------
    conteneur.innerHTML = "<div></div>";
    conteneur.id = "conteneur";
    //-------------------------------------------
    const nbpanier = document.createElement("div");
    let panier = new Panier(main, nbpanier);
    panier.commanderPanier();
    //----------test: Netoyage du local Storage ?
    const TtCmd = localStorage.getItem("TotalCommande");
    const nCommande = localStorage.getItem("nCommande");
    expect(TtCmd).not.toBeNull();
    //----------test: l'élément TtCmd existe ?
    expect(nCommande).not.toBeNull();
    //----------test: l'élément nCommande existe ?
  });
  it("validerFormulaire", function () {
    const main = document.createElement("div");
    const conteneur = document.createElement("div");
    main.appendChild(conteneur);
    let commande = Commande(main);
    commande.validerFormulaire();
  });
});
