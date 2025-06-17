import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { WorldChampionshipsPodiumCard } from './WorldChampionshipsPodiumCard';
import LoadingSpinner from './LoadingSpinner';

import './WorldChampionshipsPodium.css';

export const WorldChampionshipsPodium = () => {
  const [podiums, setPodiums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPodiums = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'world-championships-podiums'));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        data.sort((a, b) => b.year - a.year);
        setPodiums(data);
      } catch (error) {
        console.error('Error fetching podiums: ', error);
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
    <div className="world-championships-all-podiums">
      {podiums.map((podium) => (
        <WorldChampionshipsPodiumCard
          key={podium.id}
          year={podium.year}
          podium={podium.podium}
        />
      ))}
    </div>
  );
};
