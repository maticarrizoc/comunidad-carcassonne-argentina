import welcome from "../assets/welcome.png"

import './Welcome.css'

export const Welcome = () => {
    return (
        <section className="welcome">
            <h1>¡BIENVENIDOS A LA COMUNIDAD CARCASSONNE ARGENTINA!</h1>
            <article className="welcome-text-img">
                <div className="welcome-text">
                    <p>Nuestra misión es dar a conocer este gran juego de mesa creado por Klaus-Jürgen Wrede y fortalecer la comunidad de jugadores en el país.</p>
                    <p>
                        Nos encargamos de compartir las últimas noticias sobre el juego y sus competiciones, anunciar torneos en todo el territorio nacional y gestionar la Selección Nacional Argentina de Carcassonne, que representa al país en el Mundial por Equipos y la Copa América.
                    </p>
                    <p>Además, trabajamos para seguir expandiendo la comunidad y, en el futuro, queremos organizar la Liga Nacional de forma virtual, un nuevo espacio de competición para todos los aficionados.</p>
                </div>
                <img src={welcome} alt="Bienvenidos a Carcassonne Argentina" className="welcome-img" />
            </article>
        </section>
    )
}