import "./styles.css";
import { useState } from "react";
const genreDictionary = {
  Action: [
    [
      "Godzilla vs. Kong",
      "In the film, Kong clashes with Godzilla as humans lure the ape into the Hollow Earth to retrieve a power source for a secret weapon to stop Godzilla's mysterious rampages",
      "⭐⭐⭐⭐"
    ],
    [
      "Boss Level",
      "Boss Level is a 2021 American science fiction action film directed by Joe Carnahan and written by Carnahan and Chris and Eddie Borey, from a story by the Boreys. It stars Frank Grillo as a retired special forces soldier who tries to escape a never-ending time loop that results in his death",
      "⭐⭐⭐"
    ],
    [
      "Mortal Kombat",
      "Based on the popular fighting video game. Mortal Kombat is a tournament where fighters duel to a death match. A sorcerer from another world named Shang Tsung invites some of the world's best fighters to compete in the tournament, along with them comes characters such as Liu Kang, Johnny Cage and Sonya Blade",
      "⭐⭐⭐⭐"
    ],
    [
      "Those Who Wish Me Dead",
      "The film follows a boy (Finn Little) who witnesses the murder of his father and goes on the run with a smokejumper (Angelina Jolie) in the Montana wilderness to escape a pair of assassins (Nicholas Hoult and Aidan Gillen) hired to silence him; Jon Bernthal, Medina Senghore, and Jake Weber also star",
      "⭐⭐⭐⭐⭐"
    ],
    [
      "F9",
      "Plot. In 1989, Jack Toretto–father of Dominic, Jakob and Mia–participates in a late model race, with his sons working in the pit crew. Dom argues with rival racer Kenny Linder about his dirty tactics. During the race, Linder's car clips Jack's bumper, causing his car to hit a wall and explode, killing him",
      "⭐⭐"
    ]
  ],
  Drama: [
    [
      "Avengers Endgame",
      "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. ... In the film, the surviving members of the Avengers and their allies attempt to reverse the destruction caused by Thanos in Infinity War",
      "⭐⭐⭐⭐"
    ],
    [
      "Parasite",
      "Parasite follows the Kim family struggling to make ends meet until son Ki-woo comes across an unexpected opportunity. With no experience teaching English, he decides to accept a job tutoring Da-hye, a daughter from the wealthy Park family",
      "⭐⭐⭐⭐⭐"
    ],
    [
      "Casablanca",
      "Filmed and set during World War II, it focuses on an American expatriate (Bogart) who must choose between his love for a woman (Bergman) or helping her and her husband (Henreid), a Czech resistance leader, escape from the Vichy-controlled city of Casablanca to continue his fight against the Germans",
      "⭐⭐"
    ],
    [
      "Mission Impossible",
      "An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization. Based on the hit television series. Jim Phelps (Jon Voight) was sent to Prague for a mission to prevent the theft of classified material",
      "⭐⭐⭐"
    ],
    [
      "The Godfather",
      "The Godfather is set in the 1940s and takes place entirely within the world of the Corleones, a fictional New York Mafia family. It opens inside the dark office of the family patriarch, Don Vito Corleone (also known as the Godfather and played by Brando), on the wedding day of his daughter, Connie (Talia Shire)",
      "⭐⭐⭐⭐⭐"
    ]
  ],
  "Sci-Fi": [
    [
      "Another Earth",
      "Another Earth is a film animated by one stunning image: A new planet four times the size of the moon appears in the sky of Earth. This startling apparition gives a deeper meaning to everything in the story, especially when it is discovered, that the planet is indeed, as the title promises, another Earth",
      "⭐⭐⭐⭐"
    ],
    [
      "Source Code",
      "It stars Jake Gyllenhaal as a U.S. Army Captain named Colter Stevens, who is sent into an eight-minute digital recreation of a real-life train explosion, tasked with figuring out the identity of the terrorist who bombed it. Michelle Monaghan, Vera Farmiga, and Jeffrey Wright play supporting roles",
      "⭐⭐⭐"
    ],
    [
      "Pacific Rim",
      "The Pacific Rim refers to the geographic area surrounding the Pacific Ocean. The Pacific Rim covers the western shores of North America and South America, and the shores of Australia, eastern Asia, and the islands of the Pacific",
      "⭐⭐⭐⭐"
    ],
    [
      "Inception",
      "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets",
      "⭐⭐⭐⭐"
    ],
    [
      "Interstellar",
      "Interstellar is a 2014 epic science fiction drama film co-written, directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity",
      "⭐⭐⭐⭐⭐"
    ]
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
      <h3>This app clusters movies based on genre</h3>

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
              <span style={{ fontFamily: "sans-serif", fontWeight: "bolder" }}>
                {" "}
                {item[0]}
              </span>
              <div style={{ border: "1px solid" }}>{item[1]}</div>
              <div style={{ border: "1px solid" }}>{item[2]}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
