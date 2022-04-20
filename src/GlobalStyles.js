import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
 }

 :root {
   --black: #232023;
   --red: #b90e0a;
   --violet: #719193;
   --magenta: #a1045a;
 }

 body {
   font-family: 'Lucida Console', Courier, monospace;
   font-size: 1rem;
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
