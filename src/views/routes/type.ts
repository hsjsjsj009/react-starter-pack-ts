import {JSXElementConstructor} from "react";

export interface MainRoute {
    path : string,
    handler : JSXElementConstructor<any>,
    exact : boolean,
    loginRequired?:boolean
}