import React, { Fragment } from "react";
import { getProductsId } from "../services/product";
import { getCategoriesList } from "../services/categories";
//import styled from "styled-components";

class ProductListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: { data: { categories: [] } },
      product: { data: { categories: [] } },
      filteredProduct: { data: { categories: [] } },
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  async handleEvent(event) {
    var prodArr = []
    const testName = event.target.id;
    const testeDois = this.buildFilteredCategoryProducts(testName);
    await this.setState({ filteredProduct: { data: testeDois } });
    this.state.filteredProduct.data.map(item => {
        prodArr.push(item.key)
    }) 
    console.log(prodArr)
    return prodArr
    }
    


  async componentDidMount() {
    const categoriesResponse = await getCategoriesList();
    const productsResponse = await getProductsId();
    this.setState({ category: { data: categoriesResponse } });
    this.setState({ product: { data: productsResponse } });
  }

  getCategories() {
    return this.state.category.data.categories.map((element) => {
      const elName = element.name;
      return (
        <button id={elName} key={elName} onClick={this.handleEvent}>
          {elName.toUpperCase()}
        </button>
      );
    });
  }

  buildFilteredCategoryProducts(categoryParam) {
    const filteredCategories = this.state.product.data.categories.filter(
      (fil) => fil.name === categoryParam
    );
    let categoryProducts = [];
    filteredCategories.forEach((category) => {
      category.products.forEach((product) => {
        const categoryProduct = (
          <div key={product.id}>{`${category.name} ${product.id}`}</div>
        );
        categoryProducts.push(categoryProduct);
      });
    });
    return categoryProducts;
  }

  buildCategoryProducts() {
    const filteredCategories = this.state.product.data.categories;
    let categoryProducts = [];
    filteredCategories.forEach((category) => {
      category.products.forEach((product) => {
        const categoryProduct = (
          <div key={product.id}>{`${category.name} ${product.id}`}</div>
        );
        categoryProducts.push(categoryProduct);
      });
    });
    return categoryProducts;
  }

   buildProductArr(){
    for (let i=0 ; i<this.state.filteredProduct.data.length ; i++ ){
      return this.state.filteredProduct.data[i];
    }
  }
   render() {
    return (
      <Fragment>
        <div>{this.getCategories()}</div>
        <div>{this.buildProductArr()}</div>
      </Fragment>
    );
  }
}

export default ProductListing;

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

// buildFilteredCategoryProducts(categoryParam) {
//   //filtrar categories ( vou passar clothes e techs, aqui vc passa qual category quer)
//   const filteredCategories = this.state.data.categories.filter(fil => fil.name === categoryParam);
//   let categoryProducts = [];
//   //percorrer filtered. Pode ser com for.
//   filteredCategories.forEach(category => {
//     //percorrer products. Pode ser com for.
//     category.products.forEach(product => {
//       const categoryProduct = (<div key= {product.id} >
//         {`${category.name} ${product.id}`}
//       </div>);
//       //adicionando div no array. Return vai quebrar a stack e sair do loop.
//       categoryProducts.push(categoryProduct);
//     })
//   })
//   return categoryProducts;
// }
