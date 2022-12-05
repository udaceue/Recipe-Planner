import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after{
    margin:0;
    padding:0;
    box-sizing:borded-box;
}

html{
    font-size: 10px;
    width: 100%;
}

body{
    background-color: #212121;
}
`;

export default GlobalStyles;
