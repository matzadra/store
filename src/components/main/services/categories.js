import clientDb from "./client";

const categoriesNameQuery = "{ categories { name }}";
const categoriesAllQuery = "{ category { name }}"


    // function getCategoriesList(){
    //      clientDb.request(categoriesNameQuery).then((data) =>{
    //         return data;
    //     })
    // }

    // async function getCategoriesList () {
    //     return await clientDb.request(categoriesNameQuery).then((data) =>{
    //        return data;
    //    });
    //   }
      
      
     async function getCategoriesList () {
        return await clientDb.request(categoriesNameQuery);
      }

    function getAllCategory(){
        clientDb.request(categoriesAllQuery).then((data) =>{
            return data;
        })
    }

export { getCategoriesList, getAllCategory }
 