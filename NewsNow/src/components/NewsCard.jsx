import React, { useEffect, useState } from "react";


const NewsCard = (props) => {

    const [url, setUrl] = useState("");

    const openNews = () => {
        window.open(url, '_blank');
    }

    useEffect(()=>{
        setUrl(props.value.url);
        // console.log("Url: ",url);
    }, [])

    return (
        <>
            <div className="w-36 md:w-64 min-h-48 md:min-h-56 p-2 shadow-lg border border-cyan-500 rounded-md flex-col space-y-2 font-redhat text-sm md:text-lg cursor-pointer hover:bg-neutral-200" onClick={openNews}>
                {
                    (props.value.urlToImage) ? 
                    (
                        <>
                            <div className="h-2/5">
                                <img className="size-full rounded-md object-cover" src={props.value.urlToImage} />
                            </div>
                            <div className="h-3/5 flex-col justify-between">
                                <div className="h-4/5 font-semibold pb-2">
                                    {props.value.title}
                                </div>
                                <div className="h-1/5 flex items-end justify-end pt-2 py-1 pr-1 text-cyan-600 truncate">
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
                            <div className="h-2/5 flex items-end justify-end pb-1 pr-1 text-cyan-600 truncate">
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