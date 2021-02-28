import {Dispatch, ReducerAction, ReducerState} from "react";
import {Repo} from "./repo";
import {Action} from "../general";

enum ExampleAction {
    Action1 ,
    Action2,
    Action3,
    Action4
}

type ExampleActionData = Action<ExampleAction,object>
type ExampleReducer = (s: Repo, a:ExampleActionData) => Repo
type ExampleDispatcher = Dispatch<ReducerAction<ExampleReducer>>
type ExampleState = ReducerState<ExampleReducer>
type ExampleRepoData = {exampleState: ExampleState,exampleDispatcher: ExampleDispatcher}
type ExampleUseReducerOutput = [ExampleState,ExampleDispatcher]

interface ExampleAction1 {data: string, num:number}

export {ExampleAction}
export type {
    ExampleAction1,
    ExampleDispatcher,
    ExampleActionData,
    ExampleRepoData,
    ExampleReducer,
    ExampleUseReducerOutput,
    ExampleState}