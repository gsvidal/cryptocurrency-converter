import React from 'react';
import styled from '@emotion/styled';

const ErrorMsg = styled.p`
  background-color: #FF000099;
  padding: .5rem;
  margin-top: 1rem;
  border-radius: 5px;
  color: #FFF;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: "Bebas Neue", cursive;
`;

const Error = ({message}) => {
  return(
    <ErrorMsg>{message}</ErrorMsg>
  );
}

export default Error;