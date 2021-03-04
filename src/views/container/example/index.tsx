import React from "react";
import {useFormInput} from "../../../utils/generalHooks";
import {RecordData, ReadData} from "../../../usecase/exampleUC";
import { Link } from "react-router-dom";
import {useExampleRepo} from "../../../repository/example/hooks";
import {useLoadData} from "./hooks";

const ExampleContainer = () : JSX.Element => {
    const exampleRepo =  useExampleRepo()
    useLoadData(exampleRepo)
    const textInput = useFormInput<string>("init2")
    const numberInput = useFormInput<number>(10)
    const recordData = () => {
        RecordData(exampleRepo, {
            textData: textInput.value,
            numberData: numberInput.value,
        })
    }
    const {numberData,textData} = ReadData(exampleRepo)

    return <div>
        <Link to={"/example"}>
            Example
        </Link>
        <h3>
            Data Example Repo {`{Number data = ${numberData}, Text data = ${textData}}`}
        </h3>
        <input type={"text"} {...textInput}/>
        <h4>
            Input Text Val {textInput.value}
        </h4>
        <input type={"number"} {...numberInput}/>
        <h4>
            Input Number Val {numberInput.value}
        </h4>
        <button onClick={recordData}>Change</button>
    </div>
}

export default ExampleContainer