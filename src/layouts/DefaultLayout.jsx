// importo il componente segnaposto della libreria di router
import { Outlet } from "react-router-dom";

// importo i componenti del layout
import Header from "../components/Header";


export default function DefaultLayout() {

    return (
        <>
            <div className="app-bg">
                <Header />
                <main className="container">
                    <Outlet />
                </main>
            </div>
        </>
    );
}