import "./TitleCards.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzAxM2RmZjM3NzQ2NWZhMTUzZTRhNWQxYmIyZmJkNSIsIm5iZiI6MTc1MzQyNzc2MC45NDUsInN1YiI6IjY4ODMyZjMwODk5OTAzMTFlYzUyYTRkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-3I6Dp9pWKjnD-2edc0glKGNbMBwVlriYueyYSYDm2o",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card, index) => {
          return (
            <Link to={`player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
