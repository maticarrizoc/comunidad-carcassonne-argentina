import { Navbar } from './Navbar';
import { News } from './News';
import { Helmet } from 'react-helmet-async'

export const NewsPage = () => {
  return (
    <>
      <Helmet>
        <title>Noticias | Carcassonne Argentina</title>
        <meta name="description" content="Enterate de todas las novedades de la comunidad Carcassonne Argentina: eventos, torneos, amistosos y más." />
        <meta property="og:title" content="Noticias | Carcassonne Argentina" />
        <meta property="og:description" content="Lo último sobre Carcassonne en Argentina: eventos, torneos, amistosos y más." />
        <meta property="og:image" content="https://carcassonne.com.ar/assets/background-rXhZfgbI.png" />
        <meta name="twitter:title" content="Noticias | Carcassonne Argentina" />
        <meta name="twitter:description" content="No te pierdas ninguna noticia de la comunidad Carcassonne en Argentina." />
      </Helmet>
      <Navbar />
      <News />
    </>
  );
};

