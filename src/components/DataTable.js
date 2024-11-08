// DataTable.js
import React from "react";

function DataTable({ data }) {
  if (data.length === 0) {
    return <p>Aucune donnée à afficher.</p>;
  }

  return (
    <table className="data-table">
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {Object.values(item).map((value, index) => (
              <td key={index}>
                {typeof value === "boolean"
                  ? value
                    ? "Activé"
                    : "Non activé"
                  : value.toString()}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
