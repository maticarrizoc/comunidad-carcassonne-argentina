import { Navbar } from './Navbar';
import { NationalLeague } from './NationalLeague';
import { Helmet } from 'react-helmet-async'

export const NationalLeaguePage = () => {
  return (
    <>
      <Helmet>
        <title>Liga Nacional | Carcassonne Argentina</title>
        <meta name="description" content="Seguimiento y posiciones de la liga nacional de Carcassonne. Mirá cómo vas vos o tu jugador favorito." />

        <meta property="og:title" content="Liga Nacional | Carcassonne Argentina" />
        <meta property="og:description" content="Tablas, estadísticas y evolución de la liga de Carcassonne en Argentina." />
        <meta property="og:image" content="https://carcassonne.com.ar/assets/background-rXhZfgbI.png" />

        <meta name="twitter:title" content="Liga Nacional | Carcassonne Argentina" />
        <meta name="twitter:description" content="Tablas, estadísticas y evolución de la liga de Carcassonne en Argentina." />
      </Helmet>

      <Navbar />
      <NationalLeague />
    </>
  );
};
