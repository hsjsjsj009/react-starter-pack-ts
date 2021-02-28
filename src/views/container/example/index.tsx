import React, {useCallback} from "react";
import {useExampleRepoDispatcher} from "../../../repository/example/hooks";
import {useFormInput} from "../../../utils/generalHooks";
import {GetDataFromOutside, ReadData, RecordData} from "../../../usecase/exampleUC";
import {ExampleComp} from "../../component/example";

const ExampleContainer = () : JSX.Element => {
    const exampleDispatcher = useExampleRepoDispatcher()
    const textInput = useFormInput<string>("init2")
    const numberInput = useFormInput<number>(10)
    const recordData = useCallback(() => {
        RecordData({
            textData:textInput.value,
            numberData:numberInput.value,
            dispatcher:exampleDispatcher
        })
    },[textInput.value,numberInput.value,exampleDispatcher])
    const {numberData,textData} = ReadData()
    const dataFromOutside = GetDataFromOutside()
    return <div>
        <ExampleComp data={dataFromOutside}/>
        <h3>
            Data Example Repo {`{Number data = ${numberData}, Text data = ${textData}}`}
        </h3>
        <h3>
            Data from Api = {dataFromOutside}
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