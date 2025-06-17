import { Navbar } from './Navbar';
import { NationalTournament } from './NationalTournament';
import { Helmet } from 'react-helmet-async'

export const NationalTournamentPage = () => {
  return (
    <>
      <Helmet>
        <title>Torneo Nacional | Carcassonne Argentina</title>
        <meta name="description" content="Todo sobre el Torneo Nacional de Carcassonne: fechas, reglas y cómo clasificar." />

        <meta property="og:title" content="Torneo Nacional | Carcassonne Argentina" />
        <meta property="og:description" content="Participá o seguí el torneo más importante de Carcassonne en el país." />
        <meta property="og:image" content="https://carcassonne.com.ar/assets/background-rXhZfgbI.png" />

        <meta name="twitter:title" content="Torneo Nacional | Carcassonne Argentina" />
        <meta name="twitter:description" content="El evento que define al campeón argentino de Carcassonne." />
      </Helmet>
      <Navbar />
      <NationalTournament />
    </>
  );
};
