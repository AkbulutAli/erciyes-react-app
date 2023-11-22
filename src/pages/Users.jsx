import axios from 'axios'
import React, { useState, useEffect } from 'react'


function Users() {
    const [users, setusers] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setusers(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    
    const change = (e) =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.value}`)
            .then((res) => res.json())
            .then((data) => {
                
                document.getElementById('title').innerHTML = data.title
                document.getElementById('body').innerHTML = data.body
                
            })
    }



    return (<>
        <div>users</div>
        <select name="users" id="users" onChange={change}>
            {users.map((item) => (
                <option value={item.id}>{item.name}</option>
            ))}
        </select>

        <p id='title'></p>
        <p id='body'></p>

        
    </>
    )
}

export default Users