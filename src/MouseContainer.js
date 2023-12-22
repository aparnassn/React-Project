import React from 'react'
import { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap'
import HookMouse from './HookMouse'

function MouseContainer() {

    const [display,setDisplay]= useState(true)

  return (
    <div>
        <Button onClick={()=> setDisplay(!display)} >Toggle display</Button>
        {display && <HookMouse/>}
    </div>
  )
}

export default MouseContainer