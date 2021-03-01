import {ExampleAction, ExampleAction1, ExampleAction2, ExampleActionData,ExampleRepoData} from "./types";

const Initial : ExampleRepoData = {
    exampleData1 : "init",
    exampleData2 : 2,
}

const ExampleReducer = (state : ExampleRepoData = Initial, action : ExampleActionData) : ExampleRepoData  => {
    let data;
    switch (action.type) {
        case ExampleAction.Action1:
            data = action.data as ExampleAction1
            return {
                exampleData1:data.data,
                exampleData2:data.num,
            }
        case ExampleAction.Action2:
            data = action.data as ExampleAction2
            return {
                ...state,
                exampleData1: data.data
            }
        case ExampleAction.Action3:
            return Initial
    }
    return state
}

export {ExampleReducer}
