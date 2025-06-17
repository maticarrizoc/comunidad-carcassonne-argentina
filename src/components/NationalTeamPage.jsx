import { Navbar } from './Navbar';
import { NationalTeam } from './NationalTeam';
import { Helmet } from 'react-helmet-async'

export const NationalTeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Selección Nacional | Carcassonne Argentina</title>
        <meta name="description" content="Conocé a los jugadores que representan a Argentina en competencias internacionales de Carcassonne." />

        <meta property="og:title" content="Selección Nacional | Carcassonne Argentina" />
        <meta property="og:description" content="Jugadores de élite que representan a Argentina en torneos internacionales de Carcassonne." />
        <meta property="og:image" content="https://carcassonne.com.ar/assets/background-rXhZfgbI.png" />

        <meta name="twitter:title" content="Selección Nacional | Carcassonne Argentina" />
        <meta name="twitter:description" content="Los mejores jugadores de Carcassonne del país, en un solo equipo." />
      </Helmet>
      <Navbar />
      <NationalTeam />
    </>
  );
};
