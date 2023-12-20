import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FcOk } from "react-icons/fc";
//import Button from 'react-bootstrap/Button';

function Note(){
    const[addname,setAddname]=useState("")
    const [list,setList]=useState([])
    const [edit,setEdit]=useState(false)
    const [index,setIndex]=useState(0)
    const [completed,setCompleted]=useState(null)

function handleAdd(){
    if(addname==="" || addname===null){
        alert("Enter something...")
        return false
    }
    else{
        //console.log({list})
        setList((o)=>{
        let cp=[...o]
        cp.push(addname)
        //console.log({cp})
        return cp
        
    });
        return true
    }

}

let html= list.map((d,index)=>(
            <tr>
            <td id={index} style={completed===index?{color:"green"}:{color:"red"}}>{d}</td>
            <button className="button" onClick={()=>Edit(index)}> <MdEdit /></button>
            <button className="button" onClick={()=>handleDel(index)}><RiDeleteBin6Fill /></button>
            <button className="button" value={completed} onClick={()=>handleCompleted(index)} ><FcOk /></button>
            </tr>
));


function handleCompleted(index){
   let ele =document.getElementById(index)
    ele.style.color="green"
    // setCompleted(index)
    // console.log({index})
}

function handleDel(index){
    setList((element)=>{
    let cp=[...element]
    cp.splice(index,1)
    return cp

})
    
} 


function Edit(index){
    setEdit(true)
    let val= list[index]
    // console.log({val})
    setIndex(index)
    setAddname(val)
}

function handleUpdate(){
    setList((element)=>{
        let cp=[...element]
        cp[index]=addname
        setEdit(false)
        return cp
        
    })
}



    return(
        <div >
        
            <div className="container" style={{backgroundImage:`url(https://images.pexels.com/photos/2088203/pexels-photo-2088203.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-2088203.jpg&fm=jpg)`, backgroundSize:"cover" }}>
            <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
            <div className="col-sm-4">
            
                <div className="card" style={{backgroundColor:"#0A0C42"}}>
                <div className="card-body">
                    <h2 style={{textAlign:"center",color:"white"}}>TO DO THINGS</h2>
                    <center>                  
                     <input type="search" placeholder="Add New" value={addname} onChange={(e)=>setAddname(e.target.value)} ></input>
                     
                    {edit?<button className="btn btn-primary" onClick={()=>{handleUpdate();setAddname("")}}>Update</button>:
                    <button className="btn btn-primary" onClick={()=>{handleAdd();setAddname("")}}>Add</button>}
                    </center> 
                </div>
                <div className="d-flex justify-content-center align-items-center">
                <table  >
                <tr>
                    <td>{html}</td>
                </tr>
                </table>
                </div>
                </div>
                </div>
                </div>
            
            </div>
        </div>
    )
}

export default Note;