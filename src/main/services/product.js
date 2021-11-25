import clientDb from "./client";
import { getCategoriesList } from "./categories";


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


export { getProducts, getProductsId };
