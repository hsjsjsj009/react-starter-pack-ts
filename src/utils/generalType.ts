import {ChangeEvent} from "react";

type OnChangeFunc = (e:ChangeEvent<HTMLInputElement>) => void
type FormInputData<T> = {value: T,onChange:OnChangeFunc}

export type {OnChangeFunc,FormInputData}