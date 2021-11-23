import React, { Fragment, useState } from "react";

const initialState = '';

const FormSat = (props) => {
  const [sat, setSat] = useState([]);

  const handleChange = (event) =>
  setSat(event.target.value);

  const handleSubmit = (event) => {
    props.addSat({name: sat});
    event.preventDefault();
    setSat(initialState);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Satélite: </label>
          <input
            id="name"
            type="text"
            name="name"
            value={sat}
            onChange={handleChange}
          />
        </div>
        <br />
        <input type="submit" value="Add Sat"/>
      </form>
    </Fragment>
  );
};

export default FormSat;
