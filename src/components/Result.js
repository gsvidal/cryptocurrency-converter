import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContainerResult = styled.div`
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #FFFFFF88;
  border-radius: 5px;
  background-color: #FFFFFF33;
  color: #FFF;
  font-family: Arial, Helvetica, sans-serif;
  span {
    font-weight: bold;
  }
`;
const Price = styled.div`
  margin: 20px 0;
  font-size: 30px;
`;
const Info = styled.p`
  color: #FFFFFFAA;
  margin: 15px 0;
  font-size: 18px;
`;

const Result = ({data}) => {

  if(Object.keys(data).length === 0) return null;

  const { PRICE, LOWDAY, HIGHDAY, CHANGEPCT24HOUR, LASTUPDATE } = data;

  return(
    <ContainerResult>
      <Price>The price is: <span>{PRICE}</span></Price>
      <Info>Today higher price was: <span>{HIGHDAY}</span></Info>
      <Info>Today lower price was: <span>{LOWDAY}</span></Info>
      <Info>Change last 24 hours: <span>{CHANGEPCT24HOUR}</span></Info>
      <Info>Last update: <span>{LASTUPDATE}</span></Info>
    </ContainerResult>
  );
}

Result.propTypes = {
  data: PropTypes.object.isRequired
}

export default Result;