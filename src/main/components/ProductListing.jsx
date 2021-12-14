import React, { Fragment } from "react";
import {
  getProductsId,
  getProductsDetails,
} from "../services/product";
import { getCategoriesList } from "../services/categories";
import styled from "styled-components";

class ProductListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: { data: { categories: [] } },
      productsId: { data: { categories: [] } },
      filteredProducts: { data: { categories: [] } },
      productsDetails: [],
    };
    this.handleCategoryEvent = this.handleCategoryEvent.bind(this);
  }

  async componentDidMount() {
    const categoriesResponse = await getCategoriesList();
    const productsIdResponse = await getProductsId();
    this.setState({
      ...this.state,
      category: {
        ...this.state.category,
        data: categoriesResponse,
      },
      productsId: {
        ...this.state.productsId,
        data: productsIdResponse,
      },
    });
  }

  handleCategoryEvent = (event) => {
    const categoryId = event.target.id;
    const categorizedProduct = this.getFilteredProductsIds(categoryId);
    this.setState({
      ...this.state,
      filteredProducts: {
        ...this.state.filteredProducts,
        data: categorizedProduct,
      },
    });
  };

  buildCategoriesList() {
    return this.state.category.data.categories.map((element) => {
      const elName = element.name;
      return (
        <button id={elName} key={elName} onClick={(e) => this.handleCategoryEvent(e)}>
          {elName.toUpperCase()}
        </button>
      );
    });
  }

  getFilteredProductsIds(categoryParam) {
    const filteredCategories = this.state.productsId.data.categories.filter(
      (fil) => fil.name === categoryParam
    );
    let productsIds = [];
    filteredCategories.forEach((category) => {
      category.products.forEach((product) => {
        const categoryProduct = product.id;
        productsIds.push(categoryProduct);
      });
    });
    this.getProductDetailsById(productsIds);
  }

  async getProductDetailsById(productIdArr) {
    let products = [];
    for (let i = 0; i <= productIdArr.length - 1; i++) {
      const productDetails = await getProductsDetails(productIdArr[i]);
      products.push(productDetails);
    }
    this.setState({
      ...this.state,
      productsDetails: products,
    });
  }

  buildProductsList() {
    const filteredProductsList = this.state.productsDetails;
    let categoryProducts = [];
    for (let index in filteredProductsList) {
      const filteredProduct = filteredProductsList[index].product;
      const productElement = (
        <>
          <div>{`id -- ${filteredProduct.id}`}</div>
          <div>{`name -- ${filteredProduct.name}`}</div>
          <div>{`in stock -- ${filteredProduct.inStock}`}</div>
          <div>{`description -- ${filteredProduct.description}`}</div>
          <div>{`category -- ${filteredProduct.category}`}</div>
          <div>{`brand -- ${filteredProduct.brand}`}</div>
          <br/>
        </>
      );
      categoryProducts.push(productElement);
    }
    return categoryProducts;
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
        <div>{this.buildCategoriesList()}</div>
        <h3>Categorized products</h3>
        <div>{this.buildProductsList()}</div>
      </Fragment>
    );
  }
}

export default ProductListing;
