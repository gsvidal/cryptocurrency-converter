import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useCryptocurrency from '../hooks/useCryptocurrency';
import axios from 'axios';
import Error from './Error';

const FormContainer = styled.section`
  max-width: 50vw;
`;
const Button = styled.button`
  display: block;
  width: 70%;
  padding: 10px;
  margin-top: 40px;
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

const Form = ({setCurrency, setCryptocurrency, setLoading}) => {

  // Cryptocurrencies list state
  const [ cryptoList, setCryptoList ] = useState([]);
  // Validation
  const [ error, setError ] = useState(false);


  const CURRENCIES = [
    { code: "USD", name: "United States Dollar"},
    { code: "MXN", name: "Peso Mexicano"},
    { code: "EUR", name: "Euro"},
    { code: "GBP", name: "Great Britain Pound"},
    { code: "PEN", name: "Sol Peruano"}
  ];

  // Using custom hook: useCurrency
  const [ currency, SelectCurrency] = useCurrency("Select currency", "", CURRENCIES);

  // Using custom hook: useCryptocurrency
  const [ cryptocurrency, SelectCryptocurrency ] = useCryptocurrency("Select cryptocurrency", "", cryptoList);

  // Make API call
  useEffect(() => {
    const getAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const response = await axios.get(url);

      setCryptoList(response.data.Data);
    }
    getAPI();
  }, []);

  // Convert currency
  const handleSubmit = event => {
    event.preventDefault();

    // Validate if fields are filled
    if(currency.trim() === ""  || cryptocurrency.trim() === "") {
      setError(true);
      // return;
    } else {
      //  send data to App component
      setError(false);
      setCurrency(currency);
      setCryptocurrency(cryptocurrency);
      setLoading(true);
    }
  }

  return(
    <FormContainer>
      <form 
        action=""
        onSubmit={handleSubmit}
        >
        { error && 
          <Error 
            message="Error: All fields are required !"
          />
        }
        <SelectCurrency />
        <SelectCryptocurrency />
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