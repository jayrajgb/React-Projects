import React, { useEffect, useState } from "react";
import fetchNews from "../data/fetchNews";

import NewsCard from "./NewsCard";

const NewsPage = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchNews().then((response)=>{
            console.log(response);
            setData(response.articles);
            console.log(data);
        })
    }, [])

    return (
        <>
        <div className="w-full pt-28 pb-10 flex flex-wrap gap-6 justify-center">
            {
                data.map((item, index)=>{
                    return (
                        <NewsCard value={item} key={index} />
                    )
                })
            }

        </div>
        </>
    )
}

export default NewsPage;