import React from "react";
import SearchMovie from "./SearchMovie";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";

const Home = () => (
  <div>
    <SearchMovie />
    <MovieList />
    <AddMovie />
  </div>
);

export default Home;
