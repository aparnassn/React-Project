import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Usercard() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  function handleClick(id) {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => setData(res.data));
  }

  const getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then((res) => setData(res.data));
  };
  //console.log({data})

  useEffect(() => {
    getData();
  }, []);
  //console.log({data})
  

  return (
    <div className="row">
      {data.map((d) => (
        <div className="col-sm-4 py-3">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              {d.name}
              <br></br>
              <center>
                <button
                  type="btn btn-primary"
                  onClick={() => {
                    handleClick(d.id);
                    navigate(`/userinfo#${d.id}`);
                  }}
                >
                  click for info
                </button>
              </center>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Usercard;
