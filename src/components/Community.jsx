import { CommunityCard } from './CommunityCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import LoadingSpinner from './LoadingSpinner';
import logoCAA from "../assets/logo.png";
import pdf from "../assets/pdf.png";

import './Community.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Community = () => {

    const [comunidades, setComunidades] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchComunities = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'communities'));
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                data.sort((a, b) => b.year - a.year);
                setComunidades(data);
            } catch (error) {
                console.error("Error fetching podiums: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchComunities();
    }, []);

    if (loading) {
        return <LoadingSpinner message="Cargando comunidades, un momento por favor." />;
    }

    const paises = comunidades.filter((c) => c.category === 'pais').sort((a, b) => a.name.localeCompare(b.name));
    const competencias = comunidades.filter((c) => c.category === 'competencia').sort((a, b) => a.name.localeCompare(b.name));
    const utiles = comunidades.filter((c) => c.category === 'util').sort((a, b) => a.name.localeCompare(b.name));
    const youtube = comunidades.filter((c) => c.category === 'youtube').sort((a, b) => a.name.localeCompare(b.name));

    return (
        <section>
            <h1>COMUNIDADES DE CARCASSONNE</h1>
            <h2>COMUNIDADES DE OTROS PAÍSES</h2>
            <article className="community">
                {paises.map((comunidad) => (
                    <CommunityCard
                        key={comunidad.id}
                        name={comunidad.name}
                        image={comunidad.image}
                        url={comunidad.url}
                    />
                ))}

            </article>
            <h2>COMPETENCIAS</h2>
            <article className="community">
                {competencias.map((comunidad) => (
                    <CommunityCard
                        key={comunidad.id}
                        name={comunidad.name}
                        image={comunidad.image}
                        url={comunidad.url}
                    />
                ))}
            </article>
            <h2>ÚTILES Y HERRAMIENTAS</h2>
            <article className="community">
                {utiles.map((comunidad) => (
                    <CommunityCard
                        key={comunidad.id}
                        name={comunidad.name}
                        image={comunidad.image}
                        url={comunidad.url}
                    />
                ))}
            </article>
            <h2>STREAMING - PODCAST</h2>
            <article className="community">
                {youtube.map((comunidad) => (
                    <CommunityCard
                        key={comunidad.id}
                        name={comunidad.name}
                        image={comunidad.image}
                        url={comunidad.url}
                    />
                ))}
            </article>
            <h2>ZONA DE DESCARGAS</h2>
            <div className="downloads">
                <div className="download">
                    <img src={logoCAA} alt="Carcassonne Argentina" />
                    <h3>Logo CCA</h3>
                    <a href="src\assets\logo.png" download={logoCAA}>
                        <button><i class="bi bi-download"></i> Descargar</button>
                    </a>
                </div>
                <div className="download">
                    <img src={pdf} alt="PDF-ReglasCarcassonne" className='pdf' />
                    <h3>Reglas Base ES</h3>
                    <a href="src\assets\ReglasCarcassonne.pdf" download="src\assets\ReglasCarcassonne.pdf">
                        <button><i class="bi bi-download"></i> Descargar</button>
                    </a>
                </div>
                <div className="download">
                    <img src={pdf} alt="PDF-ReglasCarcassonnePlus" className='pdf' />
                    <h3>Reglas Plus ES</h3>
                    <a href="src\assets\ReglasCarcassonnePlus.pdf" download="src\assets\ReglasCarcassonnePlus.pdf">
                        <button><i class="bi bi-download"></i> Descargar</button>
                    </a>
                </div>
                <div className="download">
                    <img src={pdf} alt="PDF-ReglasCarcassonneSolitario" className='pdf' />
                    <h3>Reglas Solitario ES</h3>
                    <a href="src\assets\ReglasCarcassonneSolitario.pdf" download="src\assets\ReglasCarcassonneSolitario.pdf">
                        <button><i class="bi bi-download"></i> Descargar</button>
                    </a>
                </div>
            </div>

        </section>
    )
}