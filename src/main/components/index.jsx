import React from "react";
import Header from ".";
import ProductList from "./product_listing";
import { Fragment } from "react";

class Main extends React.Component {
  constructor(props) {
     super(props);
  }

  render() {
    return (
      <Fragment>
      <ProductList/>
      </Fragment>
    );
  }
}

export default Main;