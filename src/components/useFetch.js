import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    useEffect(()=> {
        console.log(url)
        axios.get(url).then((res)=> {
            console.log(res.data)
            setData(res.data);
        }).catch((err)=> {
            setData(false);
        });
    },[url])
    return [data];
}

export default useFetch;