import {ExampleAction1, ExampleAction, ExampleDispatcher} from "./types";

const DoAction1 = (data : string,num : number,dispatch:ExampleDispatcher) => {
    const body : ExampleAction1 = {
        data,
        num
    }
    dispatch({type:ExampleAction.Action1,data:body})
}

export {DoAction1}