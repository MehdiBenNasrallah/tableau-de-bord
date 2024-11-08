import React, { useEffect, useState } from "react";
import data from "./data/database.json";
import FilterBar from "./components/FilterBar";
import PriceIndicator from "./components/PriceIndicator";
import DashboardCharts from "./components/DashboardCharts";
import "./App.css";

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

  // j'ai créer cette logique de mise à jour automatique des données pour simuler une mise à jour des données en temps réel
  // mais la logique serait différente si je devais lier le dashboard à une API
  // Mise à jour automatique des données
  useEffect(() => {
    const updateDataAutomatically = () => {
      setDashboardData((prevData) => {
        const newData = [...prevData];
        // const randomIndex = Math.floor(Math.random() * newData.length);

        // Mise à jour aléatoire du prix pour le premier élément
        newData[0] = {
          ...newData[0],
          prix: Math.floor(Math.random() * 500), // Nouveau prix aléatoire entre 0 et 500
        };

        return newData;
      });
    };

    // Exécuter `updateDataAutomatically` toutes les 10 secondes
    const interval = setInterval(updateDataAutomatically, 10000);

    // Nettoyage de l'intervalle à la destruction du composant
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Tableau de Bord Interactif</h1>
      <FilterBar filters={filters} setFilters={setFilters} />
      <PriceIndicator data={dashboardData} />
      <DashboardCharts data={dashboardData} />
      <pre>{JSON.stringify(dashboardData, null, 2)}</pre>
    </div>
  );
}

export default App;
