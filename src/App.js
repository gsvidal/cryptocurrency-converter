import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Form from './components/Form';
import Result from './components/Result';
import Loader from './components/Loader';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 600px;
  min-height: 1000px;
  height: 100vh;
  padding: 180px 20px;
  margin-bottom: 30px;
  @media (min-width: 1440px) {
    width: 600px;
    margin-left: 10%;
  }
`;
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  font-weight: 700;
  font-size: 40px;
  
  @media (min-width: 465px) {
    font-size: 50px;
    &::after {
    content: "";
    width: 135px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    }
  }
`;

function App() {

  const [ currency, setCurrency ] = useState("");
  const [ cryptocurrency, setCryptocurrency ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ data, setData ] = useState({});

  useEffect(()=> {

    const convertCryptocurrency = async () => {
      if(currency === "") return;

      // Consult API to get converting
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;

      const result = await axios.get(url);
      setData(result.data.DISPLAY[cryptocurrency][currency]);
      setLoading(false);
    }
    convertCryptocurrency();
      
  }, [currency, cryptocurrency, loading])

  return (
    <Container>
      <Heading>
        Convert Cryptocurrencies
      </Heading>
      <Form 
        setCurrency={setCurrency}
        setCryptocurrency={setCryptocurrency}
        setLoading={setLoading}
      />
      { loading 
      ?
        <Loader/> 
      :
        <Result 
        data={data}
        />
      }
    </Container>
  );
}

export default App;
