import "./styles.css";
import { useState } from "react";
const genreDictionary = {
  Action: [
    ["Godzilla vs. Kong", "4 star", "Demo Description"],
    ["Boss Level", "3 star", "Demo Description"],
    ["Mortal Kombat", "3.5 star", "Demo Description"],
    ["Those Who Wish Me Dead", "4.5 star", "Demo Description"],
    ["F9", "4 star", "Demo Description"]
  ],
  Drama: [
    ["Avengers Endgame", "4 star", "Demo Description"],
    ["Parasite", "4.5 star", "Demo Description"],
    ["Casablanca", "4 star", "Demo Description"],
    ["Mission Impossible", "4.5 star", "Demo Description"],
    ["The Godfather", "4 star", "Demo Description"]
  ],
  "Sci-Fi": [
    ["Another Earth", "3.5 star", "Demo Description"],
    ["Source Code", "4 star", "Demo Description"],
    ["Pacific Rim", "4.5 star", "Demo Description"],
    ["Inception", "3.5 star", "Demo Description"],
    ["Interstellar", "4.5 star", "Demo Description"]
  ]
};
const genre = Object.keys(genreDictionary);
export default function App() {
  const [movies, setMovies] = useState([]);
  const [itemCounter, setItemCounter] = useState(0);
  function genreClickHandler(item) {
    var movies = genreDictionary[item];
    setMovies(movies);
    var counter = itemCounter + 1;
    setItemCounter(counter);
  }
  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "0.5rem",
          margin: "1.5rem 0.5rem"
        }}
      >
        Movie Recomendation App
      </h1>

      {genre.map((item) => {
        return (
          <span
            onClick={() => genreClickHandler(item)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem",
              cursor: "pointer",
              border: "1px solid",
              borderRadius: "0.5rem",
              margin: "1rem 0.3rem"
            }}
            key={item}
          >
            {item}
          </span>
        );
      })}
      <hr />
      <ul>
        {movies.map((item) => {
          return (
            <li
              key={item}
              style={{
                listStyle: "none",
                padding: "0.5rem",
                border: "1px dashed",
                borderRadius: "0.5rem",
                margin: "1rem 6rem"
              }}
            >
              {item[0]}
              <div style={{ border: "1px solid" }}>{item[1]}</div>
              <div style={{ border: "1px solid" }}>{item[2]}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
