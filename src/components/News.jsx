import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { NewCard } from './NewCard';
import LoadingSpinner from './LoadingSpinner';
import React, { useState, useEffect } from 'react';

import './News.css'

export const News = () => {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'news'));
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                data.sort((a, b) => b.date - a.date);
                setNews(data);
            } catch (error) {
                console.error("Error fetching news: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return <LoadingSpinner message="Cargando noticias, un momento por favor." />;
    }

    return (
        <section>
            <h1>NOTICIAS, NOVEDADES Y AGENDA</h1>
            <div className='news'>
            {news.map(newsItem => (
                <NewCard
                    key={newsItem.id}
                    id={newsItem.id}
                    title={newsItem.title}
                    parragraphs={newsItem.parragraphs}
                    image={newsItem.image}
                    link={newsItem.link}
                    date={newsItem.date}
                />
            ))}
            </div>
        </section>
    );
};

