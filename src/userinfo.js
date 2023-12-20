import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function Userinfo(){
    const [data,setData]=useState([])
    const [userdata,setUserdata]=useState([])

    // const touser={
    //     id: 1,
    //     name: "Leanne Graham",
    //     username: "Bret",
    //     email: "Sincere@april.biz",
    //     address: {
    //       street: "Kulas Light",
    //       suite: "Apt. 556",
    //       city: "Gwenborough",
    //       zipcode: "92998-3874",
    //       geo: {
    //         lat: "-37.3159",
    //         lng: "81.1496"
    //       }
    //     },
    //     phone: "1-770-736-8031 x56442",
    //     website: "hildegard.org",
    //     company: {
    //       name: "Romaguera-Crona",
    //       catchPhrase: "Multi-layered client-server neural-net",
    //       bs: "harness real-time e-markets"
    //     }
    //   }
      // const getUserdata=()=>{
      //   axios.get("https://jsonplaceholder.typicode.com/users")
      //   .then(res=>res.userdata)
      //   .then(userdata=>setUserdata(userdata))
      // }
      // useEffect(()=>(getUserdata(),[]))
      // console.log({userdata})

      // const post1=()=>{
      //   axios.post("https://jsonplaceholder.typicode.com/users",touser)
      // }
      // const getpost = (id, callback) => {
      //   const elements = touser.find((elements) => elements.id === id);
      //   if (elements) {
      //       document.getElementById('id')=elements
      //   } else {
      //     callback("not found", undefined);
      //   }
      // };
      // console.log({getpost})
      
      let a=window.location.hash.split("#")[1]

    const user={
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
    const getData=()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${a}`)
        .then(res=>res.data)
        .then(data=>setData([data]))
    }
    useEffect(()=>(getData()),[])
    console.log({data})
    const post=()=>{
        axios.post("https://jsonplaceholder.typicode.com/posts",user)

    }
    return(
        <div>
        <table >
        
            <tr><th>Id</th>
            <th>Title</th>
            <th>body</th></tr>
            {data.map((d)=><tr>
                            <td>{d.id}</td>
                            <td>{d.title}</td>
                            <td>{d.body}</td></tr>)}
        </table>
        </div>
    )
}

export default Userinfo;