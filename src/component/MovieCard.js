import React from "react";
import Stars from "./Stars";
import Modal from "react-modal";
import { connect } from "react-redux";
import { editMovie, deleteMovie } from "../js/actions/actions";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

class MovieCard extends React.Component {
  state = {
    modalIsOpen: false,
    newMovie: {
      name: this.props.movie.name,
      rating: this.props.movie.rating,
      date: this.props.movie.date,
      image: this.props.movie.image,
      description: this.props.movie.description,
    },
  };
  handelModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    });
  };

  handelChange = (e) => {
    this.setState({
      newMovie: { ...this.state.newMovie, [e.target.name]: e.target.value },
    });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    this.props.editMovie(this.props.movie.id, {
      ...this.state.newMovie,
      id: Math.random(),
    });
  };
  render() {
    return (
      <div className="movie-card">
        <div className="container-stars-button">
          <Stars rating={this.props.movie.rating} />
          <button
            className="card-delete-btn"
            onClick={() => {
              this.props.deleteMovie(this.props.movie.id);
              alert("you deleted a movie");
            }}
          >
            Remove
          </button>
          <button className="card-edit-btn" onClick={this.handelModal}>
            Edit Movie Data
          </button>
        </div>
        <img src={this.props.movie.image} alt={this.props.movie.name} />
        <h3> {this.props.movie.name} </h3>
        <span> {this.props.movie.date} </span>
        <Link to={`/movie-description/${this.props.movie.id}`}>
          <button className="movie-decreption-btn"> Movie Description </button>
        </Link>

        <Modal isOpen={this.state.modalIsOpen}>
          <form onSubmit={this.handelSubmit}>
            <span>Movie Name</span>
            <input
              name="name"
              onChange={this.handelChange}
              value={this.state.newMovie.name}
            />
            <span>Movie Rating</span>
            <input
              name="rating"
              onChange={this.handelChange}
              value={this.state.newMovie.rating}
            />
            <span>Movie date</span>
            <input
              name="date"
              onChange={this.handelChange}
              value={this.state.newMovie.date}
            />
            <span>Movie Image</span>
            <input
              name="image"
              onChange={this.handelChange}
              value={this.state.newMovie.image}
            />
            <span>Movie Description</span>
            <input
              name="description"
              onChange={this.handelChange}
              value={this.state.newMovie.description}
            />
            <div className="form-btn">
              <button>Edit</button>
              <button onClick={this.handelModal}>Close</button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    editMovie: (id, movieNewData) => dispatch(editMovie(id, movieNewData)),
    deleteMovie: (id) => dispatch(deleteMovie(id)),
  };
};

export default connect(null, mapDispatchToProps)(MovieCard);
