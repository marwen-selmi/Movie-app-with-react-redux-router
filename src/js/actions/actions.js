import {
  SEARCH,
  STARNUMBER,
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  GET_MOVIE_BY_ID,
} from "../constants/actionTypes";

export const handelSearch = (payload) => {
  return { type: SEARCH, payload };
};

export const selectStarNumber = (payload) => {
  return { type: STARNUMBER, payload };
};

export const addMovie = (newmovie) => {
  return { type: ADD_MOVIE, newmovie };
};

export const editMovie = (id, movieNewData) => {
  return { type: EDIT_MOVIE, id, movieNewData };
};

export const deleteMovie = (id) => {
  return { type: DELETE_MOVIE, id };
};

export const getMovieById = (id) => {
  return { type: GET_MOVIE_BY_ID, payload: id };
};
