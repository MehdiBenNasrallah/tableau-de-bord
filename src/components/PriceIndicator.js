import React from "react";

function PriceIndicator({ data }) {
  // Calcul du nombre total d'éléments
  const totalItems = data.length;

  // Calcul de la somme des prix
  const totalPrice = data.reduce((acc, item) => acc + item.prix, 0);

  // Calcul de la moyenne des prix
  const averagePrice =
    totalItems > 0 ? (totalPrice / totalItems).toFixed(2) : 0;

  return (
    <div className="price-indicator">
      <h2>Indicateurs de prix</h2>
      <p>Nombre d'éléments affichés : {totalItems}</p>
      <p>Prix total : {totalPrice} $</p>
      <p>Prix moyen : {averagePrice} $</p>
    </div>
  );
}

export default PriceIndicator;
