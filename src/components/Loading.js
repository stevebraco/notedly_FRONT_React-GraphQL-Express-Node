import React from 'react';
import spinner from '../img/spinner.svg';
import styled from 'styled-components';

const Loading = () => {
  return (
    <WrapperImg>
      <img src={spinner} alt="spinner" />;
    </WrapperImg>
  );
};

export default Loading;

const WrapperImg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
