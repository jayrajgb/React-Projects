import React, { useEffect, useState } from 'react'
import ScrollToTop from './components/ScrollToTop';


const Wrapper = (props) => {
  
const [theme, setTheme] = useState("");

const handleTheme = () => {
    if(theme === ""){
        setTheme("dark");
    }
    else{
        setTheme("");
    }
}

return (
    <div className={`${theme} ` + ""}>
        <ScrollToTop/>
        {props.children}
        <button className={"size-10 rounded-full bg-black dark:bg-white text-white dark:text-black text-md font-bebas font-semibold fixed bottom-10 right-10 z-20 flex justify-center items-center cursor-pointer outline-none hover:outline hover:outline-cyan-500"}
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
