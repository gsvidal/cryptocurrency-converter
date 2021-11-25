import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  display: block;
  margin-top: 2rem;
  font-family: 'Bebas Neue', cursive;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.6rem;
  @media (min-width: 465px) {
    font-size: 2rem;
  }
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  border: none;
  font-size: 1.1rem;
  -webkit-appearance: none;
`;

const useCryptocurrency = (label, initialState, options) => {

  // Custom hook state
  const [ state, setState ] = useState(initialState);

  const SelectCryptocurrency = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select
        onChange={ event => setState(event.target.value)}
        value={state}
      >
        <option value="">-- Select currency --</option>
        { options.map(option => (
          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
        ))}
      </Select>
    </Fragment>  
  );

  // Return state, interface and state updater function
  return [ state, SelectCryptocurrency, setState];
}

export default useCryptocurrency;