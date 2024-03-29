import { css } from "styled-components";

export const setColor = {
  primaryColor: "#af9a7d",
  mainWhite: "#fff",
  mainBlack: "#222",
  mainGrey: "#ececec",
  lightGrey: "#f7f7f7"
};

export const setFont = {
  main: "font-family: 'Josefin Sans', sans-serif"
};

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display: flex; align-items: ${y}; justify-content: ${x}`;
};

export const setBackground = ({img='https://www.labaleine.fr/sites/baleine/files/image-not-found.jpg', color1="transparent", color2="transparent"}={}) => {
  return `background: linear-gradient(${color1}, ${color2}),
  url(${img}) center/cover fixed no-repeat;`
}
  

export const setRem = (number = 16) => {
  return `${number/16}rem`
}

export const setLetterSpacing = (num = 1) => {
  return `letter-spacing: ${num}px`
}
export const setShadow = {
  light: "box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)",
  dark: "box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);",
  darkest: "box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);"
};

export const setBorder = ({width = "2px", style="solid", color="black"} = {}) => {
  return `border: ${width} ${style} ${color}`
}

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const setTransition = ({property="all", time=".3s", timingFunction="ease-in-out", delay='0s'} = {}) => {
  return `transition: ${property} ${time} ${timingFunction} ${delay}`
}

