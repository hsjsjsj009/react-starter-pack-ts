import {ExampleActionData, ExampleRepoData, ExampleRepo} from "./types";
import {useDispatch, useSelector} from "react-redux";
import {RepositoryData} from "../index";
import {Dispatch} from "redux";

export const useExampleRepoState = () : ExampleRepoData => {
    return useSelector<RepositoryData, ExampleRepoData>(state => state.exampleRepo)
}

export const useExampleRepoDispatch = () : Dispatch<ExampleActionData> => {
    return useDispatch<Dispatch<ExampleActionData>>()
}

export const useExampleRepo = () : ExampleRepo => {
    return {
        dispatcher:useExampleRepoDispatch(),
        state:useExampleRepoState()
    }
}