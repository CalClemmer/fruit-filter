import React, { useState } from "react";
import List from "./List";
import Input from "./Input";

const FruitContainer = (props) => {
  // Individual pioeces of state with their own hooks
  const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits);
  const [filterValue, setFilterValue] = useState("");

  const [state, setState] = useState({
    fruitsToDisplay: props.fruit,
    filterValue: "",
  });

  const handleFilterChange = (e) => {
    e.preventDefault();

    const newValue = e.target.value;

    setFilterValue(newValue);
    const filterFruitList = props.fruits.filter((fruit) => {
      return fruit.toLowerCase().includes(newValue.toLowerCase());
    });
    setFruitsToDisplay(filterFruitList);

    const stateCopy = { ...state };
    stateCopy.filterValue = newValue;
    stateCopy.fruitsToDisplay = filterFruitList;
    setState(stateCopy);
  };

  return (
    <div>
      <Input
        value={filterValue}
        onChange={handleFilterChange}
        desc={props.desc}
      />
      <List fruits={fruitsToDisplay} />
    </div>
  );
};

export default FruitContainer;
