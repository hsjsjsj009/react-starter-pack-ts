import axios, { AxiosInstance } from "axios";
import {ChangeEvent, useCallback, useEffect, useMemo, useState} from "react";
import {FormInputData, RequestType} from "./generalType";

export const useFormInput  = <T>(initData : T): FormInputData<T> => {
    const [value,setValue] = useState<T>(initData)
    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value as unknown as T);
    },[setValue])
    return useMemo(() => {
      return {
          value,
          onChange
      }
    },[value,onChange])
}

export function useFetch({ api, method, url, data = null,config = null }  : {
    api:AxiosInstance,
    method:'get'|'post'|'delete'|'put',
    config:any|null,
    url:string,
    data:any|null,
    headers:object|null}
) : {response:any,error:string,isLoading:boolean} {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                api[method](url, JSON.parse(config), JSON.parse(data))
                    .then((res) => {
                        setResponse(res.data);
                    })
                    .finally(() => {
                        setIsLoading(false);
                    });
            } catch (err) {
                setError(err);
            }
        };

        fetchData();
    }, [api, method, url, data, config]);

    return { response, error, isLoading };
}

export const api = axios.create({
    baseURL: "",
})
