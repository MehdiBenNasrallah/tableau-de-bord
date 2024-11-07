import React from "react";

function FilterBar({ filters, setFilters }) {
  // Gestion des changements dans les filtres
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="filter-bar">
      <label>
        Saison:
        <select name="saison" onChange={handleFilterChange}>
          <option value="">Toutes</option>
          <option value="été">Été</option>
          <option value="printemps">Printemps</option>
          <option value="automne">Automne</option>
          <option value="hiver">Hiver</option>
        </select>
      </label>

      <label>
        Niveau:
        <select name="niveau" onChange={handleFilterChange}>
          <option value="">Tous</option>
          <option value="novice">Novice</option>
          <option value="moyen">Moyen</option>
          <option value="pro">Pro</option>
        </select>
      </label>

      {/* Plage pour le prix */}
      <label>
        Prix min:
        <input
          type="number"
          name="prixMin"
          placeholder="Prix minimum"
          onChange={handleFilterChange}
        />
      </label>
      <label>
        Prix max:
        <input
          type="number"
          name="prixMax"
          placeholder="Prix maximum"
          onChange={handleFilterChange}
        />
      </label>

      {/* Plage pour l'âge */}
      <label>
        Âge min:
        <input
          type="number"
          name="ageMin"
          placeholder="Âge minimum"
          onChange={handleFilterChange}
        />
      </label>
      <label>
        Âge max:
        <input
          type="number"
          name="ageMax"
          placeholder="Âge maximum"
          onChange={handleFilterChange}
        />
      </label>

      <label>
        Passe:
        <select name="passe" onChange={handleFilterChange}>
          <option value="">Tous</option>
          <option value="simple">Simple</option>
          <option value="double">Double</option>
          <option value="illimité">Illimité</option>
        </select>
      </label>

      {/* Filtre booléen pour compte */}
      <label>
        Compte:
        <select name="compte" onChange={handleFilterChange}>
          <option value="">Tous</option>
          <option value="true">Comptes activés</option>
          <option value="false">Comptes désactivés</option>
        </select>
      </label>
    </div>
  );
}

export default FilterBar;
