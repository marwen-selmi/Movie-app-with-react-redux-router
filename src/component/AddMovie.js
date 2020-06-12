import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { addMovie } from "../js/actions/actions";
// Modal.setAppElement("#root");

class AddMovie extends React.Component {
  state = {
    modalIsOpen: false,
    newMovie: {
      name: "",
      rating: "",
      date: "",
      image: "",
      description: "",
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
    this.props.addMovie({ ...this.state.newMovie, id: Date.now().toString() });
    this.handelModal();
  };
  render() {
    return (
      <div className="add-movie">
        <button className="add-movie-btn" onClick={this.handelModal}>
          ADD
        </button>
        <Modal isOpen={this.state.modalIsOpen}>
          <form onSubmit={this.handelSubmit}>
            <span>Movie Name</span>
            <input name="name" onChange={this.handelChange} />
            <span>Movie Rating</span>
            <input name="rating" onChange={this.handelChange} />
            <span>Movie date</span>
            <input name="date" onChange={this.handelChange} />
            <span>Movie Image</span>
            <input name="image" onChange={this.handelChange} />
            <span>Movie Description</span>
            <input name="description" onChange={this.handelChange} />
            <div className="form-btn">
              <button>Add</button>
              <button onClick={this.handelModal}>Close</button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return { addMovie: (newmovie) => dispatch(addMovie(newmovie)) };
};

export default connect(null, mapDispatchToProps)(AddMovie);
