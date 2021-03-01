import {MainRoute} from "./type";
import ExampleContainer from "../container/example";
import {ExampleComp} from "../component/example";

const Route : MainRoute[] = [
    {
        path:"/",
        handler: <ExampleContainer/>,
        exact: true,
    },
    {
       path:"/example",
       handler: <ExampleComp data={"test data"}/>,
       exact:true
    }
]

export default Route