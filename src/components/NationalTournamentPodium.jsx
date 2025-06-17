import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { NationalTournamentPodiumCard } from './NationalTournamentPodiumCard';
import LoadingSpinner from './LoadingSpinner';

import './NationalTournamentPodium.css'

export const NationalTournamentPodium = () => {
    const [podiums, setPodiums] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPodiums = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'national-tournaments-podiums'));
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                data.sort((a, b) => b.year - a.year);
                setPodiums(data);
            } catch (error) {
                console.error("Error fetching podiums: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPodiums();
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="all-podiums">
            {podiums.map((podium) => (
                <NationalTournamentPodiumCard
                    key={podium.id}
                    year={podium.year}
                    imageWinner={podium.image}
                    podium={podium.podium}
                />
            ))}
        </div>
    );
};
