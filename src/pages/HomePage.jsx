// HomePage.jsx

// importo axios
import axios from 'axios'

// uso di state e effect
import { useState, useEffect } from "react"

// importo il componente Hero
import HeroSection from '../components/HeroSection';
// importo il componente Card del gioco
import GameCard from '../components/GameCard';

export default function HomePage() {

    // setto lo stato per i giochi e i giochi filtrati
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState(games);

    // setto gli stati per i filtri (generi, genere selezionato, piattaforma selezionata e ricerca) 
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedPlatform, setSelectedPlatform] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    // setto gli stati per ordinare
    const [sortOrderTitle, setSortOrderTitle] = useState("asc");
    const [sortOrderDate, setSortOrderDate] = useState("asc");

    // setto gli stati per la visualizzazione (searchbar e card attiva)
    const [showSearch, setShowSearch] = useState(false);
    const [activeCardId, setActiveCardId] = useState(null);

    // funzione chiamata dei dati lista giochi (index)
    const fetchGames = (search = "") => {

        axios.get(`${import.meta.env.VITE_API_URL}`, {
            params: { search }
        })

            .then(
                res => {
                    const { data } = res.data;
                    setGames(data)
                }
            )

            .catch(err => console.log(err)
            )

    }

    // funzione per filtrare tramite cerca
    const handleSearch = (event) => {
        console.log("Valore digitato:", event.target.value);
        setSearchTerm(event.target.value);
        fetchGames(event.target.value);
    };

    // funzione per filtrare per piattaforma
    const filterGames = (id) => {
        setSelectedPlatform(id)
    };

    // funzione per ordinare i giochi
    const sortGames = (type) => {
        let sorted = [...filteredGames];

        if (type === "title") {
            const newOrder = sortOrderTitle === "asc" ? "desc" : "asc";
            setSortOrderTitle(newOrder);
            sorted.sort((a, b) =>
                newOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
            );
        }

        if (type === "date") {
            const newOrder = sortOrderDate === "asc" ? "desc" : "asc";
            setSortOrderDate(newOrder);
            sorted.sort((a, b) =>
                newOrder === "asc"
                    ? new Date(a.release_date) - new Date(b.release_date)
                    : new Date(b.release_date) - new Date(a.release_date)
            );
        }

        setFilteredGames(sorted);
    };


    useEffect(() => {
        // debounce per la ricerca
        const delaySearch = setTimeout(() => {
            fetchGames(searchTerm);
        }, 300);

        return () => clearTimeout(delaySearch);
    }, [searchTerm]);

    useEffect(() => {
        // aggiorno la lista filtrata quando i giochi cambiano
        setFilteredGames(games);
    }, [games]);

    // funzione per estrai generi unici
    useEffect(() => {
        const uniqueGenres = new Map();

        games.forEach(game => {
            game.genres?.forEach(genre => {
                if (!uniqueGenres.has(genre.id)) {
                    uniqueGenres.set(genre.id, genre.name);
                }
            });
        });

        const genresArray = Array.from(uniqueGenres, ([id, name]) => ({ id, name }));
        setGenres(genresArray);
    }, [games]);


    // funzione filtri combinati
    useEffect(() => {
        let updatedList = [...games];

        // filtro per genere
        if (selectedGenre !== "") {
            updatedList = updatedList.filter(game =>
                game.genres?.some(g => g.id === parseInt(selectedGenre))
            );
        }

        // filtro per piattaforma
        if (selectedPlatform !== null) {
            updatedList = updatedList.filter(game =>
                game.platforms?.some(p => p.id === selectedPlatform)
            );
        }

        // filtro per titolo
        if (searchTerm !== "") {
            updatedList = updatedList.filter(game =>
                game.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredGames(updatedList);
    }, [games, selectedGenre, selectedPlatform, searchTerm]);


    // funzione di rendering delle card dei giochi
    const renderGames = () => {

        return filteredGames.map((game) =>

            <div key={game.id} className="d-flex justify-content-center col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <GameCard gameProp={game} activeCardId={activeCardId} setActiveCardId={setActiveCardId} />
            </div>
        )
    }

    return (

        <>
            <div className="container mb-3">

                <HeroSection searchTerm={searchTerm}
                    setShowSearch={setShowSearch}
                    showSearch={showSearch}
                    handleSearch={handleSearch}
                    selectedGenre={selectedGenre}
                    setSelectedGenre={setSelectedGenre}
                    genres={genres}
                    sortGames={sortGames}
                    sortOrderTitle={sortOrderTitle}
                    sortOrderDate={sortOrderDate}
                    filterGames={filterGames} />

                <div className="row mt-3">
                    {renderGames()}
                </div>
            </div >
        </>

    );

}



