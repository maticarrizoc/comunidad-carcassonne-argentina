import { useEffect, useState } from "react";

const SHEETS_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTU2Ihh49onyHvc4yvD3LtCjwS6HqwhUoC829MCDrs-VbeYrMBgYAXqU5kW50L-5sXqIK33qW7zBc0z/pub?gid=0&single=true&output=csv";

export const useRankingData = () => {
  const [players, setPlayers] = useState([]);
  const [loadingRanking, setLoadingRanking] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SHEETS_URL);
        const text = await response.text();
        const rows = text.split("\n").map(row => row.split(",").map(col => col.trim()));

        if (rows.length < 2) return;

        const data = rows.slice(1)
          .filter(row => row.length >= 5)
          .map((row, index) => ({
            position: index + 1,
            nick: row[2] || "Sin Nick",
            elo: row[3] || "N/A",
            maxElo: row[4] || "N/A",
            link: row[5] || "#"
          }));

        setPlayers(data);
      } catch (error) {
        console.error("Error fetching ranking: ", error);
      } finally {
        setLoadingRanking(false);
      }
    };

    fetchData();
  }, []);

  return { players, loadingRanking };
};