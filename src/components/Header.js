import styled from 'styled-components';

export default function Header({ children }) {
  return <Heading>{children}</Heading>;
}

const Heading = styled.h1`
  color: #1c64ff;
  background-color: #151515;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  text-align: center;
  text-shadow: 0 0 2px black;
  align-self: center;
  height: 100%;
`;
