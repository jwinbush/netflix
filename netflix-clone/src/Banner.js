import React, { useEffect, useState } from "react"; //rfce shortcut
import axios from "./axios";
import requests from "./requests"; //these file names are case sensitive
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1) //finds new picture for header randomly
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie); //clg shortcut for console

  function truncate(str, n) {
    //will put ... when sentence reaches certain length
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>{" "}
        {/*if statement compacted */}
        {/* Buttons Banner */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
