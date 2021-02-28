import {ExampleActionData, ExampleAction1, ExampleAction} from "./types";

interface Repo {
    exampleData1: string,
    exampleData2: number,
}

const Initial : Repo = {
    exampleData1 : "init",
    exampleData2 : 2,
}

const Reducer = (state : Repo, action : ExampleActionData) : Repo  => {
    switch (action.type) {
        case ExampleAction.Action1:
            const data = action.data as ExampleAction1
            return {
                exampleData1:data.data,
                exampleData2:data.num,
            }
    }
    return state
}

export {Reducer,Initial}
export type { Repo }
