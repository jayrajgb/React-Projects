import React, { useState } from 'react'
import Draggable from 'react-draggable'

const Text = () => {

  const [editMode, seteditMode] = useState(false);

  const toggleEdit = () => {
    seteditMode(!editMode);
  }

  const [value, setValue] = useState("Double Click To Edit");

  return (
    <>
        <Draggable>
            <div className='text-2xl font-impact p-1' onDoubleClick={toggleEdit}>
                {
                    editMode ? (
                        <input type="text" className='min-w-0 max-w-4/5 h-full outline-none focus:outline-blue-600 focus:outline-2 px-2 py-1' value={value} onChange={(e)=>{setValue(e.target.value)}} />
                    )
                    :
                    (
                        <>
                            {value}
                        </>
                    )
                }
            </div>
        </Draggable>
    </>
  )
}

export default Text
