import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import TextareaAutosize from "react-textarea-autosize";
import Nav from "react-bootstrap/Nav";
import { useState ,useEffect} from "react";
import axios from "axios";

function NewImage() {
  const [data,setData]=useState([])

  const getData=()=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
    .then((res => setData(res.data)))
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <Nav className="justify-content-start" activeKey="/home">
        <Nav.Item>
          <Nav.Link style={{ fontFamily: "Georgia,serif", padding: "20px",color:"#ff0057" }}>
            <h3>Blogim!!</h3>
          </Nav.Link>
        </Nav.Item>
        <Nav className="justify-content-end" activeKey="/blog">
          <Nav.Item>
            <Nav.Link
              href="/blog"
              style={{
                fontFamily: "Georgia,serif",
                padding: "20px",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              style={{ fontFamily: "Georgia,serif", padding: "20px" }}
            >
              New Blog
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
            href="/gallery"
              eventKey="link-2"
              style={{ fontFamily: "Georgia,serif", padding: "20px" }}
            >
              Gallery
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/newimage"
              eventKey="link-3"
              style={{ fontFamily: "Georgia,serif", padding: "20px" }}
            >
              New Image
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Nav>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Container style={{ width: "400px", height: "500px" }}>
          <Row>
            <Card>
              <Col>
                <Card.Body>
                  <h5
                    style={{
                      fontFamily: "Georgia",
                      textAlign: "center",
                      color: "blue",
                    }}
                  >
                    Add New Image
                  </h5>

                  <Form>
                    <h6>Image title:</h6>
                    <input
                      type="text"
                      placeholder="Image"
                      style={{ width: "300px", height: "45px" }}
                    ></input>
                    <h6>Image Description:</h6>
                    <TextareaAutosize
                      style={{ width: "300px", height: "95px" }}
                    >
                      This image is the most amazing image as i have ever taken
                    </TextareaAutosize>
                    <h6>Image Author:</h6>
                    <input
                      type="text"
                      placeholder="Yossi As"
                      style={{ width: "300px", height: "45px" }}
                    ></input>
                    <h6>Enter your Image:</h6>
                    <input
                      type="text"
                      placeholder="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRssK4b3rN8eNRP62msKifMLeOmzZrCup4YAA&s"
                      style={{ width: "300px", height: "45px" }}
                    ></input>

                    <center style={{ padding: "10px" }}>
                      <Button variant="primary">Add Image</Button>
                    </center>
                  </Form>
                </Card.Body>
              </Col>
            </Card>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default NewImage;
