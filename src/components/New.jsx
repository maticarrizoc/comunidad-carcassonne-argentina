import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Navbar } from './Navbar';
import LoadingSpinner from './LoadingSpinner';
import {
    FacebookShareButton,
    TelegramShareButton,
    ThreadsShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TelegramIcon,
    ThreadsIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";

import { Helmet } from 'react-helmet-async'
import { CopyLinkButton } from './CopyLinkButton';

import './New.css'

export const New = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [newsItem, setNewsItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const shareUrl = window.location.href;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const docRef = doc(db, 'news', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setNewsItem({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log('No existe la noticia');
                }
            } catch (error) {
                console.error('Error obteniendo noticia:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [id]);


    if (loading) return <LoadingSpinner />;

    if (!newsItem) return <p>No se encontró la noticia.</p>;

    const description = newsItem.parragraphs?.[0]?.slice(0, 150) + '...' || 'Noticia de la comunidad Carcassonne Argentina.';
    const url = `https://carcassonne.com.ar/news/${id}`;

    return (
        <>
            <Helmet>
                <title>{newsItem.title} | Carcassonne Argentina</title>
                <meta name="description" content={description} />
                <meta name="author" content="Comunidad Carcassonne Argentina" />

                <meta property="og:title" content={newsItem.title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={newsItem.image[1]} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="article" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={newsItem.title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={newsItem.image[1]} />
                <meta name="twitter:image:alt" content="Noticia de la comunidad Carcassonne Argentina" />
            </Helmet>
            <Navbar />
            <section>
                <p className='new-date'>Publicado: {newsItem.date?.toDate().toLocaleString('es-AR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                })}hs</p>
                <div className='div-new-image'>
                    <button className='back-button' onClick={() => navigate(-1)}><i class="bi bi-caret-left-fill"></i> Volver</button>
                    <img src={newsItem.image[1]} alt="" className='new-image' />
                </div>

                <h1>{newsItem.title}</h1>
                <div className='parragraphs'>
                    {newsItem.parragraphs?.map((item, index) => {
                        if (typeof item === 'string') {
                            return <p key={index}>{item}</p>;
                        }

                        if (typeof item === 'object' && item !== null) {
                            if (Array.isArray(item.duelo)) {
                                return (
                                    <div key={index} className="parragraph-duel">
                                        {item.duelo.map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}
                                    </div>
                                );
                            }

                            if (typeof item.image === 'string') {
                                return (
                                    <div key={index} className="parragraph-image">
                                        <img src={item.image} alt={`Imagen ${index}`} />
                                    </div>
                                );
                            }
                        }
                        return <p key={index} className="parragraph-unknown">[Contenido no reconocido]</p>;
                    })}
                </div>
                <div className='div-new-button'>
                    {newsItem.link && (
                        <a href={newsItem.link[0]} className='new-button' target="_blank">{newsItem.link[1]}</a>
                    )}
                </div>
                <div className='share-buttons'>
                    <p>Compartir en: </p>
                    <FacebookShareButton url={`https://carcassonne.com.ar/previews/news-${newsItem.id}.html`} quote={newsItem.title} hashtag="#Noticia">
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <TelegramShareButton url={shareUrl}>
                        <TelegramIcon size={32} round={true} />
                    </TelegramShareButton>
                    <ThreadsShareButton url={shareUrl}>
                        <ThreadsIcon size={32} round={true} />
                    </ThreadsShareButton>
                    <TwitterShareButton url={`https://carcassonne.com.ar/previews/news-${newsItem.id}.html`}>
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    <WhatsappShareButton url={shareUrl}>
                        <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>

                    <CopyLinkButton shareUrl={window.location.href} />
                </div>


            </section>
        </>
    );
};

