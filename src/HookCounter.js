import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function HookCounter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [name, setName] = useState({ firstName: "", LastName: "" }); //initializing to an object
  const [items, setItems] = useState([]); //initializing to an array

  const additem = () => {
    setItems([
      ...items,
      {
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevcount) => prevcount + 1);
    }
  };
  return (
    <div>
      <Button onClick={additem}>Add a number</Button>
      <ul>
        {items.map((d) => (
          <li >{d.value}</li>
        ))}
      </ul>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Card style={{ width: "20rem" }}>
          <div className="row">
            <Card.Header>
              <b>HookCounter</b>
              <br></br>
              Count : {count}
            </Card.Header>

            <Row>
              <Col>
                <Button
                  variant="primary"
                  onClick={() => setCount(initialCount)}
                >
                  Reset
                </Button>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  onClick={() => setCount((prevcount) => prevcount + 1)}
                >
                  Increment
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  variant="primary"
                  onClick={() => setCount((prevcount) => prevcount - 1)}
                >
                  Decrement
                </Button>
              </Col>
              <Col>
                <Button variant="primary" onClick={incrementFive}>
                  Increment 5
                </Button>
              </Col>
            </Row>
          </div>
        </Card>
        <div className="d-flex justify-content-center align-items-center ">
          <Card style={{ width: "35rem" }}>
            <Card.Header>
              <b>Form</b>
            </Card.Header>
            <form>
              <span>First Name</span>
              <input
                type="text"
                name="name"
                value={name.firstName}
                onChange={(e) => {
                  setName({ ...name, firstName: e.target.value });
                }}
              ></input>
              <span>Last Name</span>
              <input
                type="text"
                name="name"
                value={name.LastName}
                onChange={(e) => setName({ ...name, LastName: e.target.value })}
              ></input>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HookCounter;
