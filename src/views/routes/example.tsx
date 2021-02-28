import {MainRoute} from "./type";
import ExampleContainer from "../container/example";

const Route : MainRoute[] = [
    {
        path:"/",
        handler: <ExampleContainer/>,
        exact: true,
    }
]

export default Route