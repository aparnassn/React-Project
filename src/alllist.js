import { useState } from "react";
import {Link,useLocation} from 'react-router-dom'

function Alllist(){
    const [checkbox1,setCheckbox1]=useState("")
    //const location=useLocation()
    //console.log(window.history,location)
    //console.log(props)
    // let add = list.map(d)=>(<tr>
    //                         <td>{d.}</td>
    //                     </tr>)

   
    
    return(
        <div>
        <table>
        <div className="container" style={{backgroundColor:"skyblue"}}>
        <div className="d-flex justify-content-center align-items-center"></div>
        <div className="col-sm-6">
            <div className="card">
            <div className="card-body">
            
            <input type="text" className="form-control" name="text" placeholder="Search" >
            </input>
            
            
           
            
            </div>
            </div>
            </div>
            </div>
            </table>
        </div>
    )
}

export default Alllist;