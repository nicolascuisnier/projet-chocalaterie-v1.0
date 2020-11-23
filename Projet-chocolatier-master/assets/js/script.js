let tableCart = document.getElementById("tableCart");
function addToCart(produit, nom, prixUnitaire, quantité) {
    let newTr = document.createElement("tr");
    newTr.innerHTML = `<td><img class="imagePanier" src="${produit}"</td><td>${nom}</td><td class="text-center"> ${prixUnitaire}</td><td class="text-center">${quantité}</td>`;
    tableCart.appendChild(newTr);
}