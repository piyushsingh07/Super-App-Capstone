import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieBox from "../compoonents/MovieBox";
import MovieChip from "../compoonents/MovieChip";


const MOVIE = [
  {
    id: 0,
    movie: "Action",
  },

  {
    id: 1,
    movie: "Drama",
  },

  {
    id: 2,
    movie: "Romance",
  },

  {
    id: 3,
    movie: "Thriller",
  },

  {
    id: 4,
    movie: "Horror",
  },

  {
    id: 5,
    movie: "Western",
  },

  {
    id: 6,
    movie: "Fantasy",
  },

  {
    id: 7,
    movie: "Fiction",
  },

  {
    id: 8,
    movie: "Music",
  },
];


const Selection = () => {
  const navigate = useNavigate();
  const [selectedMovies, setSelectedMovies] = useState([]);

  const moveNext = () => {
    if (selectedMovies.length < 3) {
      alert("Please select atleast 3 movies");
      return;
    } else {
      localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies));
      setSelectedMovies([]);
      navigate("/dashboard")
    }

  };


  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
        }}
      >
        {
          MOVIE.map((category) => (
            <div key={category.id}>
              <MovieBox
                selectedMovies={selectedMovies}
                setSelectedMovies={setSelectedMovies}
                category={category}
              />
            </div>
          ))
        }
      </div>

      {selectedMovies.length < 3 && (
        <p style={{ color: "red" }}>
          Please select at least 3 movies
        </p>
      )}

      <div>
        {selectedMovies.map((category) => (
          <p key={category.id}>
            <MovieChip
              key={category.id}
              category={category}
              setSelectedMovies={setSelectedMovies}
            />
          </p>
        ))}
      </div>

      <button onClick={moveNext}>Next</button>
    </div>
  );
}

export default Selection
