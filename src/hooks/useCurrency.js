import React, { Fragment, useState } from 'react';

const useCurrency = (label, initialState, options) => {

  // Custom hook state
  const [ state, setState ] = useState(initialState);

  const Select = () => (
    <Fragment>
      <label>{label}</label>
      <select>
        <option value="">-- Select currency --</option>
        { options.map(option => (
          <option key={option.code} value={option.code}>{option.name}</option>
        ))}
      </select>
    </Fragment>  
  );

  // Return state, interface and state updater function
  return [ state, Select, setState];
}

export default useCurrency;