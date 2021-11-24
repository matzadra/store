import React, { Fragment } from "react";
import { getCategoriesList } from "../services/categories";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: { categories: [] } };
  }

  async componentDidMount() {
    const response = await getCategoriesList();
    this.setState({ data: response });
  }

  render() {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <ul>
          {this.state.data.categories.map((element, index) => {
            return <li key={index}>{element.name}</li>;
          })}
        </ul>
      </Fragment>
    );
  }
}

export default HelloWorld;
