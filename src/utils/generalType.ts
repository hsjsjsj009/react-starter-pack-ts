import {ChangeEvent} from "react";

type OnChangeFunc = (e:ChangeEvent<HTMLInputElement>) => void
type FormInputData<T> = {value: T,onChange:OnChangeFunc}

enum RequestType {
    GET='get',
    POST='post',
    PUT='put',
    DELETE='delete'
}

export {RequestType}
export type {OnChangeFunc,FormInputData}