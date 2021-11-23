import React, { useState, useEffect } from "react";
import GreyImg from "../shared/grey_img";
import DescriptionWithLink from "../shared/description_link";
import FormSat from "../planet/form";
import { useParams, useHistory, Redirect } from "react-router-dom";

async function getPlanet(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

const Planet = () => {
  const [sat, setSat] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [planet, setPlanet] = useState({});

  const { id } = useParams();
  const history = useHistory();

  const addSat = (new_sat) => {
    setSat([...sat, new_sat]);
  };

  useEffect(() => {
    getPlanet(id).then(
      (data) => {
        setSat(data["satellites"]);
        setPlanet(data["data"]);
      },
      (error) => {
        setRedirect(true);
      }
    );
  }, [planet]);

  const goToHome = () => {
    history.push("/");
  };

  if (redirect) return <Redirect to="/" />;

  return (
    <div>
      <h4>{planet.name}</h4>
      <DescriptionWithLink text={planet.description} link={planet.link} />
      <GreyImg img_url={planet.img_url} grey={planet.grey} />
      <h4>Satélites</h4>
      <FormSat addSat={addSat} />
      <ul>
        {sat.map((sat, index) => (
          <li key={index}>{sat.name}</li>
        ))}
      </ul>
      <hr />
      <button type="button" onClick={goToHome}>
        Go to home
      </button>
    </div>
  );
};
export default Planet;
