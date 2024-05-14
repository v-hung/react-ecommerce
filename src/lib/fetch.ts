import { useEffect, useState } from "react"

const cache: {
  [key: string]: {
    expiry: number,
    data: any
  }
} = {}

type OptionsType = {
  cache: boolean,
  time: number
}

export const Fetch = async<T = any>(url: RequestInfo | URL, options?: RequestInit, optionsType?: OptionsType) : Promise<T | null> => {
  const csrf = (document.head.querySelector("[name~=csrf-token][content]") as HTMLMetaElement)?.content || ''
  // const accessToken = useUserStore.getState().accessToken

  const finalOptionsType: OptionsType = optionsType || { 
    cache: false, 
    time: 180000, // 5 minutes
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

    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
        "X-CSRF-Token": csrf,
        // 'Authorization': `Bearer ${accessToken}`
      }
    })

    if (!response.ok) {
      throw response
    }

    if (finalOptionsType.cache) {
      cache[cacheKey] = {
        data,
        expiry: Date.now()
      };
    }

    data = await response.json()
    
    return data as T
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}

export const useFetch = (url: RequestInfo | URL, options?: RequestInit) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (loading) return
        setLoading(true)
        const data = await Fetch(url, options)
        setData(data)
      } catch (error) {
        setError(error);
        setLoading(false);
      }
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