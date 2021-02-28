import {ExampleDispatcher, ExampleRepoData, ExampleState} from "./types";
import {useContext} from "react";
import {RepoContext, RepoContextType} from "../context";

const useExampleRepo = (): ExampleRepoData => {
    const {exampleRepo}: RepoContextType = useContext<RepoContextType>(RepoContext)
    return exampleRepo as ExampleRepoData
}

const useExampleRepoState = () : ExampleState => {
    const {exampleState} : ExampleRepoData = useExampleRepo()
    return exampleState
}

const useExampleRepoDispatcher = () : ExampleDispatcher => {
    const {exampleDispatcher}: ExampleRepoData = useExampleRepo()
    return exampleDispatcher
}

export {useExampleRepo,useExampleRepoState,useExampleRepoDispatcher};