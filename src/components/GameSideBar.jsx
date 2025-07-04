// GameSideBar.jsx

// componente che mostra i dettagli di un gioco in una sidebar laterale
const GameSideBar = ({ game, isOpen, onClose }) => {

    // estraggo generi e piattaforme dal gioco
    const { genres, platforms } = game;

    return (
        // contenitore della sidebar, con classi dinamiche per visibilità e overlay
        <div className={`sidebar ${isOpen ? "overlay visible" : ""}`}>
            <button className="close-btn" onClick={onClose}>✖</button>
            <h2>{game.title}</h2>
            <p>{game.description}</p>
            <h5><span className="orange-text me-2">Uscita</span>{new Date(game.release_date).toLocaleDateString("it-IT")}</h5>
            <h5><span className="orange-text me-2">Genere</span>{genres.map(g => g.name).join(", ")}</h5>
            <h5><span className="orange-text me-2">Sviluppatore</span>{game.developer}</h5>
            <h5><span className="orange-text me-2">Editore</span>{game.publisher}</h5>
            <h5 className="mt-4">
                {platforms.map(p => (
                    <span key={p.id} className="badge  mb-2 me-2" style={{ backgroundColor: p.color }}>
                        {p.name}
                    </span>
                ))}
            </h5>
        </div>
    );
};

export default GameSideBar;


