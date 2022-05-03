import styled from "styled-components";

const Navigation = styled.nav`
  background: #fd6262;
  display: flex;
  flex-direction: column;
  position: sticky;
  display: flex;
  height: 60px;
  top: 0;
  right: 0px;
  left: 0px;
  text-align: center;

  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    padding-left: 0px;
    margin-top: 0px;
  }
  li {
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    height: 55px;
    padding: 2px;
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: black;
    padding: 10px;
    padding-top: 10px;
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
