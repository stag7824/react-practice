import { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState('olive')
  return (
    <div className='w-screen h-screen duration-200' style={{ backgroundColor: bgColor }}>
      
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>
        
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "red" }} onClick={() => setBgColor("red")}>RED</button>

          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Green" }} onClick={() => setBgColor("green")}>GREEN</button>

          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Blue" }} onClick={() => setBgColor("blue")}>BLUE</button>

          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Cyan" }} onClick={() => setBgColor("cyan")}>CYAN</button>

          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Grey" }} onClick={() => setBgColor("grey")}>GREY</button>

        </div>
      </div>
    </div>
  )
}

export default App
