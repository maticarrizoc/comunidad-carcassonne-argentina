import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { NewCard } from './NewCard';
import LoadingSpinner from './LoadingSpinner';
import React, { useState, useEffect } from 'react';

import './HomeNews.css'

export const HomeNews = () => {

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
        <section className="home-news">
            <h2>ÚLTIMAS NOTICIAS</h2>
            <div className="home-news-div">
            {news.slice(0, 3).map(newsItem => (
                <NewCard
                    key={newsItem.id}
                    id={newsItem.id}
                    title={newsItem.title}
                    parragraphs={newsItem.parragraphs}
                    image={newsItem.image}
                    link={newsItem.link}
                />
            ))}
            </div>
        </section>
    )
}