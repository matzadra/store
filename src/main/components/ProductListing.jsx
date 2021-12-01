import React, { Fragment } from "react";
import { getAllProducts} from "../services/product";
import { getCategoriesList } from "../services/categories";
import styled from "styled-components";

class ProductListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: { data: { categories: [] } },
      productsId: { data: { categories: [] } },
      filteredProducts: { data: { categories: [] } },
      productsDetails: {},
      allProducts: { data: { categories: [] } }
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  async componentDidMount() {
    const categoriesResponse = await getCategoriesList();
    const allProductsResponse = await getAllProducts();
    this.setState({
      ...this.state,
      category: {
        ...this.state.category,
        data: categoriesResponse,
      },
      allProducts: {
        ...this.state.allProducts,
        data: allProductsResponse,
      }
      });
    }

  buildProductArr() {
    let prodArr = [];
    for (let i = 0; i <= this.state.filteredProducts.data.length; i++) {
      prodArr.push(this.state.filteredProducts.data[i]);
    }
    return prodArr;
  }

  handleEvent(event) {
    const categoryId = event.target.id;
    const categorizedProduct = this.getFilteredProductsIds(categoryId,3);
    console.log(this.state.allProducts)
    this.setState({
      ...this.state,
      filteredProducts: {
        ...this.state.filteredProducts,
        data: categorizedProduct,
      },
    });
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

   getFilteredProductsIds(categoryParam, teste) {
    const filteredCategories = this.state.allProducts.data.categories.filter(
      (fil) => fil.name === categoryParam
    );
    let productsIds = [];
    filteredCategories.forEach((category) => {
      category.products.forEach((product) => {
        const categoryProduct = (
          <Fragment>
          <div key={product.id}>{`${product.brand} ${product.name}`}</div>
          <div>{`${product.prices[teste].currency} ${product.prices[teste].amount}`} </div>
          </Fragment>
        );
         productsIds.push(categoryProduct)
      });
    });
    return productsIds;
  }

  buildCategoryProducts() {
    const filteredCategories = this.state.productsId.data.categories;
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

  render() {
    return (
      <Fragment>
        <div>{this.getCategories()}</div>
        <h3>Categorized products</h3>
        <div>{this.buildProductArr()}</div>
        <h3>Categorized names</h3>
      </Fragment>
    );
  }
}

export default ProductListing;