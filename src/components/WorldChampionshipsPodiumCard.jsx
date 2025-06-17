import './WorldChampionshipsPodiumCard.css';

export const WorldChampionshipsPodiumCard = ({ year, podium }) => {
    return (
        <div className="world-championships-podium-card">
            <div className="world-championships-podium">
                <h3>Mundial {year}</h3>
                <table className="world-championships-podium-table">
                    <thead>
                        <tr>
                            <th>Pos</th>
                            <th>Nombre</th>
                            <th>País</th>
                        </tr>
                    </thead>
                    <tbody>
                        {podium.map((player, index) => (
                            <tr key={index}>
                                <td>{player.position}</td>
                                <td>{player.name}</td>
                                <td>{player.country}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
