import React from "react";
import Hero from "../globals/Hero";
import homeBcg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons";
const Header = () => {
  return (
    <Hero img={homeBcg}>
      <Banner
        greeting="Welcome to "
        title="Beachwalk Resort"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      >
        <PrimaryBtn t="1rem">View details</PrimaryBtn>
      </Banner>
    </Hero>
  );
};

export default Header;
