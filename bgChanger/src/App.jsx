import { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState('olive')
  return (
    <div className='w-screen h-screen duration-200' style={{ backgroundColor: bgColor }}>
      
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>
        
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "red", color:"white" }} onClick={() => setBgColor("red")}>RED</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Green", color:"white" }} onClick={() => setBgColor("green")}>GREEN</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Blue", color:"white" }} onClick={() => setBgColor("blue")}>BLUE</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Cyan", color:"white" }} onClick={() => setBgColor("cyan")}>CYAN</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Grey", color:"white" }} onClick={() => setBgColor("grey")}>GREY</button>
          {/* Provide all the reamining color pellets */}
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Yellow", color:"white" }} onClick={() => setBgColor("yellow")}>YELLOW</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Purple", color:"white" }} onClick={() => setBgColor("purple")}>PURPLE</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Pink", color:"white" }} onClick={() => setBgColor("pink")}>PINK</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Orange", color:"white" }} onClick={() => setBgColor("orange")}>ORANGE</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Brown", color:"white" }} onClick={() => setBgColor("brown")}>BROWN</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Black", color:"white" }} onClick={() => setBgColor("black")}>BLACK</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "White", color:"black" }} onClick={() => setBgColor("white")}>WHITE</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Gray", color:"white" }} onClick={() => setBgColor("gray")}>GRAY</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Silver", color:"black" }} onClick={() => setBgColor("silver")}>SILVER</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Gold", color:"black" }} onClick={() => setBgColor("gold")}>GOLD</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Navy", color:"white" }} onClick={() => setBgColor("navy")}>NAVY</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Teal", color:"white" }} onClick={() => setBgColor("teal")}>TEAL</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Lime", color:"black" }} onClick={() => setBgColor("lime")}>LIME</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Aqua", color:"black" }} onClick={() => setBgColor("aqua")}>AQUA</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "Maroon", color:"white" }} onClick={() => setBgColor("maroon")}>MAROON</button>
        </div>
      </div>
    </div>
  )
}

export default App
