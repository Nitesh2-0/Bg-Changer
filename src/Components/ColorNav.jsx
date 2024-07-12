import React from 'react'

const ColorNav = ({setColor}) => {
  return (
    <div className='w-[95%] md:w-[70%] h-12 bg-slate-900 absolute border border-slate-700 bottom-0 md:bottom-6 absolute-center rounded'>
      <button onClick={()=> setColor("Blue")} className='w-48  bg-[#0000FF] h-full rounded-l' >Blue</ button>
      <button onClick={()=> setColor("Green")} className='w-48  bg-[#008000]  h-full' >Green</ button>
      <button onClick={()=> setColor("Yellow")} className='w-48  bg-[#FFFF00] h-full' >Yellow</ button>
      <button onClick={()=> setColor("Red")} className='w-48  bg-[#FF0000] h-full' >Red</ button>
      <button onClick={()=> setColor("White")} className='w-48  bg-white h-full text-black' >white</ button>
      <button onClick={()=> setColor("Black")} className='w-48  bg-black h-full rounded-r' >Black</ button>
    </div>

  )
}

export default ColorNav