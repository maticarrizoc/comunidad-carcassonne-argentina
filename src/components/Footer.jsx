import './Footer.css'

export const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer>
            <h2>¡SEGUÍ CONECTADO CON LA COMUNIDAD!</h2>
            <div className="footer-social-networks">
                <a href="https://chat.whatsapp.com/JS0vwUiRjIiE3TeXPeU67F" target="_blank" >
                    <div className='wpp'></div>
                </a>
                <a href="https://www.instagram.com/carcassonne_argentina/" target="_blank" >
                    <div className='ig'></div>
                </a>
                <a href="https://boardgamearena.com/group?id=7165509" target="_blank" >
                    <div className='bga'></div>
                </a>
            </div>
            <h3><a href="/contacto">¿QUIERES CONTACTAR CON NOSOTROS? ¡HAZLO AQUÍ! </a></h3>
            <div className='footer-copyright'>
                <p>©Copyright {year} COMUNIDAD CARCASSONNE ARGENTINA</p>
                <p>TODOS LOS DERECHOS RESERVADOS</p>
            </div>
            <div className="made">
                <p>Diseñado por: <a href="https://ar.pinterest.com/Sofii1515/mis-dise%C3%B1os/" target="_blank" ><i class="bi bi-pinterest"></i> Sofía Martinez</a></p>
                <p>Programado por: <a href="https://www.linkedin.com/in/matias-alejandro-carrizo-conti-300a8a168/" target="_blank" ><i class="bi bi-linkedin"></i> Matías Carrizo</a></p>
            </div>
        </footer>
    )
}