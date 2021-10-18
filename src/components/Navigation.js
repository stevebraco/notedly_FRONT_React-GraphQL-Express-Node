import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import home from '../img/home.png';
import notes from '../img/notes.png';
import fav from '../img/fav.png';
import newNotes from '../img/new.png';

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <Img src={home} alt="home" />
          <Link to="/">Home</Link>
        </li>
        <li>
          <Img src={notes} alt="notes" />
          <Link to="/signin?redirect=myNotes">My notes</Link>
        </li>
        <li>
          <Img src={fav} alt="favorites" />
          <Link to="/signin?redirect=favorites">Favorites</Link>
        </li>
        <li>
          <Img src={newNotes} alt="new" />
          <Link to="/signin?redirect=newNote">New</Link>
        </li>
      </NavList>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  padding: 1em;
  background: #f5f4f0;

  @media (max-width: 700px) {
    padding-top: 64px;
  }

  @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: calc(100% - 64px);
    overflow-y: scroll;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;

  /* We can nest styles in styled-components */
  /* The following styles will apply to links within the NavList component */
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #333;
  }

  a:visited {
    color: #333;
  }

  a:hover,
  a:focus {
    color: #2980b9;
  }
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;
