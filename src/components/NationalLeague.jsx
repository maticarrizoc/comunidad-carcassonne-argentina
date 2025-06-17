import LoadingSpinner from './LoadingSpinner';
import { useState } from 'react';
import EscudoLiga from '../assets/liga-argentina-logo.png';
import './NationalLeague.css';

export const NationalLeague = () => {

  const [activeTab, setActiveTab] = useState(0);

  const [activeTabHistory, setActiveTabHistory] = useState(0);

  return (
    <section className='national-league'>
      <img src={EscudoLiga} alt="" className='escudo-liga' />
      <h1>LIGA NACIONAL DE CARCASSONNE</h1>
      <h2>Actualmente estamos trabajando para poder ofrecer esta competición</h2>
      <h2>Si estás interesado en participar, llená este <a href="https://forms.gle/cwLgpX2VCNtbXqdz5" target="_blank">FORMULARIO</a></h2>
      <LoadingSpinner />

      <div className="tabs-national-tournament">
        <div className="tabs-header">
          <button
            className={activeTab === 0 ? 'active tabs-button' : 'tabs-button'}
            onClick={() => setActiveTab(0)}
          >1° División
          </button>
          <button
            className={activeTab === 1 ? 'active tabs-button' : 'tabs-button'}
            onClick={() => setActiveTab(1)}
          >2° División
          </button>
          <button
            className={activeTab === 2 ? 'active tabs-button' : 'tabs-button'}
            onClick={() => setActiveTab(2)}
          >3° División
          </button>
          <button
            className={activeTab === 3 ? 'active tabs-button' : 'tabs-button'}
            onClick={() => setActiveTab(3)}
          >4° División
          </button>
        </div>
        <div className="tabs-content">
          {activeTab === 0 && (
            <div className="tabs-content-1">
              
            </div>
          )}
          {activeTab === 1 && (
            <div className="tabs-content-2">
              
            </div>
          )}
          {activeTab === 2 && (
            <div className="tabs-content-3">
              
            </div>
          )}
          {activeTab === 3 && (
            <div className="tabs-content-4">
              
            </div>
          )}
        </div>
      </div>
      <div className="tabs-history-national-tournament">
        <div className="tabs-header">
          <button
            className={activeTabHistory === 0 ? 'active tabs-button' : 'tabs-button'}
            onClick={() => setActiveTabHistory(0)}
          >
            Historial de podios
          </button>
          <button
            className={activeTabHistory === 1 ? 'active tabs-button' : 'tabs-button'}
            onClick={() => setActiveTabHistory(1)}
          >
            Representaciones en el Mundial
          </button>
        </div>
        <div className="tabs-content">
          {activeTabHistory === 0 && (
            <div className="tabs-content-1">
            </div>
          )}
          {activeTabHistory === 1 && (
            <div className="tabs-content-4">
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
