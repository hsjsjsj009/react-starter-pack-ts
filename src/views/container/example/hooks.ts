import {useEffect} from "react";
import {RecordData} from "../../../usecase/exampleUC";
import {ExampleRepo} from "../../../repository/example/types";

export const useLoadData = (exampleRepo: ExampleRepo) => {
    useEffect(() => {
        console.log("mount")
        setTimeout(() => {
            RecordData(exampleRepo,{textData:"timeout",numberData:223})
        },3000)
        return () => {
            console.log("unmount")
            RecordData(exampleRepo,{textData:"unmount",numberData:224})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
}