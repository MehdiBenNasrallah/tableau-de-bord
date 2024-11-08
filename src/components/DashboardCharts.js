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
        backgroundColor: ["#006400", "#008000", "#00a651", "#00cc78"],
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
        backgroundColor: ["#006400", "#008000", "#00a651", "#00cc78"],
      },
    ],
  };

  return (
    <div className="dashboard-charts">
      <h2>Statistiques</h2>
      <div className="charts-row">
        <div className="chart-container">
          <h3>Nombre par saison</h3>
          <Bar data={barData} height={250} />
        </div>
        <div className="chart-container">
          <h3>Répartition des niveaux</h3>
          <Pie data={pieData} height={250} />
        </div>
      </div>
    </div>
  );
}

export default DashboardCharts;
