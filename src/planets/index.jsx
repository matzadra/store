import React, { Fragment, useState, useEffect } from "react";
import { GraphQLClient } from 'graphql-request'

const Planets = () => {

  const client = new GraphQLClient("http://localhost:4000", { headers: {} });

  const [listOfElements, setListOfElements] = useState([]);

  useEffect(async () => {
    const elements = await client.request("{category { products { name}}}")
      .then((data) => {
        return <ul>
          {data.category.products.map((el, index) => {
            return (
              <li key={index}>
                {el.name}
              </li>
            )
          })}
        </ul>
      });

    setListOfElements(elements);
  }, []);


  return (
    <Fragment>
      {listOfElements}
      TESTE
    </Fragment>
  );
};

export default Planets;