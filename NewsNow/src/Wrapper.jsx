import React, { useEffect, useState } from 'react'

const Wrapper = (props) => {
  
const [theme, setTheme] = useState("");

const handleTheme = () => {
    if(theme === ""){
        setTheme("dark");
    }
    else{
        setTheme("");
    }
    // console.log("Clicked")
}

// useEffect(()=>{

// }, [theme])

return (
    <div className={`${theme} ` + ""}>
        {props.children}
        <button className={"size-10 rounded-full bg-black dark:bg-white text-white dark:text-black text-md font-bebas font-semibold fixed bottom-10 right-10 z-20 flex justify-center items-center cursor-pointer"}
        onClick={handleTheme}
        >
            {
                theme === "" ? <>DRK</> : <>LHT</>
            }
        </button>
    </div>
  )
}

export default Wrapper
