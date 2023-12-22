import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

function DataFetching() {

    const [data,setData]=useState([])
    const [id,setId]=useState("")
    const [btnid,setBtnid]=useState("")

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/comments/${btnid}`)
        .then(res => setData(res.data))
    },[data])
    //console.log({data})

    function handleClick(){
        setBtnid(id)
    }

  return (
    <div>DataFetching
        <input type='text' placeholder='give your id' value={id} onChange={(e)=>setId(e.target.value)}></input>
        <Button variant="primary" onClick={handleClick} >click for info</Button>
        <div><li><b>Id:     </b>{data.id}</li>
        <li><b>Name:    </b>{data.name}</li>
        <li><b>Email:   </b>{data.email}</li>
        <li><b>Body:    </b>{data.body}</li></div>
    </div>
  )
}

export default DataFetching