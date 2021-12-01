import clientDb from "./client";

const productsQuery =
  "{categories {name, products {id, name, inStock, gallery, description, category, attributes {id, name, items {displayValue, value, id}}, prices {currency, amount}, brand}}}";

const productsIdQuery=
  "{categories{name, products{id}}}"

function getProducts() {
  return clientDb.request(productsQuery);
}

function getProductsId() {
    return clientDb.request(productsIdQuery);
  }

function getProductsDetails(productId){
  return clientDb.request(`{product(id:"${productId}"){id, name, inStock, description, category, brand}}`)
}

function getAllProducts(){
  return clientDb.request(productsQuery)
}
export { getProducts, getProductsId, getProductsDetails, getAllProducts };
