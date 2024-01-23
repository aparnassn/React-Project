import React from "react";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "@reach/router";

function Blogim() {
  const navigate = useNavigate();

  return (
    <div>
      <Nav className="justify-content-start" activeKey="/blog">
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
            {/* <Nav.Link
              href="/newimage"
              eventKey="link-3"
              style={{ fontFamily: "Georgia,serif", padding: "20px" }}
            >
              New Image
            </Nav.Link> */}
            <Link to="gallery"/>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/signup"
              eventKey="link-4"
              style={{ fontFamily: "Georgia,serif", padding: "20px" }}
            >
              SignUp
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
    </div>
  );
}

export default Blogim;
