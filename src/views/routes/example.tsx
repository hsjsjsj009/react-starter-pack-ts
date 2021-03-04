import {MainRoute} from "./type";
import ExampleContainer from "../container/example";
import {ExampleComp} from "../component/example";

const Route : MainRoute[] = [
    {
        path:"/",
        handler: ExampleContainer,
        exact: true,
    },
    {
       path:"/example",
       handler: (props) => ExampleComp({data:"asdasd",...props}),
       exact:true,
       loginRequired:true
    }
]

export default Route