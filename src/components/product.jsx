import React, { Component } from "react";
import beer from "../images/beer.png";
require("../images/beer.png");
console.log(beer);
class Product extends Component {
  state = {
    count: 0
  };
  render() {
    return this.prod(this.props);
  }
  prod(props) {
    return (
      <li className="list-group-item">
        <blockquote className="blockquote">
          <p className="mb-0">
            <img src={beer} alt="beer" width="45" height="50" />
            {props.name}
          </p>

          <span
            name="quantity"
            className="badge badge-warning m-2 float-sm-right"
          >
            0
          </span>
          <button
            name="addToCart"
            className="btn btn-primary m-2 btn-sm float-sm-right"
          >
            Add +
          </button>
          <span
            name="currentPrice"
            className="badge badge-dark m-2 float-sm-right"
            style={this.style}
          >
            $ 4,50
          </span>
          <span
            name="intraDayHighestPrice"
            className="badge badge-pill badge-success m-2 float-sm-right"
          >
            $ 5,50
          </span>
          <span
            name="intraDayLowestPrice"
            className="badge badge-pill badge-danger m-2 float-sm-right"
          >
            $ 4,50
          </span>

          <footer className="blockquote-footer">
            <cite title="type">{props.description}</cite>
          </footer>
        </blockquote>
      </li>
    );
  }
}

export default Product;
