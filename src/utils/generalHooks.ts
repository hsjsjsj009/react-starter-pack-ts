import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import {FormInputData} from "./generalType";

export const useFormInput  = <T>(initData : T): FormInputData<T> => {
    const [value,setValue] : [T,Dispatch<SetStateAction<T>>] = useState<T>(initData)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value as unknown as T);
    }
    return {
        value,
        onChange
    }
}