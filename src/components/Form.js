import React from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';

const FormContainer = styled.section`
  max-width: 50vw;
`;
const Button = styled.button`
  width: 70%;
  padding: 10px;
  margin-top: 20px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  background-color: #66A2FE;
  color: #FFF;
  transition: background-color .3s ease;
  &:hover {
    background-color: #326AC0;
    cursor: pointer;
  }
`;

const Form = () => {

  const CURRENCIES = [
    { code: "USD", name: "United States Dollar"},
    { code: "MXN", name: "Peso Mexicano"},
    { code: "EUR", name: "Euro"},
    { code: "GBP", name: "Great Britain Pound"},
    { code: "PEN", name: "Sol Peruano"}
  ];

  // Using custom hook
  const [ currency, SelectCurrencies] = useCurrency("Select currency", "", CURRENCIES);

  return(
    <FormContainer>
      <form action="">
        <SelectCurrencies />
        <Button
          type="submit"
        >
          Calculate
        </Button>
      </form>
    </FormContainer>
  );
}

export default Form;