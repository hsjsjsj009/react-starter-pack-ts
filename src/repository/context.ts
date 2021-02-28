import {ExampleReducer, ExampleRepoData, ExampleUseReducerOutput} from "./example/types";
import React, {Context, useReducer} from "react";
import * as ExampleRepo from "./example/repo";

export interface RepoContextType {
    exampleRepo?: ExampleRepoData
}

const RepoContext : Context<RepoContextType> = React.createContext<RepoContextType>({})

const LoadRepoContext = () : RepoContextType => {
    const [exampleRepoState,exampleRepoDispatch] : ExampleUseReducerOutput = useReducer<ExampleReducer>(ExampleRepo.Reducer,ExampleRepo.Initial)
    return {
        exampleRepo:{exampleDispatcher:exampleRepoDispatch,exampleState:exampleRepoState}
    }
}

export {RepoContext,LoadRepoContext}