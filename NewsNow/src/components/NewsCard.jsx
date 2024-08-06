import React, { useEffect, useState } from "react";


const NewsCard = (props) => {

    const [url, setUrl] = useState("");

    const openNews = () => {
        window.open(url, '_blank');
    }

    useEffect(()=>{
        setUrl(props.value.url);
        console.log("Url: ",url);
    }, [])

    return (
        <>
            <div className="w-64 border-2 border-cyan-500 p-2 rounded-md flex-col space-y-1 font-redhat md:text-lg cursor-pointer hover:bg-neutral-200" onClick={openNews}>
                {
                    (props.value.urlToImage) ? 
                    (
                        <>
                            <div className="min-h-1/2">
                                <img className="rounded-md bg-cover" src={props.value.urlToImage} />
                            </div>
                            <div className="h-1/2 flex-col space-y-2">
                                <div className="font-semibold">
                                    {props.value.title}
                                </div>
                                <div className="flex ">
                                    {props.value.author}
                                </div>
                            </div>
                        </>
                    )
                    :
                    (
                        <>
                            <div className="h-3/5 font-semibold">
                                {props.value.title}
                            </div>
                            <div className="h-2/5 flex items-end">
                                {props.value.author} 
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default NewsCard;