import React from 'react'
import search from '../assets/search.svg'

const SearchBar = (props) => {

  return (
    <>
    <div className="pt-24 h-48 bg-neutral-100 flex justify-center items-center">
        <div className="w-2/5 bg-green-500 h-1/2 rounded-full relative z-0">
            <input type="text" className="size-full px-6 text-lg font-redhat font-semibold bg-neutral-100 rounded-full absolute border-2 border-neutral-200 outline-none hover:outline hover:outline-cyan-500 "
            onChange={(e) => {
                props.value.query = e.target.value;
                // console.log("Query: ", e.target.value);
                console.log("Searched query: ", props.value.query);
            }}
            placeholder="Search news..."
            />
            <button className="h-full w-24 absolute right-0 flex justify-center items-center rounded-full bg-cyan-400 hover:bg-cyan-500"
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
                    console.log("Query: ", props.value.query);
                }
            }}
            >
                <img className="size-5" src={search} />
            </button>
        </div>
    </div>
    </>
  )
}

export default SearchBar
