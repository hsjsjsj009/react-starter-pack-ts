import * as ExampleActions from "../repository/example/actionFunction"
import {ExampleDataRequest} from "./request/example";
import {ExampleData} from "./viewmodel/example";
import {ExampleRepo} from "../repository/example/types";

interface ExampleRepoDep extends ExampleRepo{
}

export const RecordData = ({dispatcher} : ExampleRepoDep,{textData,numberData} : ExampleDataRequest) => {
    ExampleActions.DoAction1(textData,numberData,dispatcher)
}

export const ReadData = ({state}: ExampleRepoDep) : ExampleData => {
        return {numberData: state.exampleData2, textData: state.exampleData1}
}