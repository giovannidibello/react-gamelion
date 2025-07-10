# 🎮 Gamelion - Frontend React

Interfaccia utente pubblica per la WebApp **Gamelion**, sviluppata con **React**.  
Consuma le API fornite dal backend Laravel per visualizzare videogiochi, generi e dettagli.  
Design moderno e responsive con componenti riutilizzabili.

## 🖥️ Tecnologie utilizzate

- React
- React Router DOM
- Axios
- Bootstrap 5
- Font Awesome
- Vite

## 📸 Preview

![Demo GIF](public/gamelion-demo-fe.gif)  
> Anteprima dell’interfaccia pubblica con elenco e dettaglio giochi.

## 📁 Struttura del Progetto

react-gamelion/
├── public/
│ ├── gamelion-logo.png
│ └── gamelion-demo.gif
├── src/
│ ├── assets/ # Icone e immagini
│ ├── components/ # Card, Navbar, Footer, GameDetail, ecc.
│ ├── pages/ # HomePage, GameDetailPage
│ ├── App.jsx
│ └── main.jsx
├── .env.example
├── vite.config.js
└── README.md


## 🚀 Avvio del progetto

1. Clona la repository:

```bash
git clone https://github.com/giovannidibello/react-gamelion.git
cd react-gamelion

npm install

cp .env.example .env
# Inserisci l'URL del backend Laravel, ad esempio:
# VITE_API_URL=http://127.0.0.1:8000/api

npm run dev

Visita: http://localhost:5173

## 🎯 Funzionalità

- ✅ Visualizzazione elenco videogiochi con **card responsive**
- ✅ **Filtri** per genere e piattaforma
- ✅ **Ricerca testuale** con debounce
- ✅ Pagine di **dettaglio** per ogni gioco con immagine e descrizione
- ✅ Navigazione SPA tramite **React Router**
- ✅ Chiamate API asincrone con **Axios**
- ✅ **Design moderno e responsive** con Bootstrap

## 🧠 Obiettivi didattici

- 📌 Creare una **Single Page Application (SPA)** con React
- 📌 Utilizzare **React Router DOM** per la navigazione dinamica
- 📌 Consumare API RESTful fornite dal backend Laravel
- 📌 Progettare e riutilizzare componenti UI (es. `Card`, `Navbar`, `Footer`)
- 📌 Gestire lo stato e passaggio di props tra componenti
- 📌 Applicare uno stile **responsive** con Bootstrap 5

## 👨‍💻 Autore

- **Giovanni Di Bello**  
- [GitHub](https://github.com/giovannidibello)

