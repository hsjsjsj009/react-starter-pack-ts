import {ChangeEvent} from "react";

type OnChangeFunc = (e:ChangeEvent<HTMLInputElement>) => void
type FormInputData<T> = {value: T,onChange:OnChangeFunc}

enum RequestType {
    GET=10,
    POST,
    PUT,
    DELETE
}

export {RequestType}
export type {OnChangeFunc,FormInputData}