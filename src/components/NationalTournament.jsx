import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { NationalTournamentPodium } from './NationalTournamentPodium';
import { WorldChampionshipsPodium } from './WorldChampionshipsPodium';
import LoadingSpinner from './LoadingSpinner';

import './NationalTournament.css'


export const NationalTournament = () => {

    const [activeTab, setActiveTab] = useState(0);

    const [activeTabHistory, setActiveTabHistory] = useState(0);

    const [qualifiers, setQualifiers] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const fetchQualifiers = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'national-qualifiers'));
                const data = querySnapshot.docs.map(doc => {
                    const { date, place, city, contact } = doc.data();
                    return {
                        id: doc.id,
                        date: date.toDate(),
                        place,
                        city,
                        contact,
                    };
                });

                data.sort((a, b) => a.date - b.date);
                setQualifiers(data);
            } catch (error) {
                console.error('Error al obtener los clasificatorios:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchQualifiers();
    }, []);

    if (loading) {
        return <LoadingSpinner message="Cargando clasificatorios, un momento por favor." />;
    }

    return (
        <section className="national-tournament">
            <h1>TORNEO NACIONAL DE CARCASSONNE 2025</h1>
            <div className='paragrphs'>
                <p>Entre mayo y junio se disputarán los torneos clasificatorios y en julio, se realizará el Campeonato Nacional de Carcassonne 2025.</p>
                <p>El Nacional será el sábado 26 de julio a las 10 hs. en el Salón Parroquial de Vedra, Jose Marmol 670, Buenos Aires. El ganador o ganadora del Nacional representará a nuestro país en el Mundial que se realizará en octubre en la feria de Essen (¡yendo a la feria de juegos más importante del mundo con pasaje pago!). Más abajo se detallan las reglas de juego que se usarán en los clasificatorios y el Nacional</p>
                <p>Para los torneos clasificatorios habrán juegos de premio y cada evento clasificatorio otorgará invitaciones para el Campeonato Nacional a los mejores cuatro jugadores.</p>
            </div>
            <h2>CLASIFICATORIOS AL NACIONAL DE CARCASSONNE 2025</h2>
            <p>Contactate con el organizador para conocer los detalles de horario, inscripción y premios. Es posible que los torneos presenciales cobren una entrada, confirmalo con el organizador.</p>
            <table className='table-national-tournament'>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Tienda</th>
                        <th>Ciudad</th>
                        <th>Contacto</th>
                    </tr>
                </thead>
                <tbody>
                    {qualifiers.map(({ id, date, place, city, contact }) => {
                        const hasPassed = date < new Date();
                        const dateClass = hasPassed ? 'past-date' : '';

                        return (
                            <tr key={id} className={dateClass}>
                                <td className={dateClass}>
                                    {date.toLocaleDateString('es-AR', { day: 'numeric', month: 'numeric' })}
                                </td>
                                <td>{place}</td>
                                <td>{city}</td>
                                <td>
                                    {hasPassed ? (
                                        <span className="past-contact">{contact[0]}</span>
                                    ) : (
                                        <a href={contact[1]} target="_blank" rel="noopener noreferrer">
                                            {contact[0]}
                                        </a>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="tabs-national-tournament">
                <div className="tabs-header">
                    <button
                        className={activeTab === 0 ? 'active tabs-button' : 'tabs-button'}
                        onClick={() => setActiveTab(0)}
                    >
                        Reglas
                    </button>
                    <button
                        className={activeTab === 1 ? 'active tabs-button' : 'tabs-button'}
                        onClick={() => setActiveTab(1)}
                    >
                        Puntos
                    </button>
                    <button
                        className={activeTab === 2 ? 'active tabs-button' : 'tabs-button'}
                        onClick={() => setActiveTab(2)}
                    >
                        Reglas adicionales
                    </button>
                    <button
                        className={activeTab === 3 ? 'active tabs-button' : 'tabs-button'}
                        onClick={() => setActiveTab(3)}
                    >
                        Premios
                    </button>
                </div>
                <div className="tabs-content">
                    {activeTab === 0 && (
                        <div className="tabs-content-1">
                            <ul>
                                <li>El número mínimo de jugadores para organizar un torneo son 8.</li>
                                <li>Todas las partidas se jugarán con el juego básico de CARCASSONNE (sin expansiones, ni Abad, ni El Rio).</li>
                                <li>En cualquier partida se puede imponer un límite de tiempo a la duración del turno de cada jugador. En caso de necesidad, este tiempo por turno será de 3 minutos. Las partidas finalizarán normalmente, pero por cuestiones de tiempo, una partida puede ser finalizada con anterioridad, previo aviso a los jugadores, estableciendo así una duración máxima para cada ronda de 40 minutos.</li>
                                <li>Cada persona puede participar en las partidas de las tres rondas suizas preliminares, una cantidad fija en los eventos clasificatorios. Todos los jugadores juegan al mismo tiempo, y no hay eliminación en estas rondas. Al terminar la última ronda se establece una tabla de posiciones según los puntos mencionados abajo, que definirá los cuatro mejores jugadores, que ganarán invitación al Nacional y jugarán una semifinal y final por los premios.</li>
                                <li>El sistema suizo funciona de la siguiente manera: en la primera ronda, los jugadores se distribuyen al azar en mesas de 4 (de no ser posible, se armará la menor cantidad posible de mesas de 3 jugadores). Para la segunda ronda, las mesas se arman según la puntuación de los jugadores y sus puntos de victoria si fuera necesario. De esta manera, si hubiera por ejemplo 24 jugadores, tras la primera ronda habría seis jugadores con 6 puntos, seis jugadores con 4 puntos (ver el sistema de puntuación), etc. En la ronda 2, se armarán las primeras mesas con cuatro jugadores de 6 puntos elegidos al azar. La mesa 2 debería armarse con los dos jugadores restantes con 6 puntos y dos jugadores con 4 puntos. Con el mismo método se arman las mesas restantes. </li>
                                <li>La cantidad de rondas suizas se fija en tres para todos los eventos.  Luego, dependerá de la cantidad de jugadores la cantidad que pase a la ronda eliminatoria final: 8 si son 21 jugadores o más, 4 si son 20 jugadores o menos. Las rondas eliminatorias se jugarán 1 contra 1 (mismo formato del Nacional), adicionándose así 2 o 3 rondas eliminatorias de 1v1 para definir premios e invitaciones.</li>
                            </ul>
                        </div>
                    )}
                    {activeTab === 1 && (
                        <div className="tabs-content-2">
                            <ul>
                                <li>El sistema de puntuación es 6 puntos por ganar la partida, 2do lugar 4 puntos, 3er lugar 2 puntos, 4to lugar 0 puntos. Se registran los puntos de victoria de cada jugador por si es necesario para desempatar.</li>
                                <li>Si en una mesa hay jugadores que tienen la misma cantidad de puntos de victoria al finalizar la partida, se reparten los puntos de sus posiciones. Por ejemplo, si se acaba el tiempo o las losetas y dos jugadores terminan con 49 PV ambos en segundo lugar, cada uno recibe 3 puntos de torneo ((4+2)/2).</li>
                                <li>En caso de empate en la clasificación por puntos según los puntos de torneo, se tendrá en cuenta la suma total de puntos de victoria en cada partida. En caso de empate continuado, se considerará la suma del porcentaje de puntos de victoria en cada partida. En caso de que el empate persista, se deshará mediante sorteo aleatorio en la etapa suiza. En la etapa de eliminatorias, en caso de empate se declara ganador al jugador que jugó segundo.</li>
                            </ul>
                        </div>
                    )}
                    {activeTab === 2 && (
                        <div className="tabs-content-3">
                            <p>Algunas de las siguientes reglas son aclaraciones a situaciones que pueden ser confusas, otras son normas especiales de torneo que siempre tendrán prioridad si hay algún conflicto con las reglas normales.</p>
                            <ul>
                                <li>El turno de un jugador comienza cuando el anterior jugador finalice la fase de puntuar construcciones completadas.</li>
                                <li>Las losetas se definen como jugadas tan pronto como dejan de tener contacto con la mano del jugador. Los jugadores no pueden cambiar su decisión sobre la colocación de las losetas (y por supuesto meeples) después de que son jugadas.</li>
                                <li>Una ciudad que conste sólo de dos segmentos da 4 puntos.</li>
                                <li>Campesinos: por cada campo se cuenta el número de campesinos de cada jugador y el jugador (o jugadores) que tengan más campesinos reciben 3 puntos de victoria por cada ciudad completada adyacente al campo.</li>
                                <li>Durante la partida el público no podrá comunicarse con los jugadores en el transcurso de las partidas.</li>
                                <li>Se ruega a los jugadores la no utilización de aparatos electrónicos (teléfonos, tabletas, etc.) en el transcurso de las partidas.</li>
                                <li>Las reglas del Nacional y el Mundial pueden ser distintas, pero queremos promover una competencia más familiar en las tiendas y sus clasificatorios.</li>
                            </ul>
                        </div>
                    )}
                    {activeTab === 3 && (
                        <div className="tabs-content-4">
                            <p>Devir enviará a los organizadores dos juegos para entregar al primer y segundo lugar, que podrán elegir los ganadores de una lista que incluimos debajo. Habrá otros materiales promocionales para el resto de los participantes. </p>
                            <p>La lista de juegos que se puede elegir para el 1er puesto son: Museum, Ierusalem Anno Domini, My City, Kingdom Builder.</p>
                            <p>La lista de juegos que se puede elegir para el 2do puesto son: Luna Capital, Sonora Dulces Sueños, TRC: Contractors, Karekare</p>
                            <p>Los organizadores pueden cobrar una inscripción al torneo por el valor que ellos consideren, contactate con cada organizador para confirmarlo.</p>
                            <p>Como dijimos antes, los mejores 4 jugadores de cada torneo recibirán una invitación al Nacional de Carcassonne 2025 a realizarse el 26 de julio en CABA, Argentina. Si alguno de estos jugadores ya estaba clasificado con anterioridad, su invitación pasa al siguiente en el orden de clasificación. Cada organizador es responsable de enviar las posiciones finales e información de invitados a Devir Argentina.</p>
                            <p>Una vez terminados los clasificatorios, Devir deberá tener el contacto de los invitados al Nacional. Enviaremos un email de recordatorio, pero si ganas una invitación te esperamos el día del Nacional, sábado 26 de julio a las 10 hs en Jose Marmol 670, Buenos Aires. El formato del torneo será 1 vs 1, rondas suizas con top 8 eliminatorio para definir el campeón o campeona nacional que nos representará en el mundial en Essen..</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="tabs-history-national-tournament">
                <div className="tabs-header">
                    <button
                        className={activeTabHistory === 0 ? 'active tabs-button' : 'tabs-button'}
                        onClick={() => setActiveTabHistory(0)}
                    >
                        Historial de podios
                    </button>
                    <button
                        className={activeTabHistory === 1 ? 'active tabs-button' : 'tabs-button'}
                        onClick={() => setActiveTabHistory(1)}
                    >
                        Representaciones en el Mundial
                    </button>
                </div>
                <div className="tabs-content-history-national-tournament">
                    {activeTabHistory === 0 && (
                        <div className="tabs-content-history-national-tournament-1">
                            <NationalTournamentPodium />
                        </div>
                    )}
                    {activeTabHistory === 1 && (
                        <div className="tabs-content-history-national-tournament-2">
                            <WorldChampionshipsPodium />
                        </div>
                    )}
                </div>
            </div>

        </section>
    )
}