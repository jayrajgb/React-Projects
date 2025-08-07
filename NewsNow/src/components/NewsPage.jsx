import React, { useEffect, useState } from "react";
import fetchNews from "../data/fetchNews";

import NewsCard from "./NewsCard";

const NewsPage = (props) => {

    const [data, setData] = useState({});

    useEffect(()=>{
        if(props.value !== ""){
            fetchNews(props.value)
            .then((response)=>{
                // console.log("Response on new page: ",response);
                setData(response);
            })
            .catch((err)=>{
                // console.log(err);
            })
        }
    }, [props.value])

    return (
        <>
        {
            data.articles &&
            (
                <div className="w-screen py-10 px-5 pb-10 flex flex-wrap gap-6 justify-center dark:bg-neutral-800">
                    {
                        data.articles.map((item, index)=>{
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