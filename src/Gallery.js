import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import TextareaAutosize from "react-textarea-autosize";
import Nav from "react-bootstrap/Nav";

function Gallery() {
  return (
    <div>
      <Nav className="justify-content-start" activeKey="/home">
    <Nav.Item>
      <Nav.Link style={{ fontFamily: "Georgia,serif", padding: "20px",color:"#ff0057" }}>
      <h3>Blogim!!</h3>
      </Nav.Link>
    </Nav.Item>
    <Nav className="justify-content-end" activeKey="/home" >
      <Nav.Item>
        <Nav.Link
          href="/home"
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
          eventKey="link-2"
          style={{ fontFamily: "Georgia,serif", padding: "20px" }}
        >
          Gallery
        </Nav.Link>
      </Nav.Item>
      <Nav.Item >
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
  <Form>
    <Row style={{justifyContent:"center"}}>
      <Col xs="auto">
        <Form.Control type="text" placeholder="Search photographer" />
      </Col>
    </Row>
  </Form>
         
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
</div>
  )
}

export default Gallery