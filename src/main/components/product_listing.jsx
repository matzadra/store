import React, { Fragment } from "react";
import { getProductsId } from "../services/product"

//import styled from "styled-components";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: { categories : [] } };
    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    const response = await getProductsId();
    this.setState({ data: response });
  }

  buildFilteredCategoryProducts(categoryParam) {
    //filtrar categories ( vou passar clothes e techs, aqui vc passa qual category quer)
    const filteredCategories = this.state.data.categories.filter(fil => fil.name === categoryParam);

    let categoryProducts = [];

    //percorrer filtered. Pode ser com for.
    filteredCategories.forEach(category => {
      //percorrer products. Pode ser com for.
      category.products.forEach(product => {
        const categoryProduct = (<div key= {product.id} >
          {`${category.name} ${product.id}`}
        </div>);

        //adicionando div no array. Return vai quebrar a stack e sair do loop.
        categoryProducts.push(categoryProduct);
      })
    })
    return categoryProducts;
  } 

  teste(){
    
  }
  buildCategoryProducts() {
    //filtrar categories ( vou passar clothes e techs, aqui vc passa qual category quer)
    const filteredCategories = this.state.data.categories;

    let categoryProducts = [];

    //percorrer filtered. Pode ser com for.
    filteredCategories.forEach(category => {
      //percorrer products. Pode ser com for.
      category.products.forEach(product => {
        const categoryProduct = (<div key= {product.id} >
          {`${category.name} ${product.id}`}
        </div>);

        //adicionando div no array. Return vai quebrar a stack e sair do loop.
        categoryProducts.push(categoryProduct);
      })
    })
    return categoryProducts;
  }  

  handleClick(){
    this.setState({ data: { categories: [] } })
  }


  render() {
    return (
      <Fragment>
        <div>
          {this.buildCategoryProducts()}
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