import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <Navigation>
      <NavigationLink to="/">Start</NavigationLink>
      <NavigationLink to="/game">Game</NavigationLink>
      <NavigationLink to="/highscore">Highscore</NavigationLink>
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 48px;
  width: 100%;
  place-items: center;
  position: fixed;
  bottom: 0px;
  padding: 0.1rem;
  background-color: #151515;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
`;

const NavigationLink = styled(NavLink)`
  display: grid;
  place-items: center;
  text-decoration: none;
  border-radius: 2px;
  width: 96%;
  height: 96%;
  color: #dd2476;
  &.active {
    background-color: #0e0e10;
    box-shadow: 0 0 2px black;
  }
`;
