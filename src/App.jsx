import React from 'react'
import './App.css'
import { useState } from 'react'
function App() {
  let [color, setcolor] = useState('lightgreen')

  let [btnColor, setBtnColor] = useState([
    { colorName: 'red' },
    { colorName: 'blue' },
    { colorName: 'yellow' },
    { colorName: 'purple' },
    { colorName: 'orange' },
    { colorName: 'lightgreen' },
    { colorName: 'green' },
    { colorName: 'lightyellow' },
    { colorName: 'white' },
  ])

  const handleColor = (newcolor) => {
    setcolor(newcolor)
  }

  return (
    <div className='container' style={{ backgroundColor: color }}>
      <div className="box" >
        {
          btnColor.map((item, index) => (
            <button key={index} onClick={() => handleColor(item.colorName)} style={{ backgroundColor: item.colorName }} >{item.colorName}</button>
          ))
        }

      </div>
    </div>
  )
}

export default App;


