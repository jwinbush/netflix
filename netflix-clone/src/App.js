import React from 'react'; // Apps.css and ./Row and ./requests are files that import data
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav.js';
// import Footer from './Footer.js';
// import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      {/* Title will be displayed in each row on the Row.js file */}
      <Row title ="New Releases" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title ="Trending Now" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title ="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row title ="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow />
      <Row title ="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow />
      <Row title ="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow />
      <Row title ="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow />
      <Row title ="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
// only one default export allowed in file
