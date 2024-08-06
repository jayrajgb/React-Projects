import React, { useEffect, useState } from "react";
import fetchNews from "../data/fetchNews";

import NewsCard from "./NewsCard";

const NewsPage = (props) => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchNews(props.value).then((response)=>{
            console.log(response);
            setData(response.articles);
            console.log(data);
        })
    }, [props])

    return (
        <>
        {
            data &&
            (
                <div className=" pt-28 pb-10 flex flex-wrap gap-6 justify-center">
                    {
                        data.map((item, index)=>{
                            return (
                                <NewsCard value={item} key={index} />
                            )
                        })
                    }

                </div>
            )
            // :
            // (
            //     <div className=" pt-28 pb-10 text-center font-redhat font-semibold text-2xl">
            //         No Results Found
            //     </div>
            // )
        }
        </>
    )
}

export default NewsPage;