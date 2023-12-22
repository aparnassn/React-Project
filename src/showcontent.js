import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Card } from "react-bootstrap";
import CardBody from "react-bootstrap";

function Showcontent() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (i) => setShow(i);

  // function handleShow(i){
  //     let content = data.filter((f)=>f.id===data.id)
  //     if(content){
  //         document.getElementById("value").innerHTML=content
  //     }
  //     else{
  //         return false
  //     }
  // }

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setData(res.data));
  };
  useEffect(() => getData(), []);
  // console.log({data})

  return (
    <div className="row">
      {data.map((d, i) => (
        <div className="col-sm-4 py-3 ">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{d.title}</Card.Title>

              <Button
                variant="outline-warning"
                onClick={() => handleShow(i + 1)}
              >
                click for details
              </Button>
            </Card.Body>
          </Card>
          {console.log({ i, show })}
          <Modal
            show={i + 1 === show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Card #{d.id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                <b>ID: </b>
                {d.id}
              </p>
              <p>
                <b>Title: </b>
                {d.title}
              </p>
              <p>
                <b>Completed: </b>
                {d.completed.toString()}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Ok
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ))}
    </div>
  );
}

export default Showcontent;
