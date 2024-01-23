import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NewImage from "./NewImage";
// import ImageList from "./ImageList";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
//import { GlobalStyle } from "./globalStyles";
import { useContent } from "./BlogCardsA";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

function Gallery() {
  // const [data, setData] = useState(ImageList);
  // const [showModal, setShowModal] = useState(false);
  const { data,setData } = useContent();
  console.log({ data });

  //const list = ["hello", "snjks"];

  const [list,setList]=useState([])

  const [itemList, setItemList] = useState(list);
  console.log(itemList);

  function SearchItem(e) {
    var content = e.target.value;
    var updatedlist = [...list];

    updatedlist = updatedlist.filter((f) => {
      return f.toLowerCase().indexOf(content.toLowerCase()) !== -1;
    });
    setItemList(updatedlist);
  }
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
              eventKey="link-2"
              style={{ fontFamily: "Georgia,serif", padding: "20px" }}
            >
              Gallery
            </Nav.Link> */}
            <Link to="/gallery">Gallery</Link>
          </Nav.Item>
          <Nav.Item>
            {/* <Nav.Link
              href="/newimage"
              eventKey="link-3"
              style={{ fontFamily: "Georgia,serif", padding: "20px" }}
            >
              New Image
            </Nav.Link> */}
            <Link to="/newimage"> New Image</Link>
          </Nav.Item>
        </Nav>
      </Nav>
      <Form>
        <Row style={{ justifyContent: "center" }}>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search book title"
              onChange={SearchItem}
            ></Form.Control>
          </Col>
        </Row>
      </Form>
      <div className="row">
        {data.map((d) => (
          <div className="col-sm-4 py-3">
            <Card style={{ width: "18rem" }}>
              <Card.Body >
                <Card.Img src={d.image}></Card.Img>
                <h4>Title:</h4>
                {d.title}
                <br />
                <h4>Author</h4>
                {d.author}
                <br />
                <h4>Description</h4> {d.des}
                <Card.Title style={{ padding: 10 }}>{d.title}</Card.Title>
                <Card.Text>{d.des}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
