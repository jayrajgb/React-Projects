import React from 'react';
import { useNavigate } from 'react-router-dom';

const Meme = (props) => {
    const navigate = useNavigate();
    console.log(props);
    return (
        <div className='max-w-64 min-h-96 p-4 rounded-md border-2 border-blue-700 flex flex-col justify-between hover:bg-neutral-100 hover:cursor-pointer'>
            <div className='flex flex-col gap-y-2'>
                <img className='w-full' src={props.url} />
                <p className=' font-poppins-medium'>{props.name}</p>
            </div>
            <div className='flex justify-center'>
                <button 
                className='w-full text-lg font-poppins-medium text-white bg-blue-500 px-4 py-2 rounded-md outline-none active:outline-2 active:outline-blue-400 mt-4'
                onClick={()=>{navigate(`/edit?url=${props.url}`)}}
                >
                Edit
                </button>
            </div>
        </div>
    )
}

export default Meme;