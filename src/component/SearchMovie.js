import React from "react";
import Stars from "./Stars";
import { connect } from "react-redux";
import { handelSearch } from "../js/actions/actions";
class SearchMovie extends React.Component {
  state = {
    inputText: "",
  };
  // handelChange = (e) => {
  //   this.setState({ inputText: e.target.value });
  // };
  render() {
    return (
      <div className="search-movie">
        <input onChange={(e) => this.props.handelSearch(e.target.value)} />
        <Stars rating={this.props.movieMinimumRating} onlyForSearchMovie={1} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { movieMinimumRating: state.movieMinimumRating };
};

const mapDispatchToProps = (dispatch) => {
  return { handelSearch: (payload) => dispatch(handelSearch(payload)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie);
