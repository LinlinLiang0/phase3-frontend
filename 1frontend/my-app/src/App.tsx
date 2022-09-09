import axios from "axios";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import "./App.css";
import { Box, Button } from "@mui/material";
import MyHeader from "./stories/myHeader/MyHeader";
import { SubmitForm } from "./stories/SubmitForm";
import { Header } from "./stories/Header";


function App() {
  const MOVIE_BASE_API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "e284aa4ec61839a5710fd6d673b11217";
  const img_path = "https://image.tmdb.org/t/p/w500";
  const [movieName, setMovieName] = useState("");
  const [movieInfo, setMovieInfo] = useState<undefined | any>(undefined);


  return (
    <div>
      <MyHeader></MyHeader>
      <h1 
      id="head"
      style={{textAlign: "center",
                  fontFamily: "cursive"}}>
                  Movie Search</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>

      <div id="search">
        <TextField
          id="search-bar"
          className="text"
          value={movieName}
          onChange={(prop: any) => {
            setMovieName(prop.target.value);
          }}
          label="Enter a Movie Name..."
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
       <Button id="btn"
            onClick={() => {
              search();
            }}
          >
            <SearchIcon style={{ fill: "blue" }} />
            Search
          </Button>
        </div>
      </div>


      {movieInfo === undefined ? (
        <p style={{textAlign: "center"}}>movie not found</p>
      ) : (
        <div id="movie-result">
          <div id="image">
            <Box>
            {movieInfo.poster_path === null ? (
            <p>No image found</p>
          ) : (
            <img 
            height="400px"
            width="300px"
            alt={movieInfo.results[0].title}
            src={img_path+movieInfo.results[0].poster_path} />
          )}
            </Box>
         </div>
         <div id="text">
            <Box>
              <p>
            <h1 style={{ fontStyle: "bold"}}>{movieInfo.results[0].title}</h1>
            <span style={{ fontStyle: "italic"}}>Rating: </span>{movieInfo.results[0].vote_average} 
            <br />
            <span style={{ fontStyle: "italic"}}>Release date: </span>{movieInfo.results[0].release_date} 
           <br />
           <span style={{ fontStyle: "italic"}}>Overview: </span>{movieInfo.results[0].overview} 
          </p>
            </Box>
         
      </div>  
        </div>
      )}
    </div>
  );

  function search() {
    axios
      .get(MOVIE_BASE_API_URL + `/search/movie?api_key=${API_KEY}&query=` + movieName)
      .then((res) => {
        console.log(res.data);
        setMovieInfo(res.data);
      })
      .catch((err) => {
        console.log("Movie not found");
        setMovieInfo(undefined);
      });
  }
}

export default App;