import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
 }

 :root {
   --black:
 }

 body {
   font-family: 'Lucida Console', Courier, monospace;
   font-size: 1rem;
   background: rgb(99,166,20);
   background: whitesmoke;
 }

 .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
 }
`;
