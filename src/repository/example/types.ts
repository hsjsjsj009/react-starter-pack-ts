import {Action, Repo} from "../generalType";
import {Dispatch} from "redux";

enum ExampleAction {
    Action1 ,
    Action2,
    Action3,
    Action4
}

interface ExampleRepoData {
    exampleData1: string,
    exampleData2: number,
}

type ExampleActionData = Action<ExampleAction,object>
type ExampleDispatcher = Dispatch<ExampleActionData>
type ExampleRepo = Repo<ExampleDispatcher, ExampleRepoData>

interface ExampleAction1 {data: string, num:number}
interface ExampleAction2 {data: string}

export {ExampleAction}
export type {
    ExampleDispatcher,
    ExampleAction1,
    ExampleAction2,
    ExampleActionData,
    ExampleRepoData,
    ExampleRepo}