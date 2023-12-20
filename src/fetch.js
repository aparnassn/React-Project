import axios from "axios";
import { useEffect, useState } from "react";

function Fetching(){
    const [data,setData]=useState([])

    const user ={
        
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
     
const getData=()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.data)
    .then(data=>setData(data));
}
    useEffect(()=>(getData()),[])   
    
   
console.log(data)
const post=()=>{
    axios.post("https://jsonplaceholder.typicode.com/posts",user)
}
    return(
        <div >
            <button onClick={()=>post()}>Submit</button>
            <table id="data" style={{borderColor:"1px solid black"}}>
                <tr>
                <th>Id</th>
                <th>Title</th>
                <th>completed</th>
                </tr>
                {data.map((d)=><tr><th>{d.id}</th>
                                    <th>{d.title}</th>
                                    <th>{d.completed}</th>
                                    </tr>)}
            </table>
        </div>
    )
}

export default Fetching;