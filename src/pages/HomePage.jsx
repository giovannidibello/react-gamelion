// HomePage.jsx

// importo axios
import axios from 'axios'

// uso di state e effect
import { useState, useEffect } from "react"

// importo il componente Card del gioco
import GameCard from '../components/GameCard';

export default function HomePage() {

    // setto lo stato del componente
    const [games, setGames] = useState([]);

    // funzione chiamata dei dati lista giochi (index)
    const fetchGames = () => {

        axios.get(`${import.meta.env.VITE_API_URL}`)

            .then(
                res => {
                    const { data } = res.data;
                    setGames(data)
                }
            )

            .catch(err => console.log(err)
            )

    }

    useEffect(fetchGames, [])

    // funzione di rendering delle card dei progetti
    const renderGames = () => {

        return games.map((game) =>

            <div className="d-flex justify-content-center col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={game.id}>
                <GameCard gameProp={game} isDetail={false} />
            </div>
        )
    }

    return (

        <>
            <div className="container mt-5 mb-3">
                <div className="row">
                    {renderGames()}
                </div>
            </div>
        </>


    );

}

