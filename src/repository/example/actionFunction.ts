import {ExampleAction, ExampleAction1, ExampleAction2, ExampleDispatcher} from "./types";

const DoAction1 = (data : string,num : number,dispatch:ExampleDispatcher) => {
    const body : ExampleAction1 = {
        data,
        num
    }
    dispatch({type:ExampleAction.Action1,data:body})
}

const DoAction2 = (data : string,dispatch:ExampleDispatcher) => {
    const body : ExampleAction2 = {
        data
    }
    dispatch({type:ExampleAction.Action2,data:body})
}

const DoAction3 = (dispatch:ExampleDispatcher) => {
    dispatch({type:ExampleAction.Action3})
}

export {DoAction1,DoAction2,DoAction3}