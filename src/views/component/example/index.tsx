import {StyledDiv} from "./style";
import React from "react";

export const ExampleComp = (props:{data : string}) : JSX.Element => {
    return <StyledDiv>
        <h3>
            {props.data}
        </h3>
    </StyledDiv>
}