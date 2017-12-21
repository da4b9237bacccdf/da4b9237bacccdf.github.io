import React, { Component } from 'react';
import './ModelSelector.css';

const ModelSelector = (props) => {
  const models = props.models;
  const modelsSelector = models.map((model) => (
    <option value={model.id} key={model.id}>
      {model.name}
    </option>
  ));

  return (
    <select
      className="selector"
    >
      {modelsSelector}
    </select>
  );
}

export default ModelSelector;
