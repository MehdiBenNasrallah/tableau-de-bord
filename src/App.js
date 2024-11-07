import React, { useEffect, useState } from "react";
import data from "./data/database.json";
import FilterBar from "./components/FilterBar";

function App() {
  const [dashboardData, setDashboardData] = useState([]);
  const [filters, setFilters] = useState({
    saison: "",
    niveau: "",
    prixMin: "",
    prixMax: "",
    ageMin: "",
    ageMax: "",
    compte: "", // On démarre avec tous les comptes (vide)
  });

  useEffect(() => {
    // Filtrage des données
    const filteredData = data.filter((item) => {
      return (
        (filters.saison === "" || item.saison === filters.saison) &&
        (filters.niveau === "" || item.niveau === filters.niveau) &&
        (filters.prixMin === "" || item.prix >= parseInt(filters.prixMin)) &&
        (filters.prixMax === "" || item.prix <= parseInt(filters.prixMax)) &&
        (filters.ageMin === "" || item.age >= parseInt(filters.ageMin)) &&
        (filters.ageMax === "" || item.age <= parseInt(filters.ageMax)) &&
        (filters.compte === "" ||
          (filters.compte === "true" && item.compte === true) ||
          (filters.compte === "false" && item.compte === false))
      );
    });
    setDashboardData(filteredData);
  }, [filters]);

  return (
    <div className="App">
      <h1>Tableau de Bord Interactif</h1>
      <FilterBar filters={filters} setFilters={setFilters} />
      <pre>{JSON.stringify(dashboardData, null, 2)}</pre>
    </div>
  );
}

export default App;
