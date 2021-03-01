import * as Redux from 'redux'
import {Dispatch} from "redux";
interface Action<Y,T> extends Redux.Action<Y> {
    data? : T,
}

interface Repo<Y extends Dispatch<any>,T> {
    dispatcher:Y,
    state:T
}

export type {Action,Repo}