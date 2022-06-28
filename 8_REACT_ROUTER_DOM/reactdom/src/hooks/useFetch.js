import { useState, useEffect } from 'react';

// 4 - custom hook
export const useFetch = (url) => {
    const [data, setdata] = useState(null)


    // 5 - refatorando o post
    const [config, setconfig] = useState(null)
    const [method, setmethod] = useState(null)
    const [callFetch, setcallFetch] = useState(false)

    // 6 - loading
    const [loading, setloading] = useState(false)

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setmethod(method)
            setconfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
        }
    }

    useEffect(() => {

        const fetchData = async () => {

            setloading(true);

            const res = await fetch(url);

            const json = await res.json();

            setdata(json);

            setloading(false);


        }

        fetchData();

    }, [url, callFetch]);

    // 5 - refatorando post
    useEffect(() => {

        const httpRequest = async () => {
            if(method === 'POST'){

                let fetchOptions = [url, config];
    
                const res = await fetch(...fetchOptions)
    
                const json = await res.json()
    
                setcallFetch(json);
    
            }
        }

        httpRequest()

    }, [config, method, url])



    return { data, httpConfig, loading};
};