import React from 'react'

const NewsCardLazy = () => {
    return (
        <>
            <div className="w-36 md:w-64 h-48 md:h-56 p-2 shadow-lg border border-cyan-500 dark:border-none rounded-md flex flex-col gap-y-2 dark:text-neutral-100 dark:bg-neutral-950">
                <div className="h-2/5">
                    <div className="size-full rounded-md bg-neutral-200 dark:bg-neutral-900 animate-pulse">
                        
                    </div>
                </div>
                <div className="h-3/5">
                    <div className="size-full rounded-md bg-neutral-200 dark:bg-neutral-900 animate-pulse">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsCardLazy
