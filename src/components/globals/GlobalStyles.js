import { createGlobalStyle } from "styled-components";
import {setColor, setFont} from "../../styles";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:400,700&display=swap&subset=latin-ext');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-size: 100%;
    color: ${setColor.mainBlack};
    background-color: ${setColor.mainWhite};
    ${setFont.main}
}
h1{
    font-size: 3em;
    line-height: 1.2em;
    margin-bottom: .5em;
}
h2{
    font-size: 2em;
    margin-bottom: .75em;
}
h3{
    font-size: 1.5em;
    line-height: 1em;
    margin-bottom: 1em;
}
h4{
    font-size: 1.2em;
    line-height: 1.2em;
    margin-bottom: .5em;
    font-weight: bold;
}
h5{
    font-size: 1em;
    margin-bottom: 1.5em;
    font-weight: bold;
}
h6{
    font-size: 1em;
    font-weight: bold;
}
p {
    line-height: 1.5em;
    margin: 0 0 1.5em 0;
}
`;

export default GlobalStyle;
