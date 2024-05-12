import { useEffect, useState } from "react"

export const Fetch = async<T = any>(url: RequestInfo | URL, options?: RequestInit) : Promise<T | null> => {
  const csrf = (document.head.querySelector("[name~=csrf-token][content]") as HTMLMetaElement)?.content || ''
  // const accessToken = useUserStore.getState().accessToken
  
  try {
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

    const data = await response.json()
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