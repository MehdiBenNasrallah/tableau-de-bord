import React, { useEffect, useState } from "react";
import data from "./data/database.json";

function App() {
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    setDashboardData(data);
  }, []);

  return (
    <div className="App">
      <h1>Tableau de Bord Interactif</h1>
      <pre>{JSON.stringify(dashboardData, null, 2)}</pre>
    </div>
  );
}

export default App;
