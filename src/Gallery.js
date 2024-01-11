import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NewImage from "./NewImage";
import ImageList from "./ImageList";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Gallery() {
  const [data, setData] = useState(ImageList);

  

  function handleClick() {}
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
        <Nav className="justify-content-end" activeKey="/home">
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
      <Form>
        <Row style={{ justifyContent: "center" }}>
          <Col xs="auto">
            <Form.Control type="text" placeholder="Search book title" />
          </Col>
        </Row>
      </Form>
      <div className="row">
        {data.map((d) => (
          <div className="col-sm-4 py-3">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Button>
                  <Card.Img src={d.image} onClick={handleClick}></Card.Img>
                </Button>
                <Card.Title style={{ padding: 10 }}>{d.title}</Card.Title>
                <Card.Text>{d.des}</Card.Text>
              </Card.Body>
            </Card>
            
          </div>
        ))}
        <div className="one">

              <p>This quotation for Faulkner's 1936 novel comes from the Books of Samuel  more specifically, 19:4 in 2 Samuel, which is in the Old Testament and relates some of the history of Israel. Absalom, the third son of David, rebelled against his father and was killed in battle. The full Biblical sentence is But the king covered his face, and the king cried with a loud voice, O my son Absalom, O Absalom, my son, my son! Faulkner was a big fan of borrowed titles: his 1939 If I Forget Thee, Jerusalem is also from the Bible, Psalms 137:5. The line in question is If I forget thee, Jerusalem, let my right hand forget its skill.</p>
            </div>
      </div>
    </div>
  );
}

export default Gallery;
