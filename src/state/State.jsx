import React from 'react'
import { useState } from 'react'

function State() {
    const [counter, setcounter] = useState(0)

    const increase = () => {
        setcounter(counter + 100)
    }

    const [counter2, setcounter2] = useState([])
    const adRondom = () => {
        var random = Math.floor(Math.random() * 100)
        setcounter2([...counter2, random])

    }

    const [color, setColor] = useState("black")

    const changeBackground = () => {
        const colors = ["red", "blue", "green", "yellow", "purple", "pink", "orange", "black", "white"];
        setColor(colors[Math.floor(Math.random() * colors.length)]);
    }
    
    
    return (<>
        <div style={{backgroundColor:color, width:"100px", height:"100px"}}></div>
        <div style={{ backgroundColor:"black", width:counter, height:counter}}></div>
        <button onClick={increase}>Increase</button>
        <button onClick= {adRondom}> AddRandom </button>
        <button onClick = {changeBackground}> ChangeBackground </button>
        <ul>
            {counter2.map((item) => <li>{item}</li>)}
        </ul>
        
    </>
    )
 
}

export default State