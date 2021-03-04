import Example from "./example"
import {MainRoute} from "./type";
import React from "react";
import {Route} from "react-router-dom";
import {useExampleRepoState} from "../../repository/example/hooks";
const AllRoute : MainRoute[] = [
        ...Example,
]

const PrivateRoute = ({children,...rest}:React.PropsWithChildren<any>) => {
        const data = useExampleRepoState()
        console.log(data)
        return <Route {...rest}>
                {children}
        </Route>
}

export const RouteBuilder = (props:MainRoute) => {
        if (props.loginRequired !== undefined) {
                return <PrivateRoute path={props.path} exact={props.exact}>
                        <props.handler/>
                </PrivateRoute>
        }
        return <Route path={props.path} exact={props.exact}>
           <props.handler/>
        </Route>
}

export default AllRoute