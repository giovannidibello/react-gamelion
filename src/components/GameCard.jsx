// GameCard.jsx

// importo il componente sidebar
import GameSidebar from "./GameSideBar";
// importo il componente delle icone delle piattaforme
import PlatformIcon from "../components/PlatformIcon";

const GameCard = ({ gameProp, activeCardId, setActiveCardId }) => {

    const coverBaseUrl = import.meta.env.VITE_COVER_API_URL;

    const { id, title, cover_image, platforms } = gameProp;

    // funzione al click sulla card
    const handleCardClick = () => {
        setActiveCardId(prevId => (prevId === id ? null : id)); // cambio card e chiudo la precedente
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

            {activeCardId === id && <GameSidebar game={gameProp} isOpen={activeCardId === id} onClose={() => setActiveCardId(null)} />}

        </>

    );
};

export default GameCard