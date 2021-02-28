import * as ExampleRepo from "../repository/example/actionFunction"
import {ExampleDataRequest} from "./request/example";
import {ExampleData} from "./viewmodel/example";
import {useExampleRepoState} from "../repository/example/hooks";
import * as ExampleApi from "../api/example"

export const RecordData = ({textData,numberData,dispatcher} : ExampleDataRequest) => {
    ExampleRepo.DoAction1(textData,numberData,dispatcher)
}

export const ReadData = () : ExampleData => {
    const state = useExampleRepoState()
    return {numberData: state.exampleData2, textData: state.exampleData1}
}

export const GetDataFromOutside = () : string => {
    return ExampleApi.GetDataFromOutside()
}