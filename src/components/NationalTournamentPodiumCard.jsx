import cup from '../assets/cup.png'
import './NationalTournamentPodiumCard.css'

export const NationalTournamentPodiumCard = ({ year, imageWinner, podium }) => {
    return (
        <div className='podium-card'>
            <div className='images-container'>
                <img className='image-winner' src={imageWinner} alt="" />
                <img className='image-cup' src={cup} alt="" />
            </div>
            <div className='podium'>
                <h3>Posiciones Nacional {year}</h3>
                <ol>
                    {podium.map((player, index) => (
                        <li key={index} className='podium-li'>{player}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}