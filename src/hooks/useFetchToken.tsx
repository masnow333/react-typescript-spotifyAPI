import {Buffer} from 'buffer';
import { useState, useEffect } from 'react';


export type TResponse = {
    dataToken: string;
    error: any;
    loading: boolean;
};

type TTokenResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export const useFetchToken = (): TResponse => {
    const [dataToken, setDataToken] = useState<string>('');
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);

    const url : string = 'https://accounts.spotify.com/api/token'
    const client_id: string = '20d926be3c064f8eb026c580e8ef7248';
    const client_secret: string = 'c34fb0079db441c2b5c3af725ae406a2';
    const encode = Buffer.from(client_id + ':' + client_secret).toString('base64')
  
    const getData = async () => {
      try {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + encode
            },
            body: 'grant_type=client_credentials'
        });

        const json:TTokenResponse = await response.json();
        setDataToken(json.access_token);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    return { dataToken, error, loading };
};



