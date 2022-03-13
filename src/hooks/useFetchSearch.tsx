import { useEffect, useState } from "react"
import { useFetchToken , TResponse} from "./useFetchToken";

export type TData = {
    data: any;
    error: any;
    loading: boolean;
}

export const useFetchSearch = (search:string, provideUrl:string = ''):TData => {
    
    const { loading:load, dataToken }:TResponse = useFetchToken();

    const [token, setToken] = useState<string>('')
    const [error, setError] = useState<any>()
    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)



    useEffect(() => {
        if(!load){
            setToken(dataToken)
            if(token !== '' && search !== ''){
                getData()
            }
        }  
    }, [load, token, search, provideUrl])

    const url : string = `https://api.spotify.com/v1/search?q=${search.replace(' ', '+')}&type=track`


    const getData = async() => {
        try{
            const response = await fetch((provideUrl !== undefined && provideUrl !== null && provideUrl !== '') ? provideUrl : url, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${token}`,
                }
            })
            const json = await response.json();
            setData(json);
        }catch(error) {
            setError(error);
        }
        setLoading(false);
    }

    return {data, error, loading}

}
