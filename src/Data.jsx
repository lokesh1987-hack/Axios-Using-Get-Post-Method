import React, { useEffect } from 'react' 
import { useState } from 'react';
import axios from 'axios'

function Data(){

    const [data,setData] = useState([])
    

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{setData(response.data)}).catch((response)=>{console.log(response.data)})
    })

    return(
        <div>
            <ul className="List"> 
            {data.map((value)=>{
                return(
                    <div className="listBox">
                            <li className="listValue">{value.title}</li>           
                    </div>
                )
            })}
            </ul>
        </div>
    )
}
export default Data;