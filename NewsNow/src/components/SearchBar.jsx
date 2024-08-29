import React from 'react'
import search from '../assets/search.svg'

const SearchBar = (props) => {

  return (
    <>
    <div className="pt-24 h-44 md:h-48 bg-neutral-100 dark:bg-neutral-800 flex justify-center items-center">
        <div className="w-3/5 md:w-2/5 h-1/2 rounded-full relative z-0">
            <input type="text" className="size-full px-4 md:px-6 text-sm md:text-lg dark:text-neutral-100 font-redhat font-semibold bg-neutral-100 dark:bg-neutral-900 rounded-full absolute border-2 border-neutral-200 dark:border-neutral-700 outline-none hover:outline hover:outline-cyan-500 dark:hover:outline-cyan-600"
            onChange={(e) => {
                props.value.query = e.target.value;
                // console.log("Query: ", e.target.value);
                // console.log("Searched query: ", props.value.query);
            }}
            placeholder="Search news..."
            />
            <button className="h-full w-16 md:w-24 absolute right-0 flex justify-center items-center rounded-full bg-cyan-400 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-600"
            onClick={()=>{
                if(props.value.query === ""){
                    alert("Search something!");
                }
                else{
                    // But setting encode to handle spaces
                    // props.value.setQuery(props.value.query);
                    const url = encodeURIComponent(props.value.query);
                    // Set
                    props.value.setQuery(url);
                    // console.log("Query: ", props.value.query);
                }
            }}
            >
                <img className="size-4 md:size-5" src={search} />
            </button>
        </div>
    </div>
    </>
  )
}

export default SearchBar
