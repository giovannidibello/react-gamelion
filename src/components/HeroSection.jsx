// HeroSection.jsx

// importo fontawesome per indicare ordinamento su e giù
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

// importo componente che mostra l'icona della piattaforma
import PlatformIcon from "../components/PlatformIcon";

const HeroSection = ({
    searchTerm,         // valore attuale del campo di ricerca
    setShowSearch,      // funzione per mostrare/nascondere la search bar
    showSearch,         // stato booleano che indica se la search bar è visibile
    handleSearch,       // funzione di gestione input ricerca
    selectedPlatform,   // Id piattaforma selezionata per filtro
    selectedGenre,      // Id genere selezionato per filtro
    setSelectedGenre,   // funzione per cambiare il genere selezionato
    genres,             // lista generi disponibili per dropdown
    sortGames,          // funzione per ordinare i giochi (per titolo o data)
    sortOrderTitle,     // ordine attuale di ordinamento per titolo ("asc" o "desc")
    sortOrderDate,      // ordine attuale di ordinamento per data uscita
    filterGames         // funzione per filtrare i giochi per piattaforma
}) => {
    return (
        <div className="hero-section text-center">
            <h1 className="display-4">Scopri i tuoi giochi preferiti</h1>
            <p className="lead">Filtra per piattaforma, genere o cerca per titolo</p>

            {/* Sezione con barra di ricerca e pulsante toggle */}
            <div className="d-flex flex-md-wrap justify-content-center custom-responsive align-items-center gap-3 mt-4">

                <div className="search position-relative">
                    {/* Pulsante per mostrare/nascondere la search bar */}
                    <button className={`btn btn-custom btn-size ${showSearch ? "no-border" : ""}`} onClick={() => setShowSearch(!showSearch)}>🔍</button>
                    {/* Campo di input per la ricerca, visibile solo se showSearch è true */}
                    <div className="search-wrapper" style={{ display: showSearch ? "block" : "none" }}>
                        <input
                            type="text"
                            placeholder="Cerca un gioco..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="search-box"
                        />
                    </div>
                </div>

            </div>
            {/* Sezione filtri per genere, ordinamento e piattaforma */}
            <div className="d-flex flex-md-wrap justify-content-center align-items-center gap-3 mt-4">

                {/* Dropdown per selezionare il genere */}
                <div>
                    <select
                        className="select-custom btn-size"
                        value={selectedGenre}
                        onChange={(e) => setSelectedGenre(e.target.value)}
                    >
                        <option value="">Tutti i generi</option>
                        {genres.map(genre => (
                            <option key={genre.id} value={genre.id}>
                                {genre.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Pulsanti per ordinare per titolo o data di uscita */}
                <div className="btn-group">
                    <button className="btn btn-custom btn-size" onClick={() => sortGames('title')}>
                        Titolo <FontAwesomeIcon icon={sortOrderTitle === "asc" ? faArrowUp : faArrowDown} />
                    </button>
                    <button className="btn btn-custom btn-size" onClick={() => sortGames('date')}>
                        Uscita <FontAwesomeIcon icon={sortOrderDate === "asc" ? faArrowUp : faArrowDown} />
                    </button>
                </div>

                {/* Pulsanti filtro piattaforma */}
                <div className="btn-group btn-platform-custom">

                    {/* Pulsante per resettare la selezione */}
                    <button
                        className={`btn btn-platform btn-size btn-platform-size`}
                        onClick={() => filterGames(null)}
                    >
                        Tutte
                    </button>

                    {/* Pulsanti per ciascuna piattaforma */}
                    {[1, 2, 3, 4, 5, 6].map(id => (
                        <button
                            key={id}
                            className={`btn btn-platform btn-size btn-platform-size`}
                            onClick={() => filterGames(id)}
                        >
                            <PlatformIcon platformId={id} />
                        </button>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
