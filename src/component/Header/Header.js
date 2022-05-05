import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.nav`
  font-family: "Open Sans", sans-serif;
  background: #fd6262;
  position: sticky;
  top: 0;
  display: flex;
  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    padding-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: center;
  }
  li {
    text-align: center;
    justify-content: space-around;
    margin-right: 15px;
    padding: 2px;
    display: flex;
    &:nth-child(0n + 2) {
      padding-right: 15px;
    }
  }
  a {
    text-decoration: none;
    color: white;
    text-align: center;
    padding-right: 2.5px;
  }
`;

const Header = () => {
  return (
    <Navigation className="main-navigation">
      <ul>
        <li>
          <Link to="/complete-Collection">COMPLETE COLLECTION</Link>
        </li>
        <li>
          <Link to="/home">APOLLO COLLECTION</Link>
        </li>
        <li>
          <Link to="/my-playlist">MY PLAYLIST</Link>
        </li>
      </ul>
    </Navigation>
  );
};

export default Header;
