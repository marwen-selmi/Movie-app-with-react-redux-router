import React from "react";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";

function MovieList({ moviesData, movieMinimumRating, SearchMovie }) {
  return (
    <div className="movie-list">
      {moviesData
        .filter(
          (movie) =>
            movie.name
              .toUpperCase()
              .includes(SearchMovie.toUpperCase().trim()) &&
            movie.rating >= movieMinimumRating
        )
        .map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    moviesData: state.moviesData,
    movieMinimumRating: state.movieMinimumRating,
    SearchMovie: state.SearchMovie,
  };
};
export default connect(mapStateToProps)(MovieList);
