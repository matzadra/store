import React, { Fragment } from "react";
import { getProductsId } from "../services/product";
import { getCategoriesList } from "../services/categories";
import styled from "styled-components";

class ProductListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: { data: { categories: [] } },
      product: { data: { categories: [] } },
      filteredProduct: { data: { categories: [] } }
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  async componentDidMount() {
    const categoriesResponse = await getCategoriesList();
    const productsResponse = await getProductsId();
    this.setState({
      ...this.state,
      category: {
        ...this.state.category,
        data: categoriesResponse,
      },
      product: {
        ...this.state.product,
        data: productsResponse,
      },
    });
  }

  buildProductArr() {
    let prodArr = [];
    for (let i = 0; i <= this.state.filteredProduct.data.length; i++) {
      prodArr.push(this.state.filteredProduct.data[i]);
    }
    return prodArr;
  }

  handleEvent(event) {
    const testName = event.target.id;
    const categorizedProduct = this.buildFilteredCategoryProducts(testName);
    this.setState({
      ...this.state,
      filteredProduct: {
        ...this.state.filteredProduct,
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

  render() {
    return (
      <Fragment>
        <div>{this.getCategories()}</div>
        <h3>All products</h3>
        <div>{this.buildCategoryProducts()}</div>
        <h3>Categorized products</h3>
        <div>{this.buildProductArr()}</div>
      </Fragment>
    );
  }
}

export default ProductListing;