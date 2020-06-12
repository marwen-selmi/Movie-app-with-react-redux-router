import React from "react";
import { connect } from "react-redux";
import { selectStarNumber } from "../js/actions/actions";

function Stars({ rating, selectStarNumber, onlyForSearchMovie }) {
  const starsCreate = (x) => {
    let starArray = [];
    for (let i = 0; i <= 4; i++) {
      if (i < x) {
        starArray.push(
          <span
            key={Math.random()}
            className="fa fa-star checked"
            onClick={
              onlyForSearchMovie ? () => selectStarNumber(i + 1) : () => {}
            }
          ></span>
        );
      } else {
        starArray.push(
          <span
            key={Math.random()}
            className="fa fa-star"
            onClick={
              onlyForSearchMovie ? () => selectStarNumber(i + 1) : () => {}
            }
          ></span>
        );
      }
    }
    return starArray;
  };
  return <div>{starsCreate(rating)}</div>;
}

const mapDispatchToProps = (dispatch) => {
  return { selectStarNumber: (payload) => dispatch(selectStarNumber(payload)) };
};

selectStarNumber(1);

export default connect(null, mapDispatchToProps)(Stars);
