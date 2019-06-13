import styled from 'styled-components';
import {setColor, setRem, setLetterSpacing, setFont, setBorder, setTransition} from "../../styles";

export const PrimaryBtn = styled.button`
    display: inline-block;
    background-color: ${setColor.primaryColor};
    color: ${setColor.mainWhite};
    text-transform: uppercase;
    font-size: ${setRem(18)};
    ${setFont.main};
    padding: ${setRem(17)} ${setRem(36)};
    ${setBorder({ color:setColor.primaryColor})};
    ${setLetterSpacing(3)};
    text-decoration: none;
    ${setTransition({time: '.4s'})};
    cursor: pointer;
    &:hover {
        background-color: transparent;
        color: ${setColor.primaryColor};
    }
    ${({t,r,b,l}) => `margin: ${t || 0 } ${r || 0 } ${b || 0 } ${l || 0 }`};

`

export const SmallBtn = styled(PrimaryBtn)`
padding: ${setRem(9)} ${setRem(12)};
`