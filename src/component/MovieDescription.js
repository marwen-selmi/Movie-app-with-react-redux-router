import React from "react";
import { connect } from "react-redux";
import { getMovieById } from "../js/actions/actions";

class MovieDescription extends React.Component {
  componentDidMount() {
    this.props.getMovieById(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <p>{this.props.movie.description}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, { getMovieById })(MovieDescription);
