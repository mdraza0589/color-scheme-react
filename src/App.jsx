import React from 'react'
import './App.css'
import { useState } from 'react'
function App() {
  let colors = ['red', 'blue', 'yellow', 'purple', 'orange', 'lightgreen', 'green', 'lightyellow', 'white',]

  let [color, setcolor] = useState('lightgreen')

  const handleColor = (newcolor) => {
    setcolor(newcolor)
  }

  return (
    <div className='container' style={{ backgroundColor: color }}>
      <div className="box" >
        {
          colors.map((item, index) => (
            <button key={index} onClick={() => handleColor(item)} style={{ backgroundColor: item }} >{item}</button>
          ))
        }

      </div>
    </div>
  )
}

export default App;


