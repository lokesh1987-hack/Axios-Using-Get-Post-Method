import axios from 'axios'
import React,{useState} from 'react'


function Input() {

    const [state,setState] = useState("") 
    const [response,setResponse] = useState("")

    const handler=()=>{
        console.log(state)
        axios.post('https://jsonplaceholder.typicode.com/posts',{state}).then((response)=>{setResponse(response.data)}).catch((response)=>{setResponse(response.data)})       
        console.log(response)
    }

    return (
        <div>
            <div>
                <h3>Hello User</h3>
            </div>
            <input type="text" value={state} onChange={(e)=>setState(e.target.value)} />
            <button onClick={handler} >Add</button>
        </div>
    )
}

export default Input
