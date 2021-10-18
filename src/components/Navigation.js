import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <Img
            src="https://cdn-icons.flaticon.com/png/512/2544/premium/2544056.png?token=exp=1634551704~hmac=c366d5da524c42375e7efe102c9ba60c"
            alt="home"
          />
          <Link to="/">Home</Link>
        </li>
        <li>
          <Img
            src="https://cdn-icons.flaticon.com/png/512/3131/premium/3131636.png?token=exp=1634551830~hmac=bee7302d685e05161ddd5c98edef803e"
            alt="notes"
          />
          <Link to="/signin?redirect=myNotes">My notes</Link>
        </li>
        <li>
          <Img
            src="https://cdn-icons-png.flaticon.com/512/263/263417.png"
            alt="favorites"
          />
          <Link to="/signin?redirect=favorites">Favorites</Link>
        </li>
        <li>
          <Img
            src="https://cdn-icons.flaticon.com/png/512/5168/premium/5168290.png?token=exp=1634551958~hmac=09d0945d34b71f7e0a6354a5229fe76b"
            alt="new"
          />
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
