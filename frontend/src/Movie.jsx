function Movie() {
  const movies = [
    {
      title: "Pushpa 2",
      year: "2024",
      genre: "Action • Drama",
      rating: "6.0",
      image:
        "https://image.tmdb.org/t/p/w500/1fT6GIpH9nqVf0LJ5b3QWQ7Y1Y7.jpg",
    },
    {
      title: "Devara",
      year: "2024",
      genre: "Action • Drama",
      rating: "6.5",
      image:
        "https://image.tmdb.org/t/p/w500/5r8k4XJ0xM8Y4Z7w1Q2P9V6N3T4.jpg",
    },
    {
      title: "Kalki 2898 AD",
      year: "2024",
      genre: "Sci-Fi • Action",
      rating: "8.0",
      image:
        "https://image.tmdb.org/t/p/w500/6JjfSchsU7Tq5YbZ7qP4T3c2c7L.jpg",
    },
    {
      title: "Hanu-Man",
      year: "2024",
      genre: "Fantasy • Action",
      rating: "7.9",
      image:
        "https://image.tmdb.org/t/p/w500/2rY9G4X7Y3T7m5G7Q5L7W3c8d9K.jpg",
    },
    {
      title: "RRR",
      year: "2022",
      genre: "Action • Drama",
      rating: "8.0",
      image:
        "https://image.tmdb.org/t/p/w500/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg",
    },
    {
      title: "Jersey",
      year: "2019",
      genre: "Drama • Sports",
      rating: "8.5",
      image:
        "https://image.tmdb.org/t/p/w500/2Z8k1lJ8s3K7Y4X9V5Q2P6N1M0R.jpg",
    },
  ];

  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.title}>
          <div className="poster-wrapper">

            <img
              src={movie.image}
              alt={movie.title}
              className="movie-poster"
            />

            <div className="poster-overlay">

              <span className="rating">
                ★ {movie.rating}
              </span>

              <button className="play-button">
                ▶
              </button>

              <div className="overlay-info">
                <h2>{movie.title}</h2>
                <p>
                  {movie.year} • {movie.genre}
                </p>
              </div>

            </div>
          </div>

          <div className="movie-info">
            <h2>{movie.title}</h2>

            <div className="movie-details">
              <span>{movie.year}</span>
              <span>{movie.genre}</span>
              <span>★ {movie.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Movie;
