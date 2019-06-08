import React from "react";
import Hero from "../globals/Hero";
import homeBcg from "../../images/homeBcg.jpeg";

const Header = () => {
  return (
    <Hero img={homeBcg}>
      <h1>hello world</h1>{" "}
    </Hero>
  );
};

export default Header;
