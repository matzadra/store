import React, { Fragment } from "react";
import { getCategoriesList } from "../services/categories";
//import styled from "styled-components";

class Header extends React.Component {
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
        <div>
          {this.state.data.categories.map((element, index) => {
            return (
            <button key={index}>
              {element.name.toUpperCase()}
            </button>
            )
          })}
        </div>
      </Fragment>
    );
  }
}

export default Header;







// class HelloWorld extendes React.Component {
//     constructor(props){
//     super(props);
//     this.state ={
//     products[{
//     name : " ",
//     price : " "
//     ]}
//     }
    
//     function = () => {
//     let last_planet = this.state.planets[this.state.planets.length - 1]
//     this.setState(state => ({
//     planets:[...this.state.planets]
//     }))
//     }
    
//     incrementCount(){
//     this.setState((state) => {return {count : state.count +1 }}
//     }
    
//     render(){
//     return <h1>
//     }
//     }
    