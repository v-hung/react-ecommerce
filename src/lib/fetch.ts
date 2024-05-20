import { useEffect, useState } from "react"
import useUserStore from "../stores/user"

const cache: {
  [key: string]: {
    expiry: number,
    data: any
  }
} = {}

type OptionsType = {
  cache?: boolean,
  time?: number
}

export const Fetch = async<T = any>(url: RequestInfo | URL, options?: RequestInit, optionsType?: OptionsType) : Promise<[ data: T | null, error: any]> => {
  const accessToken = useUserStore.getState().token

  const finalOptionsType: { cache: boolean, time: number } = { 
    cache: false, 
    time: 180000,
    ...optionsType
  }

  const cacheKey = typeof url === 'string' ? url : url.toString();
  
  try {
    let data = null

    if ( finalOptionsType.cache && cache[cacheKey] )  {
      const cachedEntry = cache[cacheKey]

      if (Date.now() > cachedEntry.expiry + finalOptionsType.time) {
        return cachedEntry.data
      }
      else {
        delete cache[cacheKey]
      }
    }

    const response = await fetch(import.meta.env.VITE_ENDPOINT + url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
        'Authorization': `Bearer ${accessToken}`
      }
    })

    if (!response.ok) {
      throw await response.json()
    }

    if (finalOptionsType.cache) {
      cache[cacheKey] = {
        data,
        expiry: Date.now()
      };
    }

    data = await response.json()
    
    return [ data as T, null ]
  } catch (error) {
    console.error('Error fetching data:', error)
    return [ null, error ]
  }
}

export const useFetch = (url: RequestInfo | URL, options?: RequestInit) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (loading) return
      setLoading(true)

      const [data, error] = await Fetch(url, options)

      setData(data)
      setError(error);
      setLoading(false);
    };

    fetchData();

  }, [url]);

  return { data, error, loading };
};

export const useFetchLoading = (callback: Function) => {
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (loading) return
        setLoading(true)
        await callback()
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

  }, [callback]);

  return { error, loading };
};