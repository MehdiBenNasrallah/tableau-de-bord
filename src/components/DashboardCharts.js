import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

// Enregistrer les éléments requis de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement);

function DashboardCharts({ data }) {
  // Préparer les données pour le graphique à barres (nombre d'éléments par saison)
  const saisonCounts = data.reduce((acc, item) => {
    acc[item.saison] = (acc[item.saison] || 0) + 1;
    return acc;
  }, {});

  const barData = {
    labels: Object.keys(saisonCounts),
    datasets: [
      {
        label: "Nombre par saison",
        data: Object.values(saisonCounts),
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800", "#f44336"],
      },
    ],
  };

  // Préparer les données pour le graphique circulaire (répartition des niveaux)
  const niveauCounts = data.reduce((acc, item) => {
    acc[item.niveau] = (acc[item.niveau] || 0) + 1;
    return acc;
  }, {});

  const pieData = {
    labels: Object.keys(niveauCounts),
    datasets: [
      {
        label: "Répartition des niveaux",
        data: Object.values(niveauCounts),
        backgroundColor: ["#8e44ad", "#3498db", "#2ecc71"],
      },
    ],
  };

  return (
    <div className="dashboard-charts">
      <h2>Statistiques</h2>
      <div style={{ width: "45%", display: "inline-block" }}>
        <h3>Nombre par saison</h3>
        <Bar data={barData} />
      </div>
      <div style={{ width: "45%", display: "inline-block", marginLeft: "5%" }}>
        <h3>Répartition des niveaux</h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
}

export default DashboardCharts;
