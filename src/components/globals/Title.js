import React from 'react';
import styled from 'styled-components';
import {setRem, setFont, setLetterSpacing} from "../../styles";

const Title = ({className, title, center}) => {
    return (
        <h3 className={className}>
            {title}
        </h3>
    )
}

export default styled(Title)`
font-size: ${setRem(36)};
text-transform: uppercase;
${setLetterSpacing(5)};
${setFont.main};
text-align: ${({center}) => center ? 'center' : 'left'};
`
