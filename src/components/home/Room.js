import React from "react";
import { SmallBtn } from "../globals/Buttons";
import styled from "styled-components";
import PropTypes from 'prop-types';
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
  setBorder
} from "../../styles";


const Room = ({ className, room }) => {
  const { img = "", title = "", info = "", price = 0 } = room;
  return (
    <article className={className}>
      <div className="img-container">
        <img src={img} alt="single room" />
        <div className="price" >{price}</div>
      </div>
      <div className="room-info">
        <h4>{title}</h4>
        <p>{info}</p>
        <SmallBtn>hi!</SmallBtn>
      </div>
    </article>
  );
};

export default styled(Room)`
background-color: ${setColor.mainWhite};
margin: ${setRem(32)} 0;
.img-container {
    background-color: ${setColor.mainBlack};
    position: relative;
    img {
        width: 100%;
        display: block;
        ${setTransition};
    }
    &:hover img {
        opacity: .5;
    }
    .price {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: ${setColor.mainWhite};
        ${setLetterSpacing(5)};
        font-size: ${setRem(22)};
        padding: ${setRem(10)} ${setRem(33)};
        ${setBorder({color: setColor.mainWhite})};
        opacity: 0;
        ${setTransition()};
    
    }
    &:hover .price {
        opacity: 1;
    }
}
.room-info {
padding: ${setRem()};
${setLetterSpacing()};
h4 {
    text-transform: uppercase;
}
}
${setShadow.light};
${setTransition()};
&:hover {
    ${setShadow.dark}
}
`;

Room.propTypes = {
    room: PropTypes.shape({
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })
};