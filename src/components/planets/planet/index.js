import React, { useState, useEffect } from "react";
import GreyImg from "../../shared/grey_img";
import DescriptionWithLink from "../../shared/description_link";

import { Link } from "react-router-dom";

 const Planet = (props) => {
 
  return (
    <div>
      <Link to={`/planet/${props.id}`}><h4>{props.name}</h4></Link>
      <DescriptionWithLink text={props.description} link={props.link} />
      <GreyImg img_url={props.img_url} grey={props.grey} />
    </div>
  );
};

export default Planet;
