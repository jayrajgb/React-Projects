import React, { useState, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { exportComponentAsJPEG } from 'react-component-export-image';

import Text from '../components/Text';

const Edit = () => {

    const [indexZero] = useSearchParams();
    console.log(indexZero.get("url"));

    const url = indexZero.get("url");

    const [textArray, setTextArray] = useState([]);

    const handleClick = () => {
        setTextArray([...textArray, <Text key={textArray.length} />])
    }

    const print = useRef();

    const handleSave = () => {
        exportComponentAsJPEG(print)
    }

    return (
        <div ref={print} className='min-w-full min-h-full p-2 flex flex-col items-center'>
            <div className='p-4 max-w-[480px] mt-10 border-2'>
                <img src={url} className='w-full' />
            </div>
            <div className='w-64 flex gap-x-2'>
                <button
                    className='w-1/2 text-lg font-poppins-medium text-white bg-blue-500 px-4 py-2 rounded-md outline-none hover:bg-blue-600 active:outline-2 active:outline-blue-400 mt-4'
                    onClick={handleClick}
                >
                    Add Text
                </button>
                <button
                    className='w-1/2 text-lg font-poppins-medium text-white bg-green-500 px-4 py-2 rounded-md outline-none hover:bg-green-600 active:outline-2 active:outline-blue-400 mt-4'
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
            {
                // A Text Component should render, for everytime the button gets clicked
                textArray.map((text, index)=>(
                    <React.Fragment key={index}>
                        {text}
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default Edit
