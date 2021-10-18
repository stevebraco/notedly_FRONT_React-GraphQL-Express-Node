import React from 'react';
import logo from '../img/logo.svg';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import { Link, useHistory } from 'react-router-dom';
import ButtonAsLink from './ButtonAsLink';

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const Header = () => {
  const history = useHistory();
  const { data, client } = useQuery(IS_LOGGED_IN);
  const handleLogout = () => {
    // remove the token
    localStorage.removeItem('token');
    // clear the application cache
    client.resetStore();
    // update the local state
    client.writeData({ data: { isLoggedIn: false } });
    // redirect the user to the home page
    history.push('/');
  };
  return (
    <HeaderBar>
      <img src={logo} alt="Notedly Logo" height="40" />
      <LogoText>Notedly</LogoText>
      <UserState>
        {data.isLoggedIn ? (
          <ButtonAsLink onClick={handleLogout}>Log Out</ButtonAsLink>
        ) : (
          <WrapperSign>
            <Link to="/signin">Sign in</Link>
            <Link to="/signup">Sign up</Link>
            <Link></Link>
          </WrapperSign>
        )}
      </UserState>
    </HeaderBar>
  );
};

export default Header;

const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`;

const UserState = styled.div`
  margin-left: auto;
`;

const WrapperSign = styled.div`
  display: flex;
  gap: 15px;
`;
