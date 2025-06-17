import tile2 from "../assets/tile2.png"
import tile3 from "../assets/tile3.png"
import tile4 from "../assets/tile4.png"
import tile5 from "../assets/tile5.png"
import tile6 from "../assets/tile6.png"
import tile7 from "../assets/tile7.png"
import tile9 from "../assets/tile9.png"
import tile15 from "../assets/tile15.png"
import tile17 from "../assets/tile17.png"
import tile19 from "../assets/tile19.png"

import React, { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import './Ranking.css';

const SHEETS_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTU2Ihh49onyHvc4yvD3LtCjwS6HqwhUoC829MCDrs-VbeYrMBgYAXqU5kW50L-5sXqIK33qW7zBc0z/pub?gid=0&single=true&output=csv";

const columns = [
    { id: 'pos', label: 'Pos' },
    { id: 'nick', label: 'Jugador' },
    { id: 'elo', label: 'Elo Actual' },
    { id: 'maxElo', label: 'MAX Elo' },
    { id: 'link', label: 'Partida' },
];

export const Ranking = () => {
    const [players, setPlayers] = useState([]);
    const [page, setPage] = useState(0);
    const rowsPerPage = 15;
    const [loading, setLoading] = useState(true);
    const [sortField, setSortField] = useState('maxElo');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(SHEETS_URL);
                const text = await response.text();
                const rows = text.split("\n").map(row => row.split(",").map(col => col.trim()));

                if (rows.length < 2) return;

                const data = rows.slice(1)
                    .filter(row => row.length >= 5)
                    .map(row => ({
                        nick: row[2] || "Sin Nick",
                        elo: parseFloat(row[3]) || 0,
                        maxElo: parseFloat(row[4]) || 0,
                        link: row[5] ? row[5].replace(/"/g, '') : "",
                    }));

                setPlayers(data);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const orderByField = (field) => {
        setSortField(field);

        const sortedPlayers = [...players].sort((a, b) => b[field] - a[field]);

        setPlayers(sortedPlayers);
    };

    if (loading) {
        return <LoadingSpinner message="Cargando ranking, un momento por favor." />;
    }

    const handleChangePage = (newPage) => {
        setPage(newPage);
    };

    return (
        <section className='ranking'>
            <h2>RANKING ARGENTINO EN BGA</h2>
            <div className="ranking-tiles-container">
                <article className="tiles-ranking">
                    <img src={tile2} alt="Tile" className="tile tile2" />
                    <img src={tile15} alt="Tile" className="tile tile15" />
                    <img src={tile6} alt="Tile" className="tile tile6" />
                    <img src={tile3} alt="Tile" className="tile tile3" />
                    <img src={tile17} alt="Tile" className="tile tile17" />
                </article>
                <div className="ranking-table-container">
                    <table className="ranking-table">
                        <thead>
                            <tr>
                                {columns.map((column) => (
                                    <th key={column.id}>
                                        {column.id === 'elo' || column.id === 'maxElo' ? (
                                            <button onClick={() => orderByField(column.id)} className="order-button">
                                                {column.label} {sortField === column.id ? <i class="bi bi-caret-down-square-fill"></i>: <i class="bi bi-square-fill"></i>}
                                            </button>
                                        ) : (
                                            column.label
                                        )}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {players
                                .sort((a, b) => b[sortField] - a[sortField])
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => (
                                    <tr key={index}>
                                        <td>{page * rowsPerPage + index + 1}</td>
                                        <td className='row-nickname'>{row.nick}</td>
                                        <td className='row-center'>
                                            {row.elo}
                                        </td>
                                        <td className='row-center'>
                                            {row.maxElo}
                                        </td>
                                        <td className='row-center'>
                                            {row.link ? (
                                                <a href={row.link} target="_blank" rel="noopener noreferrer">Ver</a>
                                            ) : "N/A"}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>

                    <div className="pagination">
                        <button onClick={() => handleChangePage(page - 1)} disabled={page === 0}>
                            &lt;
                        </button>
                        <button onClick={() => handleChangePage(page + 1)} disabled={(page + 1) * rowsPerPage >= players.length}>
                            &gt;
                        </button>
                    </div>
                </div>
                <article className="tiles-ranking">
                    <img src={tile9} alt="Tile" className="tile tile9" />
                    <img src={tile7} alt="Tile" className="tile tile7" />
                    <img src={tile19} alt="Tile" className="tile tile19" />
                    <img src={tile4} alt="Tile" className="tile tile4" />
                    <img src={tile5} alt="Tile" className="tile tile5" />
                </article>

            </div>
            <div className="link-form">
                <p>Actualizá tu máximo ELO alcanzado en BGA </p>
                <a href="https://forms.gle/S2zFi97BmPEMuPeU9" target="_blank">AQUÍ</a>
            </div>
        </section>
    );
};
