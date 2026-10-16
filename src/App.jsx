import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl '>
            <button
            onClick={()=> setColor("red")}
            className='px-4 py-2 rounded-xl text-white' 
            style={{backgroundColor:"red"}}>Red</button>
            <button
            onClick={()=> setColor("green")}
            className='px-4 py-2 rounded-xl text-white' 
            style={{backgroundColor:"green"}}>Green</button>
            <button
            onClick={()=> setColor("pink")}
            className='px-4 py-2 rounded-xl text-white' 
            style={{backgroundColor:"pink"}}>Pink</button>
            <button
            onClick={()=> setColor("blue")}
            className='px-4 py-2 rounded-xl text-white' 
            style={{backgroundColor:"blue"}}>Blue</button>
            <button
            onClick={()=> setColor("orange")}
            className='px-4 py-2 rounded-xl text-white' 
            style={{backgroundColor:"orange"}}>Orange</button>
            <button
            onClick={()=> setColor("olive")}
            className='px-4 py-2 rounded-xl text-white' 
            style={{backgroundColor:"Olive"}}>Olive</button>
          </div>
          </div>
      </div>
    </> 
  )
}

export default App
