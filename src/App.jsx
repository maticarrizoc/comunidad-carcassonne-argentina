import { HomePage } from './components/HomePage';
import { NewsPage } from './components/NewsPage';
import { New } from './components/New';
import { NationalTeamPage } from './components/NationalTeamPage';
import { NationalTournamentPage } from './components/NationalTournamentPage';
import { NationalLeaguePage } from './components/NationalLeaguePage';
import { CommunityPage } from './components/CommunityPage';
import { Footer } from './components/Footer';
import { ContactPage } from './components/ContactPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'


import './App.css'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/noticias" element={<NewsPage />} />
          <Route path="/noticias/:id" element={<New />} />
          <Route path="/seleccion-nacional" element={<NationalTeamPage />} />
          <Route path="/comunidad" element={<CommunityPage />} />
          <Route path="/torneos/nacional" element={<NationalTournamentPage />} />
          <Route path="/torneos/liga-nacional" element={<NationalLeaguePage />} />
          <Route path='/contacto' element={<ContactPage />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
