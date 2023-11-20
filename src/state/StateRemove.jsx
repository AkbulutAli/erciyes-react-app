import React, { useState } from 'react'

function StateRemove() {
    
    const [numberRemove, setnumberRemove] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
    const remove = () =>{
        const indexRemove = Math.floor(Math.random() * 20)
        setnumberRemove(numberRemove.filter((item) => item !== numberRemove[indexRemove]))
        
    }

    return (<>
        <button onClick={remove}> Remove </button>
        <ul>
            {numberRemove.map((item) => <li>{item}</li>)}
        </ul>
    </>

    )
}

export default StateRemove