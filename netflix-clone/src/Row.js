// rfce shortcut
import React, { useState, useEffect } from "react";
import axios from "./axios"; // axios.js stuff
import "./Row.css"; // css file
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  //isLargeRow is from App.css
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(""); //when a thumbnail is clicked the trailerUrl is captured and trailer is played

  // A snippet of code which runs based on a specific condition
  useEffect(() => {
    // if bracket is [], run once when row loads, and don't run again.
    async function fetchData() {
      const request = await axios.get(fetchUrl); //fetches Url from axios.js file
      setMovies(request.data.results); // movies data results request
      return request; // prints request data for movies
    }
    fetchData();
  }, [fetchUrl]); //any variables used in useEffects has to be included in this array

  console.table(movies); //console.table to view table of movies in console
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      //If trailer is open already it will close if another trailer is clicked
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = URLSearchParams(new URL(url).search); //This searches for trailer and grabs trailer ID of YouTube video
          setTrailerUrl(urlParams.get("v")); //gets the value of v in url of trailer
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* several row__poster(s) */}

        {movies.map((movie) => (
          <img
            key={movie.id} //makes images render quicker
            onClick={() => handleClick(movie)} //movie is played on click. const has to be created for handleClick to function
            className={`row__poster ${isLargeRow && "row__posterLarge"}`} //if largeRow is true make poster large in row.css
            // if isLargeRow choose poster cover else choose backdrop movie cover
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          /> //gives me the images of movies and name. needed base_url for images display
        ))}
      </div>
      {/* Trailer is shown if image is clicked/trailerUrl */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
//2:50:00 on video