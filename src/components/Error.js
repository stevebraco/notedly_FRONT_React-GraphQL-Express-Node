import React from 'react';
import styled from 'styled-components';

const Error = ({ error }) => {
  return <TextError>{error.message}</TextError>;
};

export default Error;

const TextError = styled.p`
  display: inline;
  background: #fe6e75;
  color: #fff;
  padding: 10px;
`;
