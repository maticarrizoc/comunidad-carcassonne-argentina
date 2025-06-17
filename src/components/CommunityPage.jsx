import { Navbar } from './Navbar';
import { Community } from './Community';
import { Helmet } from 'react-helmet-async'

export const CommunityPage = () => {
  return (
    <>
      <Helmet>
        <title>Comunidades | Carcassonne Argentina</title>
        <meta name="description" content="Conectá con comunidades de Carcassonne de todo el mundo, streamers, canales y herramientas." />

        <meta property="og:title" content="Comunidades | Carcassonne Argentina" />
        <meta property="og:description" content="Unite a la comunidad global de Carcassonne: grupos, canales y jugadores en todo el mundo." />
        <meta property="og:image" content="https://carcassonne.com.ar/assets/background-rXhZfgbI.png" />

        <meta name="twitter:title" content="Comunidades | Carcassonne Argentina" />
        <meta name="twitter:description" content="Streamers, canales y grupos para expandir tu experiencia Carcassonne." />
      </Helmet>

      <Navbar />
      <Community />
    </>
  );
};
