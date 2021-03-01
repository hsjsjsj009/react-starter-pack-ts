import * as ExampleActions from "../repository/example/actionFunction"
import {ExampleDataRequest} from "./request/example";
import {ExampleData} from "./viewmodel/example";
import {ExampleRepo} from "../repository/example/types";
import {useMemo} from "react";

interface ExampleRepoDep extends ExampleRepo{
}

export const RecordData = ({dispatcher} : ExampleRepoDep,{textData,numberData} : ExampleDataRequest) => {
    ExampleActions.DoAction1(textData,numberData,dispatcher)
}

export const useReadData = ({state}: ExampleRepoDep) : ExampleData => {
    return useMemo(() => {
        return {numberData: state.exampleData2, textData: state.exampleData1}
    },[state.exampleData1,state.exampleData2])
}