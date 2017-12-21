import React, { Component } from 'react';
import './MakeSelector.css';

const MakeSelector = (props) => {
  const makes = props.makes;
  const makesSelector = makes.map((make) => (
    <option value={make.id} key={make.id}>
      {make.name}
    </option>
  ));

  return (
    <select
      className="selector"
      onChange={(e) => props.onChange(e)}
    >
      {makesSelector}
    </select>
  );
}

export default MakeSelector;