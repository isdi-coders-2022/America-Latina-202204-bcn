import styled from "styled-components";

const Navigation = styled.nav`
  background: #fd6262;
  display: flex;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  top: 0;
  right: 0px;
  left: 0px;

  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    padding-left: 0px;
  }
  li {
    height: 55px;
    padding: 2px;
    display: flex;
    align-items: center;
  }

  a {
    align-content: center;
    text-decoration: none;
    color: black;
    padding: 5px;
    text-align: center;
  }
`;

const Header = () => {
  return (
    <Navigation className="main-navigation">
      <ul>
        <li>
          <a href=".">COMPLETE COLLECTION</a>
        </li>
        <li>
          <a href=".">APOLLO COLLECTION</a>
        </li>
        <li>
          <a href=".">MY PLAYLIST</a>
        </li>
      </ul>
    </Navigation>
  );
};
export default Header;
