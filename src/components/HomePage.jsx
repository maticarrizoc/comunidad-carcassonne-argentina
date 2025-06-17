import { HomeBanner } from './HomeBanner';
import { Navbar } from './Navbar';
import { Welcome } from './Welcome';
import { Social } from './Social';
import { HomeNews } from './HomeNews';
import { Ranking } from './Ranking';
import { Helmet } from 'react-helmet-async'

export const HomePage = () => {
  return (
    <>
     <Helmet>
        <title>Inicio | Carcassonne Argentina</title>
        <meta name="description" content="Bienvenido a la comunidad Carcassonne Argentina. Enterate de todas las novedades del juego." />
        <meta property="og:title" content="Inicio | Carcassonne Argentina" />
        <meta property="og:description" content="Noticias, comunidad, torneos y más sobre Carcassonne en Argentina." />
        <meta property="og:image" content="https://carcassonne.com.ar/assets/background-rXhZfgbI.png" />
        <meta name="twitter:title" content="Inicio | Carcassonne Argentina" />
        <meta name="twitter:description" content="Conectate con el mundo de Carcassonne en Argentina." />
      </Helmet>
      <HomeBanner />
      <Navbar />
      <Welcome />
      <Social />
      <HomeNews />
      <Ranking />
    </>
  );
};
