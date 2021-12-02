import React, { Fragment } from "react";
import {
  getProductsId,
  getProductsDetails,
  getAllProducts,
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
      productsDetails: { data: { product: {} } },
    };
    this.handleEvent = this.handleEvent.bind(this);
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

  buildProductArr(arr) {
    return arr;
  }

  handleEvent = (event) => {
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

  getCategories() {
    return this.state.category.data.categories.map((element) => {
      const elName = element.name;
      return (
        <button id={elName} key={elName} onClick={(e) => this.handleEvent(e)}>
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
    return productsIds;
  }

  getProductDetailsById(productIdArr) {
    productIdArr.forEach(async (productId) => {
      const productDetails = await getProductsDetails(productId);
      this.setState({
        ...this.state,
        productsDetails: {
          ...this.state.productsDetails,
          data: productDetails,
        },
      });
      this.buildProductsList();
    });
  }

  buildProductsList() {
    const filteredProducts = this.state.productsDetails.data.product;
    let categoryProducts = [];
    for (let element in filteredProducts) {
      for (let i = 0; i <= filteredProducts.length; i++) {
        if (filteredProducts[i].hasOwnProperty(element)) {
          const product = (
            <div
              key={element}
            >{`${element}  =  ${filteredProducts[element]}`}</div>
          );
          categoryProducts.push(product);
        }
      }
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
        <div>{this.getCategories()}</div>
        <h3>Categorized products</h3>
        <div>{this.buildProductsList()}</div>
      </Fragment>
    );
  }
}

export default ProductListing;
