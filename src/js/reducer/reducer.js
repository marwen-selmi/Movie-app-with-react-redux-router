import { moviesData } from "../data";
import {
  SEARCH,
  STARNUMBER,
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  GET_MOVIE_BY_ID,
} from "../constants/actionTypes";

const intialState = {
  moviesData: moviesData,
  SearchMovie: "",
  movieMinimumRating: 1,
  movie: {},
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, SearchMovie: action.payload };
    case STARNUMBER:
      return { ...state, movieMinimumRating: action.payload };
    case ADD_MOVIE:
      return { ...state, moviesData: state.moviesData.concat(action.newmovie) };
    case EDIT_MOVIE:
      return {
        ...state,
        moviesData: state.moviesData.map((movie) =>
          movie.id === action.id ? action.movieNewData : movie
        ),
      };
    case DELETE_MOVIE:
      return {
        ...state,
        moviesData: state.moviesData.filter((movie) => movie.id !== action.id),
      };
    case GET_MOVIE_BY_ID:
      return {
        ...state,
        movie: state.moviesData.find((movie) => movie.id === action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
