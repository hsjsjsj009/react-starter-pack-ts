import {combineReducers, createStore} from "redux";
import {ExampleRepoData} from "./example/types";
import {ExampleReducer} from "./example/repo";

export interface RepositoryData {
    exampleRepo:ExampleRepoData
}

const reducers = combineReducers<RepositoryData>({
    exampleRepo:ExampleReducer,
})

const store = createStore(reducers)
export default store