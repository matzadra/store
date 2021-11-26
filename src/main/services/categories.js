import clientDb from "./client";

const categoriesNameQuery = "{ categories { name }}";

function getCategoriesList() {
  return clientDb.request(categoriesNameQuery);
}

export { getCategoriesList };
