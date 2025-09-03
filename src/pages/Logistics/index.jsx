import React, { useEffect, useState } from "react";
import "./style.scss";

export default function CustomsRelease() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://docs.google.com/spreadsheets/d/1KrUgHXDVwMgH_M2ZoFtOSVLTiYkIojSltzLeHItYpdY/gviz/tq?tqx=out:json&gid=952936530"
      );
      const text = await res.text();

      // Google возвращает JSON с лишним обрамлением, чистим
      const json = JSON.parse(text.substring(47).slice(0, -2));

      const data = json.table.rows.map((row) =>
        row.c.map((cell) => (cell ? cell.v : ""))
      );

      setRows(data);
    };

    fetchData();
  }, []);

  return (
    <div className="customs-container">
      <h1 className="customs-title">Выпуск с таможни</h1>
      <div className="table-wrapper">
        <table className="customs-table">
          <thead>
            <tr>
              {rows[0]?.map((header, i) => (
                <th key={i} className="customs-th">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.slice(1).map((row, i) => (
              <tr key={i} className="customs-tr">
                {row.map((cell, j) => (
                  <td key={j} className="customs-td">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
