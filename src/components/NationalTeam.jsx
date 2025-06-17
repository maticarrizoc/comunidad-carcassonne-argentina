import meeplesSeleccion from '../assets/meeples-seleccion.png'
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { NationalTeamCard } from './NationalTeamCard';
import LoadingSpinner from './LoadingSpinner';

import './NationalTeam.css'

export const NationalTeam = () => {

    const [activeTab, setActiveTab] = useState(0);

    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentTeam, setCurrentTeam] = useState([]);

    useEffect(() => {
        const fetchCurrentTeam = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'current-national-team'));
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                data.sort((a, b) => a.position - b.position);
                setCurrentTeam(data);
            } catch (error) {
                console.error("Error fetching podiums: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCurrentTeam();
    }, []);

    useEffect(() => {
        const fetchNationalTeams = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'national-teams'));
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                data.sort((a, b) => b.year - a.year);
                setTeams(data);
            } catch (error) {
                console.error("Error fetching teams: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNationalTeams();
    }, []);

    if (loading) {
        return <LoadingSpinner message="Reuniendo los meeples Argentinos, un momento por favor." />;
    }

    return (
        <section className="national-team">
            <h1>SELECCIÓN NACIONAL ARGENTINA</h1>
            <div className='paragrph-image'>
                <p>La Selección Argentina de Carcassonne se conformó inicialmente para participar de la primer Copa América en el año 2021. Este torneo surgió como corolario de los torneos Interdevirianos organizados por Devir, los cuales habían puesto a muchos meeples de toda latinoamerica en contacto a través de BGA.</p>
                <img src={meeplesSeleccion} alt="" />
            </div>
            <p>
                Luego de la Copa América 2021, la Comunidad Argentina se empezó a ampliar y se conformó un nuevo equipo para participar del WTCOC 2021. Argentina no había participado del 1er WTCOC, en 2020, ya que dicho torneo había surgido muy rápidamente con la pandemia, pero los meeples argentinos no estaban organizados para ese entonces. En el WTCOC 2021, la Selección Argentina obtuvo 4 triunfos resonantes pero quedó afuera de los play-off por diferencia de duelos. Esto mostró un gran crecimiento desde la Copa América, pocos meses antes, en donde la Selección Argentina solamente había ganado 1 partido y terminó penúltima.
            </p>
            <p>
                A partir del año 2022, la Selección Argentina se empezó a conformar por torneos clasificatorios, ya que la Comunidad era lo suficientemente grande y con jugadores que todo el tiempo estaban incrementando su ELO. Asimismo, cada año siguen apareciendo nuevos y mejores jugadores, así que la renovación en la Selección Argentina se ha transformado en algo usual. En efecto, ya son más de 20 los jugadores que han formado parte de alguna de las diferentes selecciones argentinas a lo largo de los años. En la Comunidad Carcassonnera Argentina hay más de 100 miembros activos, todos deseosos de formar parte de la Carcassonnetta en los próximos años.
            </p>
            <h2>¿CÓMO FORMAR PARTE?</h2>
            <ul className='national-team-list'>
                <li>Es necesario tener nacionalidad Argentina o ser residente en Argentina.</li>
                <li>No podrán acceder jugadores que hayan participado en procesos de selección de otros países o regiones.</li>
                <li>Participar de los torneos conformación, el cuál consta de tres etapas, donde en la última de ellas se define el orden de titulares y suplentes.</li>
            </ul>
            <div className="tabs-container">
                <div className="tabs-header">
                    <button
                        className={activeTab === 0 ? 'active tabs-button' : 'tabs-button'}
                        onClick={() => setActiveTab(0)}
                    >
                        Selección Actual
                    </button>
                    <button
                        className={activeTab === 1 ? 'active tabs-button' : 'tabs-button'}
                        onClick={() => setActiveTab(1)}
                    >
                        Competencias Anteriores
                    </button>
                </div>
                <div className="tabs-content">
                    {activeTab === 0 && (
                        <div className="tabs-content-1">
                            {currentTeam.map(player => (
                                <NationalTeamCard
                                    key={player.id}
                                    name={player.name}
                                    nick={player.nick}
                                    image={player.image}
                                    place={player.place}
                                />
                            ))}

                        </div>
                    )} 
                    {activeTab === 1 && (
                        <div className="tabs-content-2">
                            <div className="tabs-content-2-1">
                                {teams
                                    .filter(team => team.competition === 'WTCOC')
                                    .map(team => (
                                        <div key={team.id} className='national-team-past-competition'>
                                            <h3>Selección Nacional - {team.competition} {team.year}</h3>
                                            <a href={team.link} target="_blank"><p>Posición Final: {team.position}°</p></a>
                                            <ol>
                                                {team.team.map((player, index) => (
                                                    <li key={index}>{player}</li>
                                                ))}
                                            </ol>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="tabs-content-2-2">
                                {teams
                                    .filter(team => team.competition === 'Copa América')
                                    .map(team => (
                                        <div key={team.id} className='national-team-past-competition'>
                                            <h3>Selección Nacional - {team.competition} {team.year}</h3>
                                            <a href={team.link} target="_blank"><p>Posición Final: {team.position}°</p></a>
                                            <ol>
                                                {team.team.map((player, index) => (
                                                    <li key={index}>{player}</li>
                                                ))}
                                            </ol>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </section>
    )
}