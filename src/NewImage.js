import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import TextareaAutosize from "react-textarea-autosize";
import Nav from "react-bootstrap/Nav";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ImageList } from "./ImageList";
import { useContent } from "./BlogCardsA";
import { useContext } from "react";
import { Link } from "react-router-dom";

function NewImage() {
  const navigate = useNavigate();
  const {data, setData} =useContent()
  const [formData, setFormData] = useState({
    title : "",
    des : "",
    author : "",
    image : ""
  });
  //console.log(formData);
  
  function handleClick() {
   setData((o)=>([...o,formData]))
   setFormData({
    title : "",
    des : "",
    author : "",
    image : ""
  })

  
  }
console.log(data)
  // setData()
  // function validateInput() {
  //   if (!data.title.length > 0) {
  //     alert("enter all fields");
  //     return false;
  //   }

  //   if (data.des.length < 16) {
  //     alert("description must be atleast 16 characters");
  //     return false;
  //   }

  //   if (!data.author.length > 0) {
  //     alert("enter all fields");
  //     return false;
  //   }
  //   if (!data.image.length > 0) {
  //     alert("enter all fields");
  //     return false;
  //   } else {
  //     window.location.replace("/newimage");
  //     return true;
  //   }
  // }
  

  return (
    <div>
      <Nav className="justify-content-start" activeKey="/home">
        <Nav.Item>
          <Nav.Link
            style={{
              fontFamily: "Georgia,serif",
              padding: "20px",
              color: "#ff0057",
            }}
          >
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
            {/* <Nav.Link
              eventKey="link-1"
              style={{ fontFamily: "Georgia,serif", padding: "20px" }}
            >
              New Blog
            </Nav.Link> */}
            <Link to="/newblog"> New Blog</Link>
          </Nav.Item>
          <Nav.Item>
            {/* <Nav.Link
              href="/gallery"
              eventKey="link-2"
              style={{ fontFamily: "Georgia,serif", padding: "20px" }}
            >
              Gallery
            </Nav.Link> */}
             <Link to="/gallery"> Gallery</Link>
          </Nav.Item>
          <Nav.Item>
            {/* <Nav.Link
              href="/newimage"
              eventKey="link-3"
              style={{ fontFamily: "Georgia,serif", padding: "20px" }}
            >
              
            </Nav.Link> */}
             <Link to="/newimage"> New Image</Link>
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
                      name="title"
                      value={formData.title}
                      style={{ width: "300px", height: "45px" }}
                      onChange={(e) => {
                        setFormData((o) => {
                          return { ...o, title: e.target.value };
                        });
                      }}
                    ></input>
                    <h6>Image Description:</h6>
                    <TextareaAutosize
                      style={{ width: "300px", height: "100px" }}
                      name="des"
                      value={formData.des}
                      placeholder=" This image is the most amazing image as i have ever taken"
                      onChange={(e) => {
                        setFormData((o) => {
                          return { ...o, des: e.target.value };
                        });
                      }}
                    >
                      This image is the most amazing image as i have ever taken
                    </TextareaAutosize>
                    <h6>Image Author:</h6>
                    <input
                      type="text"
                      placeholder="Yossi As"
                      name="author"
                      value={formData.author}
                      style={{ width: "300px", height: "45px" }}
                      onChange={(e) => {
                        setFormData((o) => {
                          return { ...o, author: e.target.value };
                        });
                      }}
                    ></input>
                    <h6>Enter your Image:</h6>
                    <input
                      type="text"
                      placeholder="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRssK4b3rN8eNRP62msKifMLeOmzZrCup4YAA&s"
                      name="image"
                      value={formData.image}
                      style={{ width: "300px", height: "45px" }}
                      onChange={(e) => setFormData((o)=>{
                        return {...o,image:e.target.value}
                      })}
                    ></input>

                    <center style={{ padding: "10px" }}>
                      <Button variant="primary" onClick={()=>{handleClick();navigate("/gallery")}}>
                        Add Image
                      </Button>
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

// ;navigate("/gallery")