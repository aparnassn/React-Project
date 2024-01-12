import React, { useEffect } from 'react'
import { useState } from 'react'

function ReadingMap() {
    const [todo,setTodo]=useState()

    const getdata = async()=>{
        const Response = await fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((response)=>response.json())
        setTodo(Response)
    }

    useEffect(()=>{
        getdata()
    },[])
  return (
    <div className='ReadingMap'>
        {todo && todo.map((record)=>(           /*here checking whether todo is empt or not*/
            <div key={record.id}>{record.title}</div>
        ))}
    </div>
  )
}

export default ReadingMap