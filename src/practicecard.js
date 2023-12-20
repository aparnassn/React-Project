import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Practicecard() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  function handleClick(id) {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => setData(res.data));
  }

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);
  console.log({ data });

  return (
    <div className="row" style={{backgroundColor:"#0A0C42 "}}>
      {data.map((d) => (
        <div className="col-sm-3 py-5">
          <div className="card" >
            <div className="card-body">
              <div className="card-text">
                <b>{d.title}</b><br></br>
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    handleClick(d.id);
                    navigate(`/info#${d.id}`);
                  }}
                >
                  Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Practicecard;
