import {ExampleDispatcher} from "../../repository/example/types";

export interface ExampleDataRequest {
    textData: string,
    numberData: number,
    dispatcher:ExampleDispatcher
}