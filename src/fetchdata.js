import { useEffect, useState } from "react";
import axios from 'axios';


function Fetchingdata() {
  const [data, setData] = useState([]);

const user ={
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  }
  const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then((res) =>res.data)
    .then((data) => setData(data));
  };
  useEffect(() => {getData()}, []);

const post =()=>{
    axios.post('https://jsonplaceholder.typicode.com/users/',user)
}

//Promise
let promise = new Promise(resolve=>
    setTimeout(() => {
        resolve("task2")
    }, 3000))
console.log("task1")

async function eee (){
    let res =await promise
    console.log(res)
    console.log("task3")
}
eee()
//
  return (
    <div>
    <button onClick={()=>post()}>Submit</button>
      <table>
        <tr>
          <td>Id</td>
          <td>Title</td>
          <td>url</td>
        </tr>
        {data.map((d) => (
          <tr>
            <td>{d.id}</td>
            <td>{d.title}</td>
            <td><img src={d.url} height={"100px"} width={"100px"}/></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Fetchingdata;
