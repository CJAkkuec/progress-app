import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "Quicksand";
    src: url("/fonts/quicksand-variablefont_wght-webfont.woff2") format("woff2"),
         url("/fonts/quicksand-variablefont_wght-webfont.woff") format("woff");
}

@font-face {
    font-family: 'HVDComic';
    src: url('/fonts/HVD_Comic_Serif_Pro-webfont.woff') format('woff')
}

:root {
    --blue: #7292F2;
    --taupe: #7EA5D9;
    --neon: #A7F205;
    --grass: #76A60F;
    --camo: #5E7314;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    font-family: "Quicksand", sans-serif;
    margin: 0;
    padding: 1rem;
}

`;

export default GlobalStyle;
