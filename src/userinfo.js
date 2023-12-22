import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";

function Userinfo() {
  const [data, setData] = useState({
    id:"",
    name:"",
    body:"",
  });

  const [edit,setEdit]= useState(false)

  let input = window.location.hash.split("#")[1];

  const getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${input}`)
      .then((res) => setData(res.data));
  };

  useEffect(() => 
    getData()
  , []);

  const post = (id) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/comments/${id}`, data);
     
  };

  return (
    <div className="row">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-sm-3">
          <Card>
            <Card.Header>Form</Card.Header>
            <Card.Body>
              <span>Name</span>
              <input
                type="text"
                value={data.name}
                onChange={(e) => {
                  setData((o) => {
                    return {
                      ...o,
                      name: e.target.value,
                    };
                  });
                }}
              ></input>
              <span>email</span>
              <input
                type="email"
                value={data.email}
                onChange={(e) => {
                  setData((o) => {
                    //console.log({...o})
                    return { ...o, email: e.target.value };
                  });
                }}
              ></input>
              <center>
                <Button variant="primary" onClick={() => post(data.id)}>
                  Edit
                </Button>
              </center>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Userinfo;
