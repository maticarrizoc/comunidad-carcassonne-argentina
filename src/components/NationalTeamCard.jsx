import React, { useEffect, useState } from 'react';
import meepleArgento from '../assets/meeple-argento.png'
import './NationalTeamCard.css'

export const NationalTeamCard = ({ name, nick, image, place }) => {

    const [playerData, setPlayerData] = useState({ elo: 'N/A', maxElo: 'N/A', id: null });

    useEffect(() => {
        const SHEETS_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTU2Ihh49onyHvc4yvD3LtCjwS6HqwhUoC829MCDrs-VbeYrMBgYAXqU5kW50L-5sXqIK33qW7zBc0z/pub?gid=0&single=true&output=csv";

        const fetchData = async () => {
            try {
                const response = await fetch(SHEETS_URL);
                const text = await response.text();
                const rows = text.split("\n").map(row => row.split(",").map(col => col.trim()));

                const playerRow = rows.find(row => row[2] === nick);

                if (playerRow) {
                    setPlayerData({
                        id: playerRow[0] || null,
                        elo: playerRow[3] || 'N/A',
                        maxElo: playerRow[4] || 'N/A',
                    });
                }
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };

        fetchData();
    }, [nick]);

    return (
        <div className='second-border'>
            <a href={`https://boardgamearena.com/player?id=${playerData.id}`} target="_blank">
                <div className='player-national-team'>
                    <div className="meeple-container">
                        <img className='image front' src={meepleArgento} alt="Meeple Argento" />
                        <img className='image back' src={image} alt="" />
                    </div>
                    <div className='text-player-national-team'>
                        <h3>{nick}</h3>
                        <h4>{name}</h4>
                        <p className='provincia'>{place}</p>
                        <p>ELO actual: {playerData.elo}</p>
                        <p>ELO máximo: {playerData.maxElo}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}