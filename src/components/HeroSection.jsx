// HeroSection.jsx

// importo fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

// importo il componente delle icone delle piattaforme
import PlatformIcon from "../components/PlatformIcon";

const HeroSection = ({
    searchTerm,
    setShowSearch,
    showSearch,
    handleSearch,
    selectedPlatform,
    selectedGenre,
    setSelectedGenre,
    genres,
    sortGames,
    sortOrderTitle,
    sortOrderDate,
    filterGames
}) => {
    return (
        <div className="hero-section text-center">
            <h1 className="display-4">Scopri i tuoi giochi preferiti</h1>
            <p className="lead">Filtra per piattaforma, genere o cerca per titolo</p>

            <div className="d-flex flex-md-wrap justify-content-center custom-responsive align-items-center gap-3 mt-4">
                {/* Searchbar */}
                <div className="search position-relative">
                    <button className={`btn btn-custom btn-size ${showSearch ? "no-border" : ""}`} onClick={() => setShowSearch(!showSearch)}>🔍</button>
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

            <div className="d-flex flex-md-wrap justify-content-center align-items-center gap-3 mt-4">

                {/* Dropdown generi */}
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

                {/* Pulsanti ordinamento */}
                <div className="btn-group">
                    <button className="btn btn-custom btn-size" onClick={() => sortGames('title')}>
                        Titolo <FontAwesomeIcon icon={sortOrderTitle === "asc" ? faArrowUp : faArrowDown} />
                    </button>
                    <button className="btn btn-custom btn-size" onClick={() => sortGames('date')}>
                        Uscita <FontAwesomeIcon icon={sortOrderDate === "asc" ? faArrowUp : faArrowDown} />
                    </button>
                </div>

                {/* Pulsanti piattaforma */}
                <div className="btn-group btn-platform-custom">
                    {/* Pulsante per resettare la selezione */}
                    <button
                        className={`btn btn-platform btn-size btn-platform-size`}
                        onClick={() => filterGames(null)}
                    >
                        Tutte
                    </button>

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
