import React, { useState } from 'react'
import ColorNav from './Components/ColorNav'

const App = () => {
  const[color, setColor] = useState("black")
  console.log(color);
  return <div className='w-screen h-screen' style={{backgroundColor:`${color.toLowerCase()}`}}><ColorNav setColor={setColor} /></div>

}

export default App