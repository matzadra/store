import React from "react";
import ProductListing from "./ProductListing";
import { Fragment } from "react";

class Main extends React.Component {
  constructor(props) {
     super(props);
  }

  render() {
    return (
      <Fragment>
      <ProductListing/>
      </Fragment>
    );
  }
}

export default Main;