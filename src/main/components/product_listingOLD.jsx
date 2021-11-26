import React, { Fragment } from "react";
import { getProductsId } from "../services/product"
import Header from "./header";
//import styled from "styled-components";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: { categories : [] } };
  }

  async componentDidMount() {
    const response = await getProductsId();
    this.setState({ data: response });
    console.log(response);
  }
  

  render() {
    return (
      <Fragment>
          <Header/>
        <div>
          {this.state.data.categories.map((element) => {
               for (let el in element.products){
                  var categoryName= element.name;
                  var prodId = element.products[el].id;     
                  console.log(categoryName, prodId);    

                //   return(
                //     <div key={prodId}>
                //     {categoryName + " " + prodId}
                //     </div>
                //     ) 

                
                  } 
                                                      
        }
        
        )}
        
        </div>
      </Fragment>
    );
   }
}
export default ProductList;







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

//   if(categoryName = this.props.catName) {    