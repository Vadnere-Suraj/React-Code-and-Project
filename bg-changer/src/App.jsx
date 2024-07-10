import { useState } from "react"


function App() {
  const [color,setColor] = useState('red')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
          <div className="flex flex-wrap gap-2 bg-white px-3 py-2 rounded-2xl">
              <button className="text-white px-3 py-2 rounded-2xl" onClick={() => setColor('red')} style={{backgroundColor: 'red'}}>
                Red
              </button>

              <button className="text-white px-3 py-2 rounded-2xl" onClick={() => setColor('green')} style={{backgroundColor: 'green'}}>
                Green
              </button>

              <button className="text-white px-3 py-2 rounded-2xl" onClick={() => setColor('blue')} style={{backgroundColor: 'blue'}}>
                Blue
              </button>

              <button className="text-white px-3 py-2 rounded-2xl" onClick={() => setColor('orange')} style={{backgroundColor: 'orange'}}>
                Orange
              </button>

              <button className="text-white px-3 py-2 rounded-2xl" onClick={() => setColor('olive')} style={{backgroundColor: 'olive'}}>
                Olive
              </button>

              <button className="text-black px-3 py-2 rounded-2xl" onClick={() => setColor('lavender')} style={{backgroundColor: 'lavender'}}>
                Lavender
              </button>

              <button className="text-white px-3 py-2 rounded-2xl" onClick={() => setColor('brown')} style={{backgroundColor: 'brown'}}>
                Brown
              </button>

              <button className="text-white px-3 py-2 rounded-2xl" onClick={() => setColor('purple')} style={{backgroundColor: 'purple'}}>
                Purple
              </button>
          </div>
      </div>
    </div>
  )
}

export default App
