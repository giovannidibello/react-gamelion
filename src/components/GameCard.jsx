// GameCard.jsx

// importo il componente che mostra i dettagli del gioco in una sidebar
import GameSidebar from "./GameSideBar";
// importo il componente che mostra l'icona della piattaforma
import PlatformIcon from "../components/PlatformIcon";

// componente che rappresenta una singola card del gioco
const GameCard = ({ game, activeCardId, setActiveCardId }) => {

    // URL base per caricare l'immagine di copertina
    const coverBaseUrl = import.meta.env.VITE_COVER_API_URL;

    // destrutturo i dati principali del gioco
    const { id, title, cover_image, platforms } = game;

    // gestisco il click sulla card: apre/chiude la sidebar
    const handleCardClick = () => {
        // se la card è già attiva, la chiude; altrimenti la imposta come attiva
        setActiveCardId(prevId => (prevId === id ? null : id));
    };

    return (

        <>
            <div className="card" onClick={handleCardClick}>
                <div className="top-section">
                    <div className="icons">
                        <div className="social-media">
                            {platforms.map(platform => <PlatformIcon key={platform.id} platformId={platform.id} />)}
                        </div>
                    </div>
                    <img src={`${coverBaseUrl}${cover_image}`} alt={title} />
                </div>
                <div className="bottom-section">
                    <h5 className="title mb-0">{title}</h5>
                </div>
            </div>

            {activeCardId === id && <GameSidebar game={game} isOpen={true} onClose={() => setActiveCardId(null)} />}
        </>

    );
};

export default GameCard