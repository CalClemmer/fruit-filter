import React from "react";

const Input = (props) => {
  return (
    <div>
      <label htmlFor="fruit-filter">{props.desc}</label>
      <input
        type="text"
        name="fruit-filter"
        id="fruit-filter"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
