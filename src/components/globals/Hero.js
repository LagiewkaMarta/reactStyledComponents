import styled from "styled-components";
import { setFlex, setBackground } from "../../styles";

const Hero = styled.header`
  min-height: 100vh;
  ${setFlex({ x: "center", y: "center" })};
  ${({ img }) =>
    setBackground({ img, color1: 'rgba(0,0,0,.4)', color2: "rgba(0,0,0,.2)" })};
`;
export default Hero;
