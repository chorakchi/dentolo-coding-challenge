import { useState, useEffect } from 'react';
// TODO: we  can implement a function for logger by  log4js or other lib

// it using for fetch in react  for client call as reactive hook
// we can use SWR here instead of this hook
export const useFetch = (url: string, ...props: any) => {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState();

    useEffect(() => {
        if (!url) return;
        setStatus('fetching');

        const fetchData = async () => {
            const response = await fetchApi(url, ...props);
            setData(response);
            setStatus('fetched');
        };

        fetchData();
    }, [url]);

    return [status, data];
};

//it using as a generic function for async call API
export const fetchApi = async (url: string, ...props: any) => {
    let rawData: any;
    try {
        // Fetch data from REST API
        const response = await fetch(url, ...props);

        if (response.status === 200) {
            // Extract json
            rawData = await response.json();
        } else {
            // log.error (`Error ${response.status} ${response}`);
            console.error(`Error ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        // log.error(`Error ${error}`);
        console.error(`Error ${error}`);
    }

    return rawData;
};
