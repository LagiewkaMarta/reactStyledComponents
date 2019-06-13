import React from "react";
import { Section } from "../globals/Section";
import Title from "../globals/Title";
import aboutImg from "../../images/aboutBcg.jpeg";
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media
} from "../../styles";
import { PrimaryBtn } from "../globals/Buttons";
import styled from "styled-components";

const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={aboutImg} alt="about us" />
        </div>
        <div className="about-info">
          <Title title="About us" />
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <PrimaryBtn>read more</PrimaryBtn>
        </div>
      </AboutCenter>
    </Section>
  );
};
const AboutCenter = styled.div`
  .about-img,
  .about-info {
    padding: ${setRem(30)};
  }
  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })}
    }
  }
  .about-info {
    p {
      ${setLetterSpacing(3)}
    }
  }
  width: 90vw;
  margin: 0 auto;
  ${media.desktop`
width: 100vw;
max-width: 1170px;
display: grid;
grid-template-columns: 1fr 1fr;
grid-column-gap: ${setRem(32)};
.about-info{
    p{
        width: 80%;
    }
}
.about-img,
.about-info {
    padding: ${setRem(0)};
    align-self: center;
  }
`}
`;
export default About;
