import {StyledDiv} from "./style";
import React from "react";
import { Link } from "react-router-dom";

export const ExampleComp = (props:{data : string}) : JSX.Element => {
    return <StyledDiv>
        <Link to={"/"}>
            Go
        </Link>
        <h3>
            {props.data}
        </h3>
    </StyledDiv>
}