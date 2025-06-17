import './Social.css'
import tile11 from "../assets/tile11.png"
import tile4 from "../assets/tile4.png"
import tile5 from "../assets/tile5.png"
import tile8 from "../assets/tile8.png"
import tile16 from "../assets/tile16.png"
import tile1 from "../assets/tile1.png"
import tile7 from "../assets/tile7.png"
import tile2 from "../assets/tile2.png"
import tile19 from "../assets/tile19.png"
import tile14 from "../assets/tile14.png"
import tile6 from "../assets/tile6.png"


export const Social = () => {
    return (
        <section className='social'>
            <h2>¡SUMATE Y AYUDANOS A HACER CRECER CARCASSONNE EN ARGENTINA!</h2>
            <article className="tiles">
                <img src={tile11} alt="Tile" className="tile tile11" />
                <img src={tile4} alt="Tile" className="tile tile4" />
                <img src={tile5} alt="Tile" className="tile tile5" />
                <img src={tile8} alt="Tile" className="tile tile8" />
                <img src={tile16} alt="Tile" className="tile tile16" />
                <img src={tile1} alt="Tile" className="tile tile1" />
                <img src={tile7} alt="Tile" className="tile tile7" />
                <img src={tile2} alt="Tile" className="tile tile2" />
                <img src={tile19} alt="Tile" className="tile tile19" />
                <img src={tile14} alt="Tile" className="tile tile14" />
                <img src={tile6} alt="Tile" className="tile tile6" />
            </article>
            <article className="social-networks">
                <a className="social-network" href="https://chat.whatsapp.com/JS0vwUiRjIiE3TeXPeU67F" target="_blank" >
                    <div className='wpp'></div>
                </a>
                <a className="social-network" href="https://www.instagram.com/carcassonne_argentina/" target="_blank" >
                    <div className='ig'></div>
                </a>
                <a className="social-network" href="https://boardgamearena.com/group?id=7165509" target="_blank" >
                    <div className='bga'></div>
                </a>
            </article>
        </section>
    )
}