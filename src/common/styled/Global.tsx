import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after{
    margin:0;
    padding:0;
    box-sizing:borded-box;
}

body{
    background-color: #212121
}
`;

export default GlobalStyles;
